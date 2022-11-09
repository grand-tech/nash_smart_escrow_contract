// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AgentConfirmationEvent extends ethereum.Event {
  get params(): AgentConfirmationEvent__Params {
    return new AgentConfirmationEvent__Params(this);
  }
}

export class AgentConfirmationEvent__Params {
  _event: AgentConfirmationEvent;

  constructor(event: AgentConfirmationEvent) {
    this._event = event;
  }

  get wtx(): AgentConfirmationEventWtxStruct {
    return changetype<AgentConfirmationEventWtxStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }
}

export class AgentConfirmationEventWtxStruct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get txType(): i32 {
    return this[1].toI32();
  }

  get clientAddress(): Address {
    return this[2].toAddress();
  }

  get agentAddress(): Address {
    return this[3].toAddress();
  }

  get status(): i32 {
    return this[4].toI32();
  }

  get netAmount(): BigInt {
    return this[5].toBigInt();
  }

  get agentFee(): BigInt {
    return this[6].toBigInt();
  }

  get nashFee(): BigInt {
    return this[7].toBigInt();
  }

  get grossAmount(): BigInt {
    return this[8].toBigInt();
  }

  get agentApproval(): boolean {
    return this[9].toBoolean();
  }

  get clientApproval(): boolean {
    return this[10].toBoolean();
  }

  get agentPhoneNumber(): string {
    return this[11].toString();
  }

  get clientPhoneNumber(): string {
    return this[12].toString();
  }
}

export class AgentPairingEvent extends ethereum.Event {
  get params(): AgentPairingEvent__Params {
    return new AgentPairingEvent__Params(this);
  }
}

export class AgentPairingEvent__Params {
  _event: AgentPairingEvent;

  constructor(event: AgentPairingEvent) {
    this._event = event;
  }

  get wtx(): AgentPairingEventWtxStruct {
    return changetype<AgentPairingEventWtxStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }
}

export class AgentPairingEventWtxStruct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get txType(): i32 {
    return this[1].toI32();
  }

  get clientAddress(): Address {
    return this[2].toAddress();
  }

  get agentAddress(): Address {
    return this[3].toAddress();
  }

  get status(): i32 {
    return this[4].toI32();
  }

  get netAmount(): BigInt {
    return this[5].toBigInt();
  }

  get agentFee(): BigInt {
    return this[6].toBigInt();
  }

  get nashFee(): BigInt {
    return this[7].toBigInt();
  }

  get grossAmount(): BigInt {
    return this[8].toBigInt();
  }

  get agentApproval(): boolean {
    return this[9].toBoolean();
  }

  get clientApproval(): boolean {
    return this[10].toBoolean();
  }

  get agentPhoneNumber(): string {
    return this[11].toString();
  }

  get clientPhoneNumber(): string {
    return this[12].toString();
  }
}

export class ClientConfirmationEvent extends ethereum.Event {
  get params(): ClientConfirmationEvent__Params {
    return new ClientConfirmationEvent__Params(this);
  }
}

export class ClientConfirmationEvent__Params {
  _event: ClientConfirmationEvent;

  constructor(event: ClientConfirmationEvent) {
    this._event = event;
  }

  get wtx(): ClientConfirmationEventWtxStruct {
    return changetype<ClientConfirmationEventWtxStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }
}

export class ClientConfirmationEventWtxStruct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get txType(): i32 {
    return this[1].toI32();
  }

  get clientAddress(): Address {
    return this[2].toAddress();
  }

  get agentAddress(): Address {
    return this[3].toAddress();
  }

  get status(): i32 {
    return this[4].toI32();
  }

  get netAmount(): BigInt {
    return this[5].toBigInt();
  }

  get agentFee(): BigInt {
    return this[6].toBigInt();
  }

  get nashFee(): BigInt {
    return this[7].toBigInt();
  }

  get grossAmount(): BigInt {
    return this[8].toBigInt();
  }

  get agentApproval(): boolean {
    return this[9].toBoolean();
  }

  get clientApproval(): boolean {
    return this[10].toBoolean();
  }

  get agentPhoneNumber(): string {
    return this[11].toString();
  }

  get clientPhoneNumber(): string {
    return this[12].toString();
  }
}

export class ConfirmationCompletedEvent extends ethereum.Event {
  get params(): ConfirmationCompletedEvent__Params {
    return new ConfirmationCompletedEvent__Params(this);
  }
}

export class ConfirmationCompletedEvent__Params {
  _event: ConfirmationCompletedEvent;

  constructor(event: ConfirmationCompletedEvent) {
    this._event = event;
  }

  get wtx(): ConfirmationCompletedEventWtxStruct {
    return changetype<ConfirmationCompletedEventWtxStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }
}

