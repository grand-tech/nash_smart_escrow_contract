import { expect } from "chai";
import { TestUtil } from "../testutils";
import { NashEscrow } from "../../typechain-types";

describe("Test Get Next un-paired transaction.", function () {
  it("Get unpaired transaction.", async function () {
    const testUtil = new TestUtil();
    await testUtil.intit();

    await testUtil.cUSD.approve(testUtil.nashEscrow.address, 10);

    expect(await testUtil.nashEscrow.getNextTransactionIndex()).to.equal(0);

    expect(
      await testUtil.nashEscrow.initializeDepositTransaction(
        5,
        testUtil.cUSD.address
      )
    )
      .to.emit("NashEscrow", "TransactionInitEvent")
      .withArgs(0, testUtil.user1Address.getAddress());

    expect(await testUtil.nashEscrow.initializeDepositTransaction(
        5,
        testUtil.cUSD.address
      ))
      .to.emit("NashEscrow", "TransactionInitEvent")
      .withArgs(0, testUtil.user1Address.getAddress());

    expect(await testUtil.nashEscrow.initializeDepositTransaction(
        5,
        testUtil.cUSD.address
      ))
      .to.emit("NashEscrow", "TransactionInitEvent")
      .withArgs(0, testUtil.user1Address.getAddress());

    expect(await testUtil.nashEscrow.initializeWithdrawalTransaction(
        5,
        testUtil.cUSD.address
      ))
      .to.emit("NashEscrow", "TransactionInitEvent")
      .withArgs(0, testUtil.user1Address.getAddress());

    expect(
      await testUtil.nashEscrow
        .connect(testUtil.user2Address)
        .agentAcceptWithdrawalTransaction(3, "test phone number")
    )
      .to.emit("NashEscrow", "AgentPairingEvent")
      .withArgs(4, testUtil.user2Address.getAddress());

    // Exact value.
    const tx = await testUtil.nashEscrow
      .connect(testUtil.user2Address)
      .getNextUnpairedTransaction(2);

    expect(tx.id).equal(2);

    // Value above next tx index
    const tx2 = await testUtil.nashEscrow
      .connect(testUtil.user2Address)
      .getNextUnpairedTransaction(10);

    expect(tx2.id).equal(2);
  });
});

describe("Test Get transactions.", function () {
  it("Get unpaired transaction.", async function () {
    const testUtil = new TestUtil();
    await testUtil.intit();

    await testUtil.cUSD.approve(testUtil.nashEscrow.address, 10);

    expect(await testUtil.nashEscrow.getNextTransactionIndex()).to.equal(0);

    expect(await testUtil.nashEscrow.initializeDepositTransaction(
        5,
        testUtil.cUSD.address
      ))
      .to.emit("NashEscrow", "TransactionInitEvent")
      .withArgs(0, testUtil.user1Address.getAddress());

    expect(await testUtil.nashEscrow.initializeDepositTransaction(
        5,
        testUtil.cUSD.address
      ))
      .to.emit("NashEscrow", "TransactionInitEvent")
      .withArgs(0, testUtil.user1Address.getAddress());

    expect(await testUtil.nashEscrow.initializeDepositTransaction(
        5,
        testUtil.cUSD.address
      ))
      .to.emit("NashEscrow", "TransactionInitEvent")
      .withArgs(0, testUtil.user1Address.getAddress());

    expect(await testUtil.nashEscrow.initializeWithdrawalTransaction(
        5,
        testUtil.cUSD.address
      ))
      .to.emit("NashEscrow", "TransactionInitEvent")
      .withArgs(0, testUtil.user1Address.getAddress());

    expect(
      await testUtil.nashEscrow
        .connect(testUtil.user2Address)
        .agentAcceptWithdrawalTransaction(3, "test phone number")
    )
      .to.emit("NashEscrow", "AgentPairingEvent")
      .withArgs(4, testUtil.user2Address.getAddress());

    // Exact value.
    const tx = await testUtil.nashEscrow
      .connect(testUtil.user2Address)
      .getTransactions(5, 5, 0);
    for (let index = 0; index < tx.length; index++) {
      const nashTx = testUtil.convertToNashTransactionObj(
        Array.from(tx[index], (x) => `${x}`)
      );
      expect(nashTx.status, "Status should be 0 " + nashTx.status).equal(0);
    }
    expect(tx.length).equal(3);
  });
});

describe("Test Get My transactions.", function () {
  it("Get My transaction.", async function () {
    const testUtil = new TestUtil();
    await testUtil.intit();

    await testUtil.cUSD.approve(testUtil.nashEscrow.address, 10);

    expect(await testUtil.nashEscrow.getNextTransactionIndex()).to.equal(0);

    expect(await testUtil.nashEscrow.initializeDepositTransaction(
        5,
        testUtil.cUSD.address
      ))
      .to.emit("NashEscrow", "TransactionInitEvent")
      .withArgs(0, testUtil.user1Address.getAddress());

    expect(await testUtil.nashEscrow.initializeDepositTransaction(
        5,
        testUtil.cUSD.address
      ))
      .to.emit("NashEscrow", "TransactionInitEvent")
      .withArgs(0, testUtil.user1Address.getAddress());

    expect(await testUtil.nashEscrow.initializeDepositTransaction(
        5,
        testUtil.cUSD.address
      ))
      .to.emit("NashEscrow", "TransactionInitEvent")
      .withArgs(0, testUtil.user1Address.getAddress());

    expect(await testUtil.nashEscrow.initializeWithdrawalTransaction(
        5,
        testUtil.cUSD.address
      ))
      .to.emit("NashEscrow", "TransactionInitEvent")
      .withArgs(0, testUtil.user1Address.getAddress());

    expect(
      await testUtil.nashEscrow
        .connect(testUtil.user2Address)
        .agentAcceptWithdrawalTransaction(3, "test phone number")
    )
      .to.emit("NashEscrow", "AgentPairingEvent")
      .withArgs(4, testUtil.user2Address.getAddress());

    // Test get my transactions
    expect(await testUtil.nashEscrow.initializeWithdrawalTransaction(
        5,
        testUtil.cUSD.address
      ))
      .to.emit("NashEscrow", "TransactionInitEvent")
      .withArgs(0, testUtil.user1Address.getAddress());

    expect(
      await testUtil.nashEscrow
        .connect(testUtil.user2Address)
        .agentAcceptWithdrawalTransaction(4, "test phone number")
    )
      .to.emit("NashEscrow", "AgentPairingEvent")
      .withArgs(5, testUtil.user2Address.getAddress());

    expect(
      await testUtil.nashEscrow
        .connect(testUtil.user1Address)
        .clientConfirmPayment(4)
    )
      .to.emit("NashEscrow", "ClientConfirmationEvent")
      .withArgs(5, testUtil.user1Address.getAddress());

    expect(
      await testUtil.nashEscrow
        .connect(testUtil.user2Address)
        .agentConfirmPayment(4)
    )
      .to.emit("NashEscrow", "AgentConfirmationEvent")
      .withArgs(5, testUtil.user2Address.getAddress());

    const txs = await testUtil.nashEscrow
      .connect(testUtil.user2Address)
      .getMyTransactions(5, 5, [1, 3, 2], testUtil.user2Address.getAddress());
    expect(txs.length).equal(1);

    const nashTx = testUtil.convertToNashTransactionObj(
      Array.from(txs[0], (x) => `${x}`)
    );
    expect(nashTx.status, "Status should be 1").equal(1);
  });
});
