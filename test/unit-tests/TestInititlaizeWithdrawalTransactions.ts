import { expect } from "chai";
import {
  convertToNashTransactionObj,
  deployNashEscrowContract,
} from "../utils/testutils";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { BigNumber } from "ethers";
import { EMPTY_ADDRESS } from "../utils/test-constants";

describe("Transaction Initialize Withdraw Transaction.", function () {
  it("Check if all transaction fields have the correct value...", async function () {
    const { owner, address2, tokenLabel, nashEscrow, USDc } = await loadFixture(
      deployNashEscrowContract
    );

    let clientBalance = await USDc.balanceOf(owner.address);
    expect(clientBalance).to.equal(BigNumber.from("100"));
    await USDc.approve(nashEscrow.address, 10);

    await expect(
      nashEscrow.initializeWithdrawalTransaction(5, USDc.address, tokenLabel)
    ).to.emit(nashEscrow, "TransactionInitEvent");

    clientBalance = await USDc.balanceOf(owner.address);
    expect(clientBalance).to.equal(BigNumber.from("95"));

    const tx = await nashEscrow.getTransactionByIndex(0);
    const nashTx = convertToNashTransactionObj(tx);

    expect(nashTx.id).to.equal(0, "Transaction id should be equal to zero");
    expect(nashTx.txType).to.equal(
      1,
      "The transaction type should be withdraw"
    );
    expect(nashTx.clientAddress).equal(
      owner.address,
      "Should have the correct client address"
    );
    expect(nashTx.agentAddress).to.equal(
      EMPTY_ADDRESS,
      "Should not have an agent address"
    );
    expect(nashTx.status).to.equal(0, "The transaction status should be 0");
    expect(nashTx.amount).to.equal(5, "The amount should be 5 units");
    expect(nashTx.agentApproval, "Agent approval should be false").to.be.false;
    expect(nashTx.clientApproval, "Client approval should be false").to.be
      .false;
    expect(nashTx.clientPaymentDetails).to.equal(
      "",
      "Should not have the client`s payment details."
    );
    expect(nashTx.agentPaymentDetails).to.equal(
      "",
      "Should not have the agent`s payment details."
    );
    expect(nashTx.exchangeToken).to.equal(
      USDc.address,
      "Should not have the correct exchange token address."
    );
    expect(nashTx.exchangeTokenLabel).to.equal(
      "USDc",
      "Should not have the correct exchange token label."
    );

    // Assert autoincrement of next transaction id.
    const nextTxIndex = await nashEscrow.getNextTransactionIndex();
    expect(nextTxIndex).to.equal(
      1,
      "Next transaction index has been updated properly"
    );
  });

  it("Check if it reverts with amount as zero...", async function () {
    const { owner, address2, tokenLabel, nashEscrow, USDc } = await loadFixture(
      deployNashEscrowContract
    );

    let clientBalance = await USDc.balanceOf(owner.address);
    expect(clientBalance).to.equal(BigNumber.from("100"));
    await USDc.approve(nashEscrow.address, 10);

    await expect(
      nashEscrow.initializeWithdrawalTransaction(0, USDc.address, tokenLabel)
    ).to.revertedWith("Amount to withdraw must be greater than 0.");

    clientBalance = await USDc.balanceOf(owner.address);
    expect(clientBalance).to.equal(BigNumber.from("100"));
  });

  it("Check if it reverts with amount as -1...", async function () {
    const { owner, address2, tokenLabel, nashEscrow, USDc } = await loadFixture(
      deployNashEscrowContract
    );

    await expect(
      nashEscrow.initializeWithdrawalTransaction(-1, USDc.address, tokenLabel)
    ).to.rejected;
  });

  it("Withdraw amount greater that users balance...", async function () {
    const { owner, address2, tokenLabel, nashEscrow, USDc } = await loadFixture(
      deployNashEscrowContract
    );

    let clientBalance = await USDc.balanceOf(address2.address);
    expect(clientBalance).to.equal(BigNumber.from("0"));
    await USDc.connect(address2).approve(nashEscrow.address, 10);

    await expect(
      nashEscrow
        .connect(address2)
        .initializeWithdrawalTransaction(5, USDc.address, tokenLabel)
    ).to.revertedWith("ERC20: transfer amount exceeds balance");

    clientBalance = await USDc.balanceOf(address2.address);
    expect(clientBalance).to.equal(BigNumber.from("0"));
  });
});
