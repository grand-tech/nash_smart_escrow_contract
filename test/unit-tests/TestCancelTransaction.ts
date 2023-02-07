import { expect } from "chai";
import {
  convertToNashTransactionObj,
  deployNashEscrowContract,
} from "../utils/testutils";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { BigNumber } from "ethers";

describe("Cancel Transaction.", function () {
  it("Cancel deposit transaction.", async function () {
    const { owner, address2, tokenLabel, nashEscrow, cUSD } = await loadFixture(
      deployNashEscrowContract
    );

    await cUSD.approve(nashEscrow.address, 10);

    await expect(
      nashEscrow.initializeDepositTransaction(5, cUSD.address, tokenLabel)
    ).to.emit(nashEscrow, "TransactionInitEvent");

    await expect(nashEscrow.cancelTransaction(0)).to.emit(
      nashEscrow,
      "TransactionCanceledEvent"
    );

    // Exact value.
    const tx = await nashEscrow.getTransactionByIndex(0);
    const nashTx = convertToNashTransactionObj(tx);
    expect(nashTx.status, "Status should be 3 " + nashTx.status).equal(3);
  });

  it("Cancel withdrawal transaction.", async function () {
    const { owner, address2, tokenLabel, nashEscrow, cUSD } = await loadFixture(
      deployNashEscrowContract
    );

    await cUSD.approve(nashEscrow.address, 10);

    let clientBalance = await cUSD.balanceOf(owner.address);
    expect(clientBalance).to.equal(BigNumber.from("100"));
    await expect(
      nashEscrow.initializeWithdrawalTransaction(5, cUSD.address, tokenLabel)
    ).to.emit(nashEscrow, "TransactionInitEvent");

    // Verify the the funds have been moved to the escrow.
    clientBalance = await cUSD.balanceOf(owner.address);
    expect(clientBalance).to.equal(BigNumber.from("95"));

    await expect(nashEscrow.cancelTransaction(0)).to.emit(
      nashEscrow,
      "TransactionCanceledEvent"
    );

    // Verify the the funds have been restored to the client.
    clientBalance = await cUSD.balanceOf(owner.address);
    expect(clientBalance).to.equal(BigNumber.from("100"));

    // Exact value.
    const tx = await nashEscrow.getTransactionByIndex(0);

    const nashTx = convertToNashTransactionObj(tx);
    expect(nashTx.status, "Status should be 3 " + nashTx.status).equal(3);
  });

  it("Test invalid address.", async function () {
    const { owner, address2, tokenLabel, nashEscrow, cUSD } = await loadFixture(
      deployNashEscrowContract
    );

    // Assert balance of wrong account is zero.
    let address2Balance = await cUSD.balanceOf(address2.address);
    expect(address2Balance).to.equal(BigNumber.from("0"));

    await cUSD.approve(nashEscrow.address, 10);

    let clientBalance = await cUSD.balanceOf(owner.address);
    expect(clientBalance).to.equal(BigNumber.from("100"));
    await expect(
      nashEscrow.initializeWithdrawalTransaction(5, cUSD.address, tokenLabel)
    ).to.emit(nashEscrow, "TransactionInitEvent");

    // Verify the the funds have been moved to the escrow.
    clientBalance = await cUSD.balanceOf(owner.address);
    expect(clientBalance).to.equal(BigNumber.from("95"));

    await expect(nashEscrow.connect(address2).cancelTransaction(0)).to.reverted;

    // Verify the the funds have been not restored to the client.
    clientBalance = await cUSD.balanceOf(owner.address);
    expect(clientBalance).to.equal(BigNumber.from("95"));

    // Assert balance of wrong account has not changed.
    address2Balance = await cUSD.balanceOf(address2.address);
    expect(address2Balance).to.equal(BigNumber.from("0"));

    // Exact value.
    const tx = await nashEscrow.getTransactionByIndex(0);

    const nashTx = convertToNashTransactionObj(tx);
    expect(nashTx.status, "Status should be 0 " + nashTx.status).equal(0);
  });
});