export class ConfirmationCompletedEventWtxStruct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get txType(): i32 {
    return this[1].toI32();
  }

  get clientAddress(): Address {
    return this[2].toAddress();
  }

  get agentAddress(): Address {
    return this[3].toAddress();
  }

  get status(): i32 {
    return this[4].toI32();
  }

  get netAmount(): BigInt {
    return this[5].toBigInt();
  }

  get agentFee(): BigInt {
    return this[6].toBigInt();
  }

  get nashFee(): BigInt {
    return this[7].toBigInt();
  }

  get grossAmount(): BigInt {
    return this[8].toBigInt();
  }

  get agentApproval(): boolean {
    return this[9].toBoolean();
  }

  get clientApproval(): boolean {
    return this[10].toBoolean();
  }

  get agentPhoneNumber(): string {
    return this[11].toString();
  }

  get clientPhoneNumber(): string {
    return this[12].toString();
  }
}

export class TransactionCompletionEvent extends ethereum.Event {
  get params(): TransactionCompletionEvent__Params {
    return new TransactionCompletionEvent__Params(this);
  }
}

export class TransactionCompletionEvent__Params {
  _event: TransactionCompletionEvent;

  constructor(event: TransactionCompletionEvent) {
    this._event = event;
  }

  get wtx(): TransactionCompletionEventWtxStruct {
    return changetype<TransactionCompletionEventWtxStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }
}

export class TransactionCompletionEventWtxStruct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get txType(): i32 {
    return this[1].toI32();
  }

  get clientAddress(): Address {
    return this[2].toAddress();
  }

  get agentAddress(): Address {
    return this[3].toAddress();
  }

  get status(): i32 {
    return this[4].toI32();
  }

  get netAmount(): BigInt {
    return this[5].toBigInt();
  }

  get agentFee(): BigInt {
    return this[6].toBigInt();
  }

  get nashFee(): BigInt {
    return this[7].toBigInt();
  }

  get grossAmount(): BigInt {
    return this[8].toBigInt();
  }

  get agentApproval(): boolean {
    return this[9].toBoolean();
  }

  get clientApproval(): boolean {
    return this[10].toBoolean();
  }

  get agentPhoneNumber(): string {
    return this[11].toString();
  }

  get clientPhoneNumber(): string {
    return this[12].toString();
  }
}

export class TransactionInitEvent extends ethereum.Event {
  get params(): TransactionInitEvent__Params {
    return new TransactionInitEvent__Params(this);
  }
}

export class TransactionInitEvent__Params {
  _event: TransactionInitEvent;

  constructor(event: TransactionInitEvent) {
    this._event = event;
  }

  get wtx(): TransactionInitEventWtxStruct {
    return changetype<TransactionInitEventWtxStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }
}

export class TransactionInitEventWtxStruct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get txType(): i32 {
    return this[1].toI32();
  }

  get clientAddress(): Address {
    return this[2].toAddress();
  }

  get agentAddress(): Address {
    return this[3].toAddress();
  }

  get status(): i32 {
    return this[4].toI32();
  }

  get netAmount(): BigInt {
    return this[5].toBigInt();
  }

  get agentFee(): BigInt {
    return this[6].toBigInt();
  }

  get nashFee(): BigInt {
    return this[7].toBigInt();
  }

  get grossAmount(): BigInt {
    return this[8].toBigInt();
  }

  get agentApproval(): boolean {
    return this[9].toBoolean();
  }

  get clientApproval(): boolean {
    return this[10].toBoolean();
  }

  get agentPhoneNumber(): string {
    return this[11].toString();
  }

  get clientPhoneNumber(): string {
    return this[12].toString();
  }
}

export class NashEscrow__getNextUnpairedTransactionResultValue0Struct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get txType(): i32 {
    return this[1].toI32();
  }

  get clientAddress(): Address {
    return this[2].toAddress();
  }

  get agentAddress(): Address {
    return this[3].toAddress();
  }

  get status(): i32 {
    return this[4].toI32();
  }

  get netAmount(): BigInt {
    return this[5].toBigInt();
  }

  get agentFee(): BigInt {
    return this[6].toBigInt();
  }

  get nashFee(): BigInt {
    return this[7].toBigInt();
  }

  get grossAmount(): BigInt {
    return this[8].toBigInt();
  }

  get agentApproval(): boolean {
    return this[9].toBoolean();
  }

  get clientApproval(): boolean {
    return this[10].toBoolean();
  }

  get agentPhoneNumber(): string {
    return this[11].toString();
  }

  get clientPhoneNumber(): string {
    return this[12].toString();
  }
}

