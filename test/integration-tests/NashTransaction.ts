import { expect } from "chai";
import { BigNumber } from "ethers";
import {
  convertToNashTransactionObj,
  deployNashEscrowContract,
  NashEscrowTransaction,
} from "../testutils";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";

describe("Deposit E2E", function () {
  it("Test end to end deposit tx", async function () {
    const { owner, address2, tokenLabel, nashEscrow, cUSD } = await loadFixture(
      deployNashEscrowContract
    );

    const agentSigner = owner;
    const clientSigner = address2;

    await cUSD.approve(nashEscrow.address, 10);
    expect(await nashEscrow.getNextTransactionIndex()).to.equal(0);

    let agentBalance = await cUSD.balanceOf(agentSigner.address);
    let clientBalance = await cUSD.balanceOf(clientSigner.address);

    // Initialize top up transaction.
    await expect(
      nashEscrow
        .connect(clientSigner)
        .initializeDepositTransaction(5, cUSD.address, tokenLabel)
    ).to.emit(nashEscrow, "TransactionInitEvent");

    // Check balances after method call.
    agentBalance = await cUSD.balanceOf(agentSigner.address);
    clientBalance = await cUSD.balanceOf(clientSigner.address);
    expect(agentBalance).to.equal(BigNumber.from("100"));
    expect(clientBalance).to.equal(BigNumber.from("0"));

    // Agent accept transaction
    await expect(
      nashEscrow
        .connect(agentSigner)
        .agentAcceptDepositTransaction(0, "test phone number")
    ).to.emit(nashEscrow, "AgentPairingEvent");

    // Client write comment. i.e after comment encrypotion on the front end.
    await expect(
      nashEscrow
        .connect(clientSigner)
        .clientWritePaymentInformation(0, "test client number")
    ).to.emit(nashEscrow, "SavedClientCommentEvent");
    // Check balances after method call.
    agentBalance = await cUSD.balanceOf(agentSigner.address);
    clientBalance = await cUSD.balanceOf(clientSigner.address);
    expect(agentBalance).to.equal(BigNumber.from("95"));
    expect(clientBalance).to.equal(BigNumber.from("0"));

    // Client confirm transaction.
    expect(
      await nashEscrow.connect(clientSigner).clientConfirmPayment(0)
    ).to.emit(nashEscrow, "ConfirmationCompletedEvent");

    // Check balances after method call.
    agentBalance = await cUSD.balanceOf(agentSigner.address);
    clientBalance = await cUSD.balanceOf(clientSigner.address);
    expect(agentBalance).to.equal(BigNumber.from("95"));
    expect(clientBalance).to.equal(BigNumber.from("0"));

    // Agent confirm transaction.
    expect(
      await nashEscrow.connect(agentSigner).agentConfirmPayment(0)
    ).to.emit(nashEscrow, "TransactionCompletionEvent");

    // Check balances after method call.
    agentBalance = await cUSD.balanceOf(agentSigner.address);
    clientBalance = await cUSD.balanceOf(clientSigner.address);

    expect(agentBalance).to.equal(BigNumber.from("95"));
    expect(clientBalance).to.equal(BigNumber.from("5"));

    // Value above next tx index
    const tx2: NashEscrowTransaction = convertToNashTransactionObj(
      await nashEscrow.connect(address2).getTransactionByIndex(0)
    );
    expect(tx2.id).equal(0);
    expect(tx2.status).equal(4);
  });
});

describe("Withdrawal E2E", function () {
  it("Test end to end Withdrawal tx", async function () {
    const { owner, address2, tokenLabel, nashEscrow, cUSD } = await loadFixture(
      deployNashEscrowContract
    );

    const agentSigner = address2;
    const clientSigner = owner;

    await cUSD.approve(nashEscrow.address, 10);
    expect(await nashEscrow.getNextTransactionIndex()).to.equal(0);

    let agentBalance = await cUSD.balanceOf(agentSigner.address);
    let clientBalance = await cUSD.balanceOf(clientSigner.address);

    // Initialize top up transaction.
    await expect(
      nashEscrow
        .connect(clientSigner)
        .initializeWithdrawalTransaction(5, cUSD.address, tokenLabel)
    ).to.emit(nashEscrow, "TransactionInitEvent");

    // Check balances after method call.
    agentBalance = await cUSD.balanceOf(agentSigner.address);
    clientBalance = await cUSD.balanceOf(clientSigner.address);
    expect(clientBalance).to.equal(BigNumber.from("95"));
    expect(agentBalance).to.equal(BigNumber.from("0"));

    // Agent accept transaction
    await expect(
      nashEscrow
        .connect(agentSigner)
        .agentAcceptWithdrawalTransaction(0, "test phone number")
    ).to.emit(nashEscrow, "AgentPairingEvent");

    // Client write comment. i.e after comment encrypotion on the front end.
    await expect(
      nashEscrow
        .connect(clientSigner)
        .clientWritePaymentInformation(0, "test client number")
    ).to.emit(nashEscrow, "SavedClientCommentEvent");
    // Check balances after method call.
    agentBalance = await cUSD.balanceOf(agentSigner.address);
    clientBalance = await cUSD.balanceOf(clientSigner.address);
    expect(clientBalance).to.equal(BigNumber.from("95"));
    expect(agentBalance).to.equal(BigNumber.from("0"));

    // Client confirm transaction.
    expect(
      await nashEscrow.connect(clientSigner).clientConfirmPayment(0)
    ).to.emit(nashEscrow, "ConfirmationCompletedEvent");

    // Check balances after method call.
    agentBalance = await cUSD.balanceOf(agentSigner.address);
    clientBalance = await cUSD.balanceOf(clientSigner.address);
    expect(agentBalance).to.equal(BigNumber.from("0"));
    expect(clientBalance).to.equal(BigNumber.from("95"));

    // Agent confirm transaction.
    expect(
      await nashEscrow.connect(agentSigner).agentConfirmPayment(0)
    ).to.emit(nashEscrow, "TransactionCompletionEvent");

    // Check balances after method call.
    agentBalance = await cUSD.balanceOf(agentSigner.address);
    clientBalance = await cUSD.balanceOf(clientSigner.address);
    expect(agentBalance).to.equal(BigNumber.from("5"));
    expect(clientBalance).to.equal(BigNumber.from("95"));

    // Value above next tx index
    const tx2: NashEscrowTransaction = convertToNashTransactionObj(
      await nashEscrow.connect(address2).getTransactionByIndex(0)
    );
    expect(tx2.id).equal(0);
    expect(tx2.status).equal(4);
  });
});
