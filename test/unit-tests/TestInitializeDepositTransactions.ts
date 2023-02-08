import { expect } from "chai";
import {
  convertToNashTransactionObj,
  deployNashEscrowContract,
} from "../utils/testutils";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { BigNumber } from "ethers";
import { EMPTY_ADDRESS } from "../utils/test-constants";

describe("Transaction Initialize Deposit Transaction.", function () {
  it("Check if all transaction fields have the correct value...", async function () {
    const { owner, address2, tokenLabel, nashEscrow, cUSD } = await loadFixture(
      deployNashEscrowContract
    );

    await expect(
      nashEscrow.initializeDepositTransaction(5, cUSD.address, tokenLabel)
    ).to.emit(nashEscrow, "TransactionInitEvent");

    const tx = await nashEscrow.getTransactionByIndex(0);
    const nashTx = convertToNashTransactionObj(tx);

    expect(nashTx.id).to.equal(0, "Transaction id should be equal to zero");
    expect(nashTx.txType).to.equal(0, "The transaction type should be deposit");
    expect(nashTx.clientAddress).equal(
      owner.address,
      "Should have the correct client address"
    );
    expect(nashTx.agentAddress).to.equal(
      EMPTY_ADDRESS,
      "Should not have an agent address"
    );
    expect(nashTx.amount).to.equal(5, "The amount should be 5 units");
    expect(nashTx.agentApproval, "Agent approval should be false").to.be.false;
    expect(nashTx.clientApproval, "Client approval should be false").to.be
      .false;
    expect(
      nashTx.clientPaymentDetails,
      "The transaction type should be deposit"
    ).to.equal("");
    expect(
      nashTx.agentPaymentDetails,
      "The transaction type should be deposit"
    ).to.equal("");
    expect(
      nashTx.exchangeToken,
      "The transaction type should be deposit"
    ).to.equal(cUSD.address);
    expect(
      nashTx.exchangeTokenLabel,
      "The transaction type should be deposit"
    ).to.equal("cUSD");

    // Assert autoincrement of next transaction id.

    const nextTxIndex = await nashEscrow.getNextTransactionIndex();
    expect(nextTxIndex).to.equal(
      1,
      "Next transaction index has been updated properly"
    );
  });

  it("Check if it reverts with amount as zero...", async function () {
    const { owner, address2, tokenLabel, nashEscrow, cUSD } = await loadFixture(
      deployNashEscrowContract
    );

    await expect(
      nashEscrow.initializeDepositTransaction(0, cUSD.address, tokenLabel)
    ).to.revertedWith("Amount to deposit must be greater than 0.");
  });

  it("Check if it reverts with amount as -1...", async function () {
    const { owner, address2, tokenLabel, nashEscrow, cUSD } = await loadFixture(
      deployNashEscrowContract
    );

    await expect(
      nashEscrow.initializeDepositTransaction(-1, cUSD.address, tokenLabel)
    ).to.rejected;
  });
});
