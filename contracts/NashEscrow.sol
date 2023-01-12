// SPDX-License-Identifier: Apache-2.0

pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "hardhat/console.sol";

contract NashEscrow is Initializable, OwnableUpgradeable {
    uint256 private nextTransactionID;

    uint256 private agentFee;

    uint256 private nashFee;

    uint256 private successfulTransactionsCounter;

    event AgentPairingEvent(NashTransaction wtx);

    event TransactionInitEvent(NashTransaction wtx);

    event ClientConfirmationEvent(NashTransaction wtx);

    event AgentConfirmationEvent(NashTransaction wtx);

    event ConfirmationCompletedEvent(NashTransaction wtx);

    event TransactionCompletionEvent(NashTransaction wtx);

    event SavedClientCommentEvent(NashTransaction wtx);

    /**
     * Holds the nash treasury address funds. Default account for alfajores test net.
     */
    address internal nashTreasuryAddress;

    // Maps unique payment IDs to escrowed payments.
    // These payment IDs are the temporary wallet addresses created with the escrowed payments.
    mapping(uint256 => NashTransaction) private escrowTransactions;

    /**
     * An enum of the transaction types. either deposit or withdrawal.
     */
    enum TransactionType {
        DEPOSIT,
        WITHDRAWAL
    }

    /**
     * An enum of all the states of a transaction.
     * AWAITING_AGENT :- transaction initialized and waitning for agent pairing.
     * AWAITING_CONFIRMATIONS :- agent paired awaiting for approval by the agent and client.
     * CONFIRMED :- transactions confirmed by both client and aagent.
     * DONE :- transaction completed, currency moved from escrow to destination addess.
     */
    enum Status {
        AWAITING_AGENT,
        AWAITING_CONFIRMATIONS,
        CONFIRMED,
        CANCELED,
        DONE
    }

    /**
     * Object of escrow transactions.
     **/
    struct NashTransaction {
        uint256 id;
        TransactionType txType;
        address clientAddress;
        address agentAddress;
        Status status;
        uint256 netAmount;
        uint256 agentFee;
        uint256 nashFee;
        uint256 grossAmount;
        bool agentApproval;
        bool clientApproval;
        string agentPaymentDetails;
        string clientPaymentDetails;
        address exchangeToken;
    }

    /**
     * Updates the nash treasury address.
     */
    function setNashTreasury(address _newTreasuryAddress) public onlyOwner {
        nashTreasuryAddress = _newTreasuryAddress;
    }

    /**
     * Constructor.
     */
    function initialize(
        address _nashTreasuryAddress,
        uint256 _nashFees,
        uint256 _agentFees
    ) external initializer {
        __Context_init_unchained();
        __Ownable_init_unchained();

        // Allow for default value.
        if (_nashTreasuryAddress != address(0)) {
            nashTreasuryAddress = _nashTreasuryAddress;
        }

        // Allow for default value.
        if (_agentFees > 0) {
            agentFee = _agentFees;
        }

        // Allow for default value.
        if (_nashFees > 0) {
            nashFee = _nashFees;
        }

        if (nextTransactionID < 1) {
            nextTransactionID = 0;
        }
    }

    /**
     * Get the nash fees from the smart contract.
     */
    function getNashFee() public view returns (uint256) {
        return nashFee;
    }

    /**
     * Sets the Nash fees on the smart contract.
     * @param _nashFees .
     */
    function updateNashFees(uint256 _nashFees) public onlyOwner {
        nashFee = _nashFees;
    }

    /**
     * Get the agent fees from the smart contract.
     */
    function getAgentFee() public view returns (uint256) {
        return agentFee;
    }

    /**
     * Sets the agents fees on the smart contract.
     * @param _agentFees .
     */
    function updateAgentFees(uint256 _agentFees) public onlyOwner {
        nashFee = _agentFees;
    }

    /**
     * Get the number of transactions in the smart contract.
     */
    function getNextTransactionIndex() public view returns (uint256) {
        return nextTransactionID;
    }

    /**
     * Get the number of successful transactions within the smart contract.
     */
    function countSuccessfulTransactions() public view returns (uint256) {
        return successfulTransactionsCounter;
    }

    /**
     * Client initialize withdrawal transaction.
     * @param _amount the amount to be withdrawn.
     **/
    function initializeWithdrawalTransaction(
        uint256 _amount,
        address _exchangeToken
    ) public payable {
        require(_amount > 0, "Amount to deposit must be greater than 0.");

        uint256 wtxID = nextTransactionID;
        nextTransactionID++;

        uint256 grossAmount = _amount;
        NashTransaction storage newPayment = escrowTransactions[wtxID];

        newPayment.clientAddress = msg.sender;
        newPayment.id = wtxID;
        newPayment.txType = TransactionType.WITHDRAWAL;
        newPayment.netAmount = grossAmount - (nashFee + agentFee);
        newPayment.agentFee = agentFee;
        newPayment.nashFee = nashFee;
        newPayment.grossAmount = grossAmount;
        newPayment.status = Status.AWAITING_AGENT;

        newPayment.agentApproval = false;
        newPayment.clientApproval = false;
        newPayment.exchangeToken = _exchangeToken;

        ERC20(_exchangeToken).transferFrom(
            msg.sender,
            address(this),
            grossAmount
        );

        emit TransactionInitEvent(newPayment);
    }

    /**
     * Client initialize deposit transaction.
     * @param _amount the amount to be deposited.
     * @param _exchangeToken the token to be exchanged through the escrow.
     **/
    function initializeDepositTransaction(
        uint256 _amount,
        address _exchangeToken
    ) public {
        require(_amount > 0, "Amount to deposit must be greater than 0.");

        uint256 wtxID = nextTransactionID;
        nextTransactionID++;

        NashTransaction storage newPayment = escrowTransactions[wtxID];

        uint256 grossAmount = _amount;

        newPayment.clientAddress = msg.sender;
        newPayment.id = wtxID;
        newPayment.txType = TransactionType.DEPOSIT;
        newPayment.netAmount = grossAmount - (nashFee + agentFee);
        newPayment.agentFee = agentFee;
        newPayment.nashFee = nashFee;
        newPayment.grossAmount = grossAmount;
        newPayment.status = Status.AWAITING_AGENT;

        newPayment.agentApproval = false;
        newPayment.clientApproval = false;
        newPayment.exchangeToken = _exchangeToken;

        emit TransactionInitEvent(newPayment);
    }

    /**
     * Writes the encrypted client information inot the smart contract.
     * @param _transactionid the transaction id.
     * @param _comment the encrypted comment.
     */
    function clientWritePaymentInformation(
        uint256 _transactionid,
        string calldata _comment
    ) public clientOnly(_transactionid) awaitConfirmation(_transactionid) {
        NashTransaction storage wtx = escrowTransactions[_transactionid];
        wtx.clientPaymentDetails = _comment;

        emit SavedClientCommentEvent(wtx);
    }

    /**
     * Marks pairs the client to an agent to attent to the transaction.
     * @param _transactionid the identifire of the transaction.
     * @param _paymentDetails the agents phone number.
     */
    function agentAcceptWithdrawalTransaction(
        uint256 _transactionid,
        string calldata _paymentDetails
    )
        public
        awaitAgent(_transactionid)
        withdrawalsOnly(_transactionid)
        nonClientOnly(_transactionid)
    {
        NashTransaction storage wtx = escrowTransactions[_transactionid];

        wtx.agentAddress = msg.sender;
        wtx.status = Status.AWAITING_CONFIRMATIONS;
        wtx.agentPaymentDetails = _paymentDetails;

        emit AgentPairingEvent(wtx);
    }

    /**
     * Marks pairs the client to an agent to attent to the transaction.
     * @param _transactionid the identifire of the transaction.
     * @param _paymentDetails the agents phone number.
     */
    function agentAcceptDepositTransaction(
        uint256 _transactionid,
        string calldata _paymentDetails
    )
        public
        payable
        awaitAgent(_transactionid)
        depositsOnly(_transactionid)
        nonClientOnly(_transactionid)
        balanceGreaterThanAmount(_transactionid)
    {
        NashTransaction storage wtx = escrowTransactions[_transactionid];

        wtx.agentAddress = msg.sender;
        wtx.status = Status.AWAITING_CONFIRMATIONS;

        require(
            ERC20(wtx.exchangeToken).transferFrom(
                msg.sender,
                address(this),
                wtx.grossAmount
            ),
            "You don't have enough cUSD to accept this request."
        );
        wtx.agentPaymentDetails = _paymentDetails;
        emit AgentPairingEvent(wtx);
    }

    /**
     * Client confirms that s/he has sent money to the agent.
     */
    function clientConfirmPayment(
        uint256 _transactionid
    ) public awaitConfirmation(_transactionid) clientOnly(_transactionid) {
        NashTransaction storage wtx = escrowTransactions[_transactionid];

        require(!wtx.clientApproval, "Client already confirmed payment!!");
        wtx.clientApproval = true;

        emit ClientConfirmationEvent(wtx);

        if (wtx.agentApproval) {
            wtx.status = Status.CONFIRMED;
            emit ConfirmationCompletedEvent(wtx);
            finalizeTransaction(_transactionid);
        }
    }

    /**
     * Agent comnfirms that the payment  has been made.
     */
    function agentConfirmPayment(
        uint256 _transactionid
    ) public awaitConfirmation(_transactionid) agentOnly(_transactionid) {
        NashTransaction storage wtx = escrowTransactions[_transactionid];

        require(!wtx.agentApproval, "Agent already confirmed payment!!");
        wtx.agentApproval = true;

        emit AgentConfirmationEvent(wtx);

        if (wtx.clientApproval) {
            wtx.status = Status.CONFIRMED;
            emit ConfirmationCompletedEvent(wtx);
            finalizeTransaction(_transactionid);
        }
    }

    /**
     * Can be automated in the frontend by use of event listeners. eg on confirmation event.
     **/
    function finalizeTransaction(uint256 _transactionid) public {
        NashTransaction storage wtx = escrowTransactions[_transactionid];
        require(
            wtx.clientAddress == msg.sender || wtx.agentAddress == msg.sender,
            "Only the involved parties can finalize the transaction.!!"
        );

        require(
            wtx.status == Status.CONFIRMED,
            "Transaction not yet confirmed by both parties!!"
        );

        if (wtx.txType == TransactionType.DEPOSIT) {
            ERC20(wtx.exchangeToken).transfer(
                wtx.clientAddress,
                wtx.netAmount
            );
        } else {
            // Transafer the amount to the agent address.
            require(
                ERC20(wtx.exchangeToken).transfer(
                    wtx.agentAddress,
                    wtx.netAmount
                ),
                "Transaction failed."
            );
        }

        // Transafer the agents fees to the agents address.
        require(
            ERC20(wtx.exchangeToken).transfer(wtx.agentAddress, wtx.agentFee),
            "Agent fee transfer failed."
        );

        // Transafer the agents total (amount + agent fees)
        require(
            ERC20(wtx.exchangeToken).transfer(
                nashTreasuryAddress,
                wtx.nashFee
            ),
            "Transaction fee transfer failed."
        );

        successfulTransactionsCounter++;

        wtx.status = Status.DONE;

        emit TransactionCompletionEvent(wtx);
    }

    /**
     * Gets transactions by index.
     * @param _transactionID the transaction id.
     * @return the transaction in questsion.
     */
    function getTransactionByIndex(
        uint256 _transactionID
    ) public view returns (NashTransaction memory) {
        NashTransaction memory wtx = escrowTransactions[_transactionID];
        return wtx;
    }

    /**
     * Gets the next unpaired transaction from the map.
     * @param _transactionID the transaction id.
     * @return the transaction in questsion.
     */
    function getNextUnpairedTransaction(
        uint256 _transactionID
    ) public view returns (NashTransaction memory) {
        uint256 transactionID = _transactionID;
        NashTransaction storage wtx;

        // prevent an extravagant loop.
        if (_transactionID > nextTransactionID) {
            transactionID = nextTransactionID;
        }

        // Loop through the transactions map by index.
        for (int256 index = int256(transactionID); index >= 0; index--) {
            wtx = escrowTransactions[uint256(index)];

            if (
                wtx.clientAddress != address(0) &&
                wtx.agentAddress == address(0)
            ) {
                // the next unparied transaction.
                return wtx;
            }
        }
        // return empty wtx object.
        wtx = escrowTransactions[nextTransactionID];
        return wtx;
    }

    /**
     * Gets the next unpaired transaction from the map.
     * @return the transaction in questsion.
     */
    function getTransactions(
        uint256 _paginationCount,
        uint256 _startingPoint,
        Status _status
    ) public view returns (NashTransaction[] memory) {
        uint256 startingPoint = _startingPoint;
        uint256 paginationCount = _paginationCount;

        // prevent an extravagant loop.
        if (startingPoint > nextTransactionID) {
            startingPoint = nextTransactionID;
        }

        // prevent an extravagant loop.
        if (_paginationCount > nextTransactionID) {
            paginationCount = nextTransactionID;
        }

        if (_paginationCount > 15) {
            paginationCount = 15;
        }

        NashTransaction[] memory transactions = new NashTransaction[](
            paginationCount
        );

        uint256 transactionCounter = 0;
        for (uint256 i = 0; i < paginationCount; i++) {
            NashTransaction memory wtx;
            // Loop through the transactions map by index.
            bool updated = false;
            for (int256 index = int256(startingPoint); index >= 0; index--) {
                wtx = escrowTransactions[uint256(index)];

                if (wtx.status == _status && wtx.clientAddress != address(0)) {
                    transactions[uint256(i)] = wtx;
                    if (index > 0) {
                        startingPoint = uint256(index) - 1;
                    }
                    // prevent another parent loop after zero
                    updated = index != 0;
                    transactionCounter++;
                    break;
                }
            }
            if (!updated) {
                break;
            }
        }

        NashTransaction[] memory ts = new NashTransaction[](transactionCounter);

        for (uint256 i = 0; i < transactions.length; i++) {
            NashTransaction memory wtx = transactions[i];
            if (wtx.clientAddress != address(0)) {
                ts[i] = wtx;
            }
        }
        return ts;
    }

    /**
     * Gets the next unpaired transaction from the map.
     * @return the transaction in questsion.
     */
    function getMyTransactions(
        uint256 _paginationCount,
        uint256 _startingPoint,
        Status[] memory _status,
        address myAddress
    ) public view returns (NashTransaction[] memory) {
        uint256 startingPoint = _startingPoint;
        uint256 paginationCount = _paginationCount;

        // prevent an extravagant loop.
        if (startingPoint > nextTransactionID) {
            startingPoint = nextTransactionID;
        }

        // prevent an extravagant loop.
        if (_paginationCount > nextTransactionID) {
            paginationCount = nextTransactionID;
        }

        if (_paginationCount > 15) {
            paginationCount = 15;
        }
        NashTransaction[] memory transactions = new NashTransaction[](
            paginationCount
        );

        uint256 transactionCounter = 0;
        for (uint256 i = 0; i < paginationCount; i++) {
            NashTransaction memory wtx;
            // Loop through the transactions map by index.
            bool updated = false;
            for (int256 index = int256(startingPoint); index >= 0; index--) {
                wtx = escrowTransactions[uint256(index)];
                if (
                    isTxInStatus(wtx, _status) &&
                    (wtx.clientAddress == myAddress ||
                        wtx.agentAddress == myAddress)
                ) {
                    transactions[uint256(i)] = wtx;
                    if (index > 0) {
                        startingPoint = uint256(index) - 1;
                    }
                    // prevent another parent loop after zero
                    updated = index != 0;
                    transactionCounter++;
                    break;
                }
            }
            if (!updated) {
                break;
            }
        }

        NashTransaction[] memory ts = new NashTransaction[](transactionCounter);

        for (uint256 i = 0; i < transactions.length; i++) {
            NashTransaction memory wtx = transactions[i];
            if (wtx.clientAddress != address(0)) {
                ts[i] = wtx;
            }
        }

        return ts;
    }

    function isTxInStatus(
        NashTransaction memory wtx,
        Status[] memory _status
    ) public pure returns (bool) {
        for (uint256 i = 0; i < _status.length; i++) {
            if (wtx.status == _status[i]) {
                return true;
            }
        }
        return false;
    }

    /**
     * Prevents users othe than the agent from running the logic.
     * @param _transactionid the transaction being processed.
     */
    modifier agentOnly(uint256 _transactionid) {
        NashTransaction storage wtx = escrowTransactions[_transactionid];
        require(
            msg.sender == wtx.agentAddress,
            "Action can only be performed by the agent"
        );
        _;
    }

    /**
     * Run the method for deposit transactions only.
     */
    modifier depositsOnly(uint256 _transactionid) {
        NashTransaction storage wtx = escrowTransactions[_transactionid];
        require(
            wtx.txType == TransactionType.DEPOSIT,
            "Action can only be performed for deposit transactions only!!"
        );
        _;
    }

    /**
     * Run the method for withdrawal transactions only.
     * @param _transactionid the transaction being processed.
     */
    modifier withdrawalsOnly(uint256 _transactionid) {
        NashTransaction storage wtx = escrowTransactions[_transactionid];
        require(
            wtx.txType == TransactionType.WITHDRAWAL,
            "Action can only be performed for withdrawal transactions only!!"
        );
        _;
    }

    /**
     * Prevents users othe than the client from running the logic.
     * @param _transactionid the transaction being processed.
     */
    modifier clientOnly(uint256 _transactionid) {
        NashTransaction storage wtx = escrowTransactions[_transactionid];
        require(
            msg.sender == wtx.clientAddress,
            "Action can only be performed by the client!!"
        );
        _;
    }

    /**
     * Prevents the client from running the logic.
     * @param _transactionid the transaction being processed.
     */
    modifier nonClientOnly(uint256 _transactionid) {
        NashTransaction storage wtx = escrowTransactions[_transactionid];
        require(
            msg.sender != wtx.clientAddress,
            "Action can not be performed by the client!!"
        );
        _;
    }

    /**
     * Only alows method to be excecuted in tx in question is waiting confirmation.
     * @param _transactionid the transaction being processed.
     */
    modifier awaitConfirmation(uint256 _transactionid) {
        NashTransaction storage wtx = escrowTransactions[_transactionid];
        require(
            wtx.status == Status.AWAITING_CONFIRMATIONS,
            "Transaction is not awaiting confirmation from anyone."
        );
        _;
    }

    /**
     * Prevents prevents double pairing of agents to transactions.
     * @param _transactionid the transaction being processed.
     */
    modifier awaitAgent(uint256 _transactionid) {
        NashTransaction storage wtx = escrowTransactions[_transactionid];
        require(
            wtx.status == Status.AWAITING_AGENT,
            "Transaction already paired to an agent!!"
        );
        _;
    }

    /**
     * Prevents users othe than the client from running the logic
     * @param _transactionid the transaction being processed.
     */
    modifier balanceGreaterThanAmount(uint256 _transactionid) {
        NashTransaction storage wtx = escrowTransactions[_transactionid];
        require(
            ERC20(wtx.exchangeToken).balanceOf(address(msg.sender)) >
                wtx.grossAmount,
            "Your balance must be greater than the transaction gross amount."
        );
        _;
    }
}
