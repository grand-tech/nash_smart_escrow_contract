import { expect } from "chai";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import {
  convertToNashTransactionObj,
  deployNashEscrowContract,
} from "../testutils";

describe("Test Get Next un-paired transaction.", function () {
  it("Get unpaired transaction.", async function () {
    const { owner, address2, tokenLable, nashEscrow, cUSD } = await loadFixture(
      deployNashEscrowContract
    );

    await cUSD.approve(nashEscrow.address, 10);

    expect(await nashEscrow.getNextTransactionIndex()).to.equal(0);

    expect(
      await nashEscrow.initializeDepositTransaction(5, cUSD.address, tokenLable)
    )
      .to.emit("NashEscrow", "TransactionInitEvent")
      .withArgs(0, owner);

    expect(
      await nashEscrow.initializeDepositTransaction(5, cUSD.address, tokenLable)
    )
      .to.emit("NashEscrow", "TransactionInitEvent")
      .withArgs(0, address2);

    expect(
      await nashEscrow.initializeDepositTransaction(5, cUSD.address, tokenLable)
    )
      .to.emit("NashEscrow", "TransactionInitEvent")
      .withArgs(0, owner);

    expect(
      await nashEscrow.initializeWithdrawalTransaction(
        5,
        cUSD.address,
        tokenLable
      )
    )
      .to.emit("NashEscrow", "TransactionInitEvent")
      .withArgs(0, owner);

    expect(
      await nashEscrow
        .connect(address2)
        .agentAcceptWithdrawalTransaction(3, "test phone number")
    )
      .to.emit("NashEscrow", "AgentPairingEvent")
      .withArgs(4, address2.getAddress());

    // Exact value.
    const tx = await nashEscrow.connect(address2).getNextUnpairedTransaction(2);

    expect(tx.id).equal(2);

    // Value above next tx index
    const tx2 = await nashEscrow
      .connect(address2)
      .getNextUnpairedTransaction(10);

    expect(tx2.id).equal(2);
  });
});

describe("Test Get transactions.", function () {
  it("Get unpaired transaction.", async function () {
    const { owner, address2, tokenLable, nashEscrow, cUSD } = await loadFixture(
      deployNashEscrowContract
    );

    await cUSD.approve(nashEscrow.address, 10);

    expect(await nashEscrow.getNextTransactionIndex()).to.equal(0);

    expect(
      await nashEscrow.initializeDepositTransaction(5, cUSD.address, tokenLable)
    )
      .to.emit("NashEscrow", "TransactionInitEvent")
      .withArgs(0, owner);

    expect(
      await nashEscrow.initializeDepositTransaction(5, cUSD.address, tokenLable)
    )
      .to.emit("NashEscrow", "TransactionInitEvent")
      .withArgs(0, owner);

    expect(
      await nashEscrow.initializeDepositTransaction(5, cUSD.address, tokenLable)
    )
      .to.emit("NashEscrow", "TransactionInitEvent")
      .withArgs(0, owner);

    expect(
      await nashEscrow.initializeWithdrawalTransaction(
        5,
        cUSD.address,
        tokenLable
      )
    )
      .to.emit("NashEscrow", "TransactionInitEvent")
      .withArgs(0, owner);

    expect(
      await nashEscrow
        .connect(address2)
        .agentAcceptWithdrawalTransaction(3, "test phone number")
    )
      .to.emit("NashEscrow", "AgentPairingEvent")
      .withArgs(4, address2.getAddress());

    // Exact value.
    const tx = await nashEscrow.connect(address2).getTransactions(5, 5, 0);
    for (let index = 0; index < tx.length; index++) {
      const nashTx = convertToNashTransactionObj(
        Array.from(tx[index], (x) => `${x}`)
      );
      expect(nashTx.status, "Status should be 0 " + nashTx.status).equal(0);
    }
    expect(tx.length).equal(3);
  });
});

describe("Test Get My transactions.", function () {
  it("Get My transaction.", async function () {
    const { owner, address2, tokenLable, nashEscrow, cUSD } = await loadFixture(
      deployNashEscrowContract
    );

    await cUSD.approve(nashEscrow.address, 10);

    expect(await nashEscrow.getNextTransactionIndex()).to.equal(0);

    expect(
      await nashEscrow.initializeDepositTransaction(5, cUSD.address, tokenLable)
    )
      .to.emit("NashEscrow", "TransactionInitEvent")
      .withArgs(0, owner);

    expect(
      await nashEscrow.initializeDepositTransaction(5, cUSD.address, tokenLable)
    )
      .to.emit("NashEscrow", "TransactionInitEvent")
      .withArgs(0, owner);

    expect(
      await nashEscrow.initializeDepositTransaction(5, cUSD.address, tokenLable)
    )
      .to.emit("NashEscrow", "TransactionInitEvent")
      .withArgs(0, owner);

    expect(
      await nashEscrow.initializeWithdrawalTransaction(
        5,
        cUSD.address,
        tokenLable
      )
    )
      .to.emit("NashEscrow", "TransactionInitEvent")
      .withArgs(0, owner);

    expect(
      await nashEscrow
        .connect(address2)
        .agentAcceptWithdrawalTransaction(3, "test phone number")
    )
      .to.emit("NashEscrow", "AgentPairingEvent")
      .withArgs(4, address2.getAddress());

    // Test get my transactions
    expect(
      await nashEscrow.initializeWithdrawalTransaction(
        5,
        cUSD.address,
        tokenLable
      )
    )
      .to.emit("NashEscrow", "TransactionInitEvent")
      .withArgs(0, owner);

    expect(
      await nashEscrow
        .connect(address2)
        .agentAcceptWithdrawalTransaction(4, "test phone number")
    )
      .to.emit("NashEscrow", "AgentPairingEvent")
      .withArgs(5, address2.getAddress());

    expect(await nashEscrow.connect(owner).clientConfirmPayment(4))
      .to.emit("NashEscrow", "ClientConfirmationEvent")
      .withArgs(5, owner);

    expect(await nashEscrow.connect(address2).agentConfirmPayment(4))
      .to.emit("NashEscrow", "AgentConfirmationEvent")
      .withArgs(5, address2.getAddress());

    const txs = await nashEscrow
      .connect(address2)
      .getMyTransactions(5, 5, [1, 3, 2], address2.getAddress());
    expect(txs.length).equal(1);

    const nashTx = convertToNashTransactionObj(
      Array.from(txs[0], (x) => `${x}`)
    );
    expect(nashTx.status, "Status should be 1").equal(1);
  });
});
