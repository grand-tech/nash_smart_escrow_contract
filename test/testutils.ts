import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Contract } from "ethers";
import { ethers } from "hardhat";

/**
 * @typedef {Object} NashEscrowTransaction Nash escrow transaction object.
 * @property { number } id - the transaction id.
 * @property { TransactionType } txType - the transaction type.
 * @property { string } clientAddress - clientAddress the clients address.
 * @property { Status } status - the status of the transaction.
 * @property { number } amount - the amount of money being sent in the transaction.
 * @property { string } agentAddress - the agents address.
 * @property { number } nashFee - the amount of money retained by nash DAO.
 * @property { number } grossAmount - the summation of all the money/crypto involved in the transaction.
 * @property { number } agentFee - the amount of money/crypto levied by the agent.
 * @property { boolean } agentApproval - true on agents approval.
 * @property { boolean } clientApproval - true on clients approval.
 * @property { string } clientPaymentDetails - the client`s phone number.
 * @property { string } agentPhoneNumber - the agent`s phone number.
 */
export type NashEscrowTransaction = {
  id: number;
  txType: number;
  clientAddress: string;
  status: number;
  netAmount: number;
  agentAddress?: string;
  nashFee: number;
  grossAmount: number;
  agentFee: number;
  agentApproval: string;
  clientApproval: string;
  clientPaymentDetails: string;
  agentPaymentDetails: string;
};

export class TestUtil {
  public cUSD!: Contract;
  public nashEscrow!: Contract;
  public user1Address!: SignerWithAddress;
  public user2Address!: SignerWithAddress;

  public nashTreasury!: SignerWithAddress;
  public nashFees = 1;
  public agentFees = 2;

  //   constructor() {}

  async intit() {
    const [owner, address2, nashTreasury] = await ethers.getSigners();
    const CUSD = await ethers.getContractFactory("cUSD");
    const cUSD = await CUSD.deploy(100, "cUSD", 0, "cUSD");
    await cUSD.deployed();

    this.cUSD = cUSD;

    const NashEscrow = await ethers.getContractFactory("NashEscrow");
    const nashEscrow = await NashEscrow.deploy(
      cUSD.address,
      this.agentFees,
      this.nashFees,
      nashTreasury.address
    );
    await nashEscrow.deployed();

    this.nashEscrow = nashEscrow;
    this.user1Address = owner;
    this.user2Address = address2;
    this.nashTreasury = nashTreasury;
  }

  /**
   * Convert response to nash transaction object.
   * @param tx the response object.
   * @returns the nash transaction object.
   */
  convertToNashTransactionObj(tx: string[]): NashEscrowTransaction {
    const nashTx: NashEscrowTransaction = {
      id: parseInt(tx[0]),
      txType: parseInt(tx[1]),
      clientAddress: tx[2],
      agentAddress: tx[3],
      status: parseInt(tx[4]),
      netAmount: parseInt(tx[5]),
      agentFee: parseInt(tx[6]),
      nashFee: parseInt(tx[7]),
      grossAmount: parseInt(tx[8]),
      agentApproval: tx[9],
      clientApproval: tx[10],
      agentPaymentDetails: Buffer.from(tx[11], "base64").toString("ascii"),
      clientPaymentDetails: Buffer.from(tx[12], "base64").toString("ascii"),
    };

    return nashTx;
  }
}
