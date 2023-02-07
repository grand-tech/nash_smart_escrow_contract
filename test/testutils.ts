import { ethers, upgrades } from "hardhat";

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
 * @property { string } enxchangeToken - the address of the token being exchanged in the transaction.
 */
export type NashEscrowTransaction = {
  id: number;
  txType: number;
  clientAddress: string;
  agentAddress?: string;
  status: number;
  amount: number;
  agentApproval: string;
  clientApproval: string;
  clientPaymentDetails: string;
  agentPaymentDetails: string;
  enxchangeToken: string;
  exchangeTokenLable: string;
};

export async function deployNashEscrowContract() {
  const [owner, address2] = await ethers.getSigners();

  const tokenLabel = "cUSD";
  const CUSD = await ethers.getContractFactory(tokenLabel);
  const cUSD = await CUSD.deploy(100, tokenLabel, 0, tokenLabel);
  await cUSD.deployed();

  const NashEscrow = await ethers.getContractFactory("NashEscrow");
  const nashEscrow = await upgrades.deployProxy(NashEscrow, [], {
    initializer: "initialize",
  });
  await nashEscrow.deployed();

  return { owner, address2, tokenLabel, nashEscrow, cUSD };
}

/**
 * Convert response to nash transaction object.
 * @param tx the response object.
 * @returns the nash transaction object.
 */
export function convertToNashTransactionObj(
  tx: string[]
): NashEscrowTransaction {
  const nashTx: NashEscrowTransaction = {
    id: parseInt(tx[0]),
    txType: parseInt(tx[1]),
    clientAddress: tx[2],
    agentAddress: tx[3],
    status: parseInt(tx[4]),
    amount: parseInt(tx[5]),
    agentApproval: tx[6],
    clientApproval: tx[7],
    agentPaymentDetails: Buffer.from(tx[8], "base64").toString("ascii"),
    clientPaymentDetails: Buffer.from(tx[9], "base64").toString("ascii"),
    enxchangeToken: tx[10],
    exchangeTokenLable: tx[11],
  };

  return nashTx;
}
