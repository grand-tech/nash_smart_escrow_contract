import {
  NashEscrow,
  AgentConfirmationEvent,
  AgentPairingEvent,
  ClientConfirmationEvent,
  ConfirmationCompletedEvent,
  TransactionCompletionEvent,
  TransactionInitEvent,
} from '../generated/NashEscrow/NashEscrow';
import { EscrowTransaction } from '../generated/schema';

export function handleAgentConfirmationEvent(
  event: AgentConfirmationEvent
): void {
  let transaction = EscrowTransaction.load(event.params.wtx.id.toString());

  if (!transaction) {
    transaction = new EscrowTransaction(event.params.wtx.id.toString());
  }
  transaction.id = event.params.wtx.id.toString();
  transaction.txType = event.params.wtx.txType;
  transaction.clientAddress = event.params.wtx.clientAddress;
  transaction.agentAddress = event.params.wtx.agentAddress;
  transaction.netAmount = event.params.wtx.netAmount;
  transaction.agentFee = event.params.wtx.agentFee;
  transaction.nashFee = event.params.wtx.nashFee;
  transaction.grossAmount = event.params.wtx.grossAmount;
  transaction.agentApproval = event.params.wtx.agentApproval;
  transaction.clientApproval = event.params.wtx.clientApproval;
  transaction.agentPhoneNumber = event.params.wtx.agentPhoneNumber;
  transaction.clientPhoneNumber = event.params.wtx.clientPhoneNumber;

  transaction.save();
}

export function handleAgentPairingEvent(event: AgentPairingEvent): void {}

export function handleClientConfirmationEvent(
  event: ClientConfirmationEvent
): void {
  let transaction = EscrowTransaction.load(event.params.wtx.id.toString());

  if (!transaction) {
    transaction = new EscrowTransaction(event.params.wtx.id.toString());
  }
  transaction.id = event.params.wtx.id.toString();
  transaction.txType = event.params.wtx.txType;
  transaction.clientAddress = event.params.wtx.clientAddress;
  transaction.agentAddress = event.params.wtx.agentAddress;
  transaction.netAmount = event.params.wtx.netAmount;
  transaction.agentFee = event.params.wtx.agentFee;
  transaction.nashFee = event.params.wtx.nashFee;
  transaction.grossAmount = event.params.wtx.grossAmount;
  transaction.agentApproval = event.params.wtx.agentApproval;
  transaction.clientApproval = event.params.wtx.clientApproval;
  transaction.agentPhoneNumber = event.params.wtx.agentPhoneNumber;
  transaction.clientPhoneNumber = event.params.wtx.clientPhoneNumber;

  transaction.save();
}

export function handleConfirmationCompletedEvent(
  event: ConfirmationCompletedEvent
): void {
  let transaction = EscrowTransaction.load(event.params.wtx.id.toString());

  if (!transaction) {
    transaction = new EscrowTransaction(event.params.wtx.id.toString());
  }
  transaction.id = event.params.wtx.id.toString();
  transaction.txType = event.params.wtx.txType;
  transaction.clientAddress = event.params.wtx.clientAddress;
  transaction.agentAddress = event.params.wtx.agentAddress;
  transaction.netAmount = event.params.wtx.netAmount;
  transaction.agentFee = event.params.wtx.agentFee;
  transaction.nashFee = event.params.wtx.nashFee;
  transaction.grossAmount = event.params.wtx.grossAmount;
  transaction.agentApproval = event.params.wtx.agentApproval;
  transaction.clientApproval = event.params.wtx.clientApproval;
  transaction.agentPhoneNumber = event.params.wtx.agentPhoneNumber;
  transaction.clientPhoneNumber = event.params.wtx.clientPhoneNumber;

  transaction.save();
}

export function handleTransactionCompletionEvent(
  event: TransactionCompletionEvent
): void {
  let transaction = EscrowTransaction.load(event.params.wtx.id.toString());

  if (!transaction) {
    transaction = new EscrowTransaction(event.params.wtx.id.toString());
  }
  transaction.id = event.params.wtx.id.toString();
  transaction.txType = event.params.wtx.txType;
  transaction.clientAddress = event.params.wtx.clientAddress;
  transaction.agentAddress = event.params.wtx.agentAddress;
  transaction.netAmount = event.params.wtx.netAmount;
  transaction.agentFee = event.params.wtx.agentFee;
  transaction.nashFee = event.params.wtx.nashFee;
  transaction.grossAmount = event.params.wtx.grossAmount;
  transaction.agentApproval = event.params.wtx.agentApproval;
  transaction.clientApproval = event.params.wtx.clientApproval;
  transaction.agentPhoneNumber = event.params.wtx.agentPhoneNumber;
  transaction.clientPhoneNumber = event.params.wtx.clientPhoneNumber;

  transaction.save();
}

export function handleTransactionInitEvent(event: TransactionInitEvent): void {
  let transaction = EscrowTransaction.load(event.params.wtx.id.toString());

  if (!transaction) {
    transaction = new EscrowTransaction(event.params.wtx.id.toString());
  }
  transaction.id = event.params.wtx.id.toString();
  transaction.txType = event.params.wtx.txType;
  transaction.clientAddress = event.params.wtx.clientAddress;
  transaction.agentAddress = event.params.wtx.agentAddress;
  transaction.netAmount = event.params.wtx.netAmount;
  transaction.agentFee = event.params.wtx.agentFee;
  transaction.nashFee = event.params.wtx.nashFee;
  transaction.grossAmount = event.params.wtx.grossAmount;
  transaction.agentApproval = event.params.wtx.agentApproval;
  transaction.clientApproval = event.params.wtx.clientApproval;
  transaction.agentPhoneNumber = event.params.wtx.agentPhoneNumber;
  transaction.clientPhoneNumber = event.params.wtx.clientPhoneNumber;

  transaction.save();
}

// type EscrowEvents =
//   AgentConfirmationEvent
//   & AgentPairingEvent
//   ClientConfirmationEvent
//   | ConfirmationCompletedEvent
//   | TransactionCompletionEvent
//   | TransactionInitEvent;

// function setTransactionDetails(
//   transaction: EscrowTransaction,
//   event: EscrowEvents
// ): void {
//   transaction.id = event.params.wtx.id.toString();
//   transaction.txType = event.params.wtx.txType;
//   transaction.clientAddress = event.params.wtx.clientAddress;
//   transaction.agentAddress = event.params.wtx.agentAddress;
//   transaction.netAmount = event.params.wtx.netAmount;
//   transaction.agentFee = event.params.wtx.agentFee;
//   transaction.nashFee = event.params.wtx.nashFee;
//   transaction.grossAmount = event.params.wtx.grossAmount;
//   transaction.agentApproval = event.params.wtx.agentApproval;
//   transaction.clientApproval = event.params.wtx.clientApproval;
//   transaction.agentPhoneNumber = event.params.wtx.agentPhoneNumber;
//   transaction.clientPhoneNumber = event.params.wtx.clientPhoneNumber;
// }