export class NashEscrow__getTransactionByIndexResultValue0Struct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get txType(): i32 {
    return this[1].toI32();
  }

  get clientAddress(): Address {
    return this[2].toAddress();
  }

  get agentAddress(): Address {
    return this[3].toAddress();
  }

  get status(): i32 {
    return this[4].toI32();
  }

  get netAmount(): BigInt {
    return this[5].toBigInt();
  }

  get agentFee(): BigInt {
    return this[6].toBigInt();
  }

  get nashFee(): BigInt {
    return this[7].toBigInt();
  }

  get grossAmount(): BigInt {
    return this[8].toBigInt();
  }

  get agentApproval(): boolean {
    return this[9].toBoolean();
  }

  get clientApproval(): boolean {
    return this[10].toBoolean();
  }

  get agentPhoneNumber(): string {
    return this[11].toString();
  }

  get clientPhoneNumber(): string {
    return this[12].toString();
  }
}

export class NashEscrow extends ethereum.SmartContract {
  static bind(address: Address): NashEscrow {
    return new NashEscrow("NashEscrow", address);
  }

  countSuccessfulTransactions(): BigInt {
    let result = super.call(
      "countSuccessfulTransactions",
      "countSuccessfulTransactions():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_countSuccessfulTransactions(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "countSuccessfulTransactions",
      "countSuccessfulTransactions():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getAgentFee(): BigInt {
    let result = super.call("getAgentFee", "getAgentFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getAgentFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getAgentFee", "getAgentFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getNashFee(): BigInt {
    let result = super.call("getNashFee", "getNashFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getNashFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getNashFee", "getNashFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getNextTransactionIndex(): BigInt {
    let result = super.call(
      "getNextTransactionIndex",
      "getNextTransactionIndex():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getNextTransactionIndex(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getNextTransactionIndex",
      "getNextTransactionIndex():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getNextUnpairedTransaction(
    _transactionID: BigInt
  ): NashEscrow__getNextUnpairedTransactionResultValue0Struct {
    let result = super.call(
      "getNextUnpairedTransaction",
      "getNextUnpairedTransaction(uint256):((uint256,uint8,address,address,uint8,uint256,uint256,uint256,uint256,bool,bool,string,string))",
      [ethereum.Value.fromUnsignedBigInt(_transactionID)]
    );

    return changetype<NashEscrow__getNextUnpairedTransactionResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getNextUnpairedTransaction(
    _transactionID: BigInt
  ): ethereum.CallResult<
    NashEscrow__getNextUnpairedTransactionResultValue0Struct
  > {
    let result = super.tryCall(
      "getNextUnpairedTransaction",
      "getNextUnpairedTransaction(uint256):((uint256,uint8,address,address,uint8,uint256,uint256,uint256,uint256,bool,bool,string,string))",
      [ethereum.Value.fromUnsignedBigInt(_transactionID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<NashEscrow__getNextUnpairedTransactionResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  getTransactionByIndex(
    _transactionID: BigInt
  ): NashEscrow__getTransactionByIndexResultValue0Struct {
    let result = super.call(
      "getTransactionByIndex",
      "getTransactionByIndex(uint256):((uint256,uint8,address,address,uint8,uint256,uint256,uint256,uint256,bool,bool,string,string))",
      [ethereum.Value.fromUnsignedBigInt(_transactionID)]
    );

    return changetype<NashEscrow__getTransactionByIndexResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getTransactionByIndex(
    _transactionID: BigInt
  ): ethereum.CallResult<NashEscrow__getTransactionByIndexResultValue0Struct> {
    let result = super.tryCall(
      "getTransactionByIndex",
      "getTransactionByIndex(uint256):((uint256,uint8,address,address,uint8,uint256,uint256,uint256,uint256,bool,bool,string,string))",
      [ethereum.Value.fromUnsignedBigInt(_transactionID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<NashEscrow__getTransactionByIndexResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _cUSDTokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _agentFee(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _nashFee(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _nashTreasuryAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AgentAcceptDepositTransactionCall extends ethereum.Call {
  get inputs(): AgentAcceptDepositTransactionCall__Inputs {
    return new AgentAcceptDepositTransactionCall__Inputs(this);
  }

  get outputs(): AgentAcceptDepositTransactionCall__Outputs {
    return new AgentAcceptDepositTransactionCall__Outputs(this);
  }
}

export class AgentAcceptDepositTransactionCall__Inputs {
  _call: AgentAcceptDepositTransactionCall;

  constructor(call: AgentAcceptDepositTransactionCall) {
    this._call = call;
  }

  get _transactionid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _phoneNumber(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class AgentAcceptDepositTransactionCall__Outputs {
  _call: AgentAcceptDepositTransactionCall;

  constructor(call: AgentAcceptDepositTransactionCall) {
    this._call = call;
  }
}

export class AgentAcceptWithdrawalTransactionCall extends ethereum.Call {
  get inputs(): AgentAcceptWithdrawalTransactionCall__Inputs {
    return new AgentAcceptWithdrawalTransactionCall__Inputs(this);
  }

  get outputs(): AgentAcceptWithdrawalTransactionCall__Outputs {
    return new AgentAcceptWithdrawalTransactionCall__Outputs(this);
  }
}

export class AgentAcceptWithdrawalTransactionCall__Inputs {
  _call: AgentAcceptWithdrawalTransactionCall;

  constructor(call: AgentAcceptWithdrawalTransactionCall) {
    this._call = call;
  }

  get _transactionid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _phoneNumber(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class AgentAcceptWithdrawalTransactionCall__Outputs {
  _call: AgentAcceptWithdrawalTransactionCall;

  constructor(call: AgentAcceptWithdrawalTransactionCall) {
    this._call = call;
  }
}

export class AgentConfirmPaymentCall extends ethereum.Call {
  get inputs(): AgentConfirmPaymentCall__Inputs {
    return new AgentConfirmPaymentCall__Inputs(this);
  }

  get outputs(): AgentConfirmPaymentCall__Outputs {
    return new AgentConfirmPaymentCall__Outputs(this);
  }
}

export class AgentConfirmPaymentCall__Inputs {
  _call: AgentConfirmPaymentCall;

  constructor(call: AgentConfirmPaymentCall) {
    this._call = call;
  }

  get _transactionid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class AgentConfirmPaymentCall__Outputs {
  _call: AgentConfirmPaymentCall;

  constructor(call: AgentConfirmPaymentCall) {
    this._call = call;
  }
}

export class ClientConfirmPaymentCall extends ethereum.Call {
  get inputs(): ClientConfirmPaymentCall__Inputs {
    return new ClientConfirmPaymentCall__Inputs(this);
  }

  get outputs(): ClientConfirmPaymentCall__Outputs {
    return new ClientConfirmPaymentCall__Outputs(this);
  }
}

export class ClientConfirmPaymentCall__Inputs {
  _call: ClientConfirmPaymentCall;

  constructor(call: ClientConfirmPaymentCall) {
    this._call = call;
  }

  get _transactionid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ClientConfirmPaymentCall__Outputs {
  _call: ClientConfirmPaymentCall;

  constructor(call: ClientConfirmPaymentCall) {
    this._call = call;
  }
}

export class FinalizeTransactionCall extends ethereum.Call {
  get inputs(): FinalizeTransactionCall__Inputs {
    return new FinalizeTransactionCall__Inputs(this);
  }

  get outputs(): FinalizeTransactionCall__Outputs {
    return new FinalizeTransactionCall__Outputs(this);
  }
}

export class FinalizeTransactionCall__Inputs {
  _call: FinalizeTransactionCall;

  constructor(call: FinalizeTransactionCall) {
    this._call = call;
  }

  get _transactionid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class FinalizeTransactionCall__Outputs {
  _call: FinalizeTransactionCall;

  constructor(call: FinalizeTransactionCall) {
    this._call = call;
  }
}

export class InitializeDepositTransactionCall extends ethereum.Call {
  get inputs(): InitializeDepositTransactionCall__Inputs {
    return new InitializeDepositTransactionCall__Inputs(this);
  }

  get outputs(): InitializeDepositTransactionCall__Outputs {
    return new InitializeDepositTransactionCall__Outputs(this);
  }
}

export class InitializeDepositTransactionCall__Inputs {
  _call: InitializeDepositTransactionCall;

  constructor(call: InitializeDepositTransactionCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _phoneNumber(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class InitializeDepositTransactionCall__Outputs {
  _call: InitializeDepositTransactionCall;

  constructor(call: InitializeDepositTransactionCall) {
    this._call = call;
  }
}

export class InitializeWithdrawalTransactionCall extends ethereum.Call {
  get inputs(): InitializeWithdrawalTransactionCall__Inputs {
    return new InitializeWithdrawalTransactionCall__Inputs(this);
  }

  get outputs(): InitializeWithdrawalTransactionCall__Outputs {
    return new InitializeWithdrawalTransactionCall__Outputs(this);
  }
}

export class InitializeWithdrawalTransactionCall__Inputs {
  _call: InitializeWithdrawalTransactionCall;

  constructor(call: InitializeWithdrawalTransactionCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _phoneNumber(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class InitializeWithdrawalTransactionCall__Outputs {
  _call: InitializeWithdrawalTransactionCall;

  constructor(call: InitializeWithdrawalTransactionCall) {
    this._call = call;
  }
}
