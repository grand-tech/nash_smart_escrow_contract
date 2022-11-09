import { newMockEvent } from "matchstick-as"
import { ethereum } from "@graphprotocol/graph-ts"
import {
  AgentConfirmationEvent,
  AgentPairingEvent,
  ClientConfirmationEvent,
  ConfirmationCompletedEvent,
  TransactionCompletionEvent,
  TransactionInitEvent
} from "../generated/NashEscrow/NashEscrow"

export function createAgentConfirmationEventEvent(
  wtx: ethereum.Tuple
): AgentConfirmationEvent {
  let agentConfirmationEventEvent = changetype<AgentConfirmationEvent>(
    newMockEvent()
  )

  agentConfirmationEventEvent.parameters = new Array()

  agentConfirmationEventEvent.parameters.push(
    new ethereum.EventParam("wtx", ethereum.Value.fromTuple(wtx))
  )

  return agentConfirmationEventEvent
}

export function createAgentPairingEventEvent(
  wtx: ethereum.Tuple
): AgentPairingEvent {
  let agentPairingEventEvent = changetype<AgentPairingEvent>(newMockEvent())

  agentPairingEventEvent.parameters = new Array()

  agentPairingEventEvent.parameters.push(
    new ethereum.EventParam("wtx", ethereum.Value.fromTuple(wtx))
  )

  return agentPairingEventEvent
}

export function createClientConfirmationEventEvent(
  wtx: ethereum.Tuple
): ClientConfirmationEvent {
  let clientConfirmationEventEvent = changetype<ClientConfirmationEvent>(
    newMockEvent()
  )

  clientConfirmationEventEvent.parameters = new Array()

  clientConfirmationEventEvent.parameters.push(
    new ethereum.EventParam("wtx", ethereum.Value.fromTuple(wtx))
  )

  return clientConfirmationEventEvent
}

export function createConfirmationCompletedEventEvent(
  wtx: ethereum.Tuple
): ConfirmationCompletedEvent {
  let confirmationCompletedEventEvent = changetype<ConfirmationCompletedEvent>(
    newMockEvent()
  )

  confirmationCompletedEventEvent.parameters = new Array()

  confirmationCompletedEventEvent.parameters.push(
    new ethereum.EventParam("wtx", ethereum.Value.fromTuple(wtx))
  )

  return confirmationCompletedEventEvent
}

export function createTransactionCompletionEventEvent(
  wtx: ethereum.Tuple
): TransactionCompletionEvent {
  let transactionCompletionEventEvent = changetype<TransactionCompletionEvent>(
    newMockEvent()
  )

  transactionCompletionEventEvent.parameters = new Array()

  transactionCompletionEventEvent.parameters.push(
    new ethereum.EventParam("wtx", ethereum.Value.fromTuple(wtx))
  )

  return transactionCompletionEventEvent
}

export function createTransactionInitEventEvent(
  wtx: ethereum.Tuple
): TransactionInitEvent {
  let transactionInitEventEvent = changetype<TransactionInitEvent>(
    newMockEvent()
  )

  transactionInitEventEvent.parameters = new Array()

  transactionInitEventEvent.parameters.push(
    new ethereum.EventParam("wtx", ethereum.Value.fromTuple(wtx))
  )

  return transactionInitEventEvent
}
