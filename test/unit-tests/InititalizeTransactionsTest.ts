import { expect } from "chai";
import { TestUtil } from "../testutils";

describe("Test Initialize transactions.", function () {
  it("Test initialize withdrawal transactions.", async function () {
    const testUtil = new TestUtil();
    await testUtil.intit();

    await testUtil.cUSD.approve(testUtil.nashEscrow.address, 10);

    expect(await testUtil.nashEscrow.getNextTransactionIndex()).to.equal(0);

    expect(
      await testUtil.nashEscrow.initializeWithdrawalTransaction(
        5,
        "test phone number"
      )
    )
      .to.emit("NashEscrow", "TransactionInitEvent")
      .withArgs(0, testUtil.user1Address.getAddress());

    const nashTx = testUtil.convertToNashTransactionObj(
      Array.from(
        await testUtil.nashEscrow.getTransactionByIndex(0),
        (x) => `${x}`
      )
    );

    expect(nashTx.id).to.equal(0);
    expect(nashTx.agentFee).to.equal(testUtil.agentFees);
    expect(nashTx.nashFee).to.equal(testUtil.nashFees);
    expect(nashTx.netAmount).to.equal(
      5 - (testUtil.agentFees + testUtil.nashFees)
    );
    expect(nashTx.grossAmount).to.equal(5);
  });

  it("Test initialize deposit transactions.", async function () {
    const testUtil = new TestUtil();
    await testUtil.intit();

    await testUtil.cUSD.approve(testUtil.nashEscrow.address, 10);

    expect(await testUtil.nashEscrow.getNextTransactionIndex()).to.equal(0);

    expect(
      await testUtil.nashEscrow.initializeDepositTransaction(
        5,
        "test phone number"
      )
    )
      .to.emit("NashEscrow", "TransactionInitEvent")
      .withArgs(0, testUtil.user1Address.getAddress());

    const nashTx = testUtil.convertToNashTransactionObj(
      Array.from(
        await testUtil.nashEscrow.getTransactionByIndex(0),
        (x) => `${x}`
      )
    );

    expect(nashTx.id).to.equal(0);
    expect(nashTx.agentFee).to.equal(testUtil.agentFees);
    expect(nashTx.nashFee).to.equal(testUtil.nashFees);
    expect(nashTx.netAmount).to.equal(
      5 - (testUtil.agentFees + testUtil.nashFees)
    );
    expect(nashTx.grossAmount).to.equal(5);
  });
});
