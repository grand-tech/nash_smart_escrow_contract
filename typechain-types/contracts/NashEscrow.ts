/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace NashEscrow {
  export type NashTransactionStruct = {
    id: PromiseOrValue<BigNumberish>;
    txType: PromiseOrValue<BigNumberish>;
    clientAddress: PromiseOrValue<string>;
    agentAddress: PromiseOrValue<string>;
    status: PromiseOrValue<BigNumberish>;
    netAmount: PromiseOrValue<BigNumberish>;
    agentFee: PromiseOrValue<BigNumberish>;
    nashFee: PromiseOrValue<BigNumberish>;
    grossAmount: PromiseOrValue<BigNumberish>;
    agentApproval: PromiseOrValue<boolean>;
    clientApproval: PromiseOrValue<boolean>;
    agentPaymentDetails: PromiseOrValue<string>;
    clientPaymentDetails: PromiseOrValue<string>;
    exchangeToken: PromiseOrValue<string>;
  };

  export type NashTransactionStructOutput = [
    BigNumber,
    number,
    string,
    string,
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    boolean,
    string,
    string,
    string
  ] & {
    id: BigNumber;
    txType: number;
    clientAddress: string;
    agentAddress: string;
    status: number;
    netAmount: BigNumber;
    agentFee: BigNumber;
    nashFee: BigNumber;
    grossAmount: BigNumber;
    agentApproval: boolean;
    clientApproval: boolean;
    agentPaymentDetails: string;
    clientPaymentDetails: string;
    exchangeToken: string;
  };
}

export interface NashEscrowInterface extends utils.Interface {
  functions: {
    "agentAcceptDepositTransaction(uint256,string)": FunctionFragment;
    "agentAcceptWithdrawalTransaction(uint256,string)": FunctionFragment;
    "agentConfirmPayment(uint256)": FunctionFragment;
    "clientConfirmPayment(uint256)": FunctionFragment;
    "clientWritePaymentInformation(uint256,string)": FunctionFragment;
    "countSuccessfulTransactions()": FunctionFragment;
    "finalizeTransaction(uint256)": FunctionFragment;
    "getAgentFee()": FunctionFragment;
    "getMyTransactions(uint256,uint256,uint8[],address)": FunctionFragment;
    "getNashFee()": FunctionFragment;
    "getNextTransactionIndex()": FunctionFragment;
    "getNextUnpairedTransaction(uint256)": FunctionFragment;
    "getTransactionByIndex(uint256)": FunctionFragment;
    "getTransactions(uint256,uint256,uint8)": FunctionFragment;
    "initialize(address,uint256,uint256)": FunctionFragment;
    "initializeDepositTransaction(uint256,address)": FunctionFragment;
    "initializeWithdrawalTransaction(uint256,address)": FunctionFragment;
    "isTxInStatus((uint256,uint8,address,address,uint8,uint256,uint256,uint256,uint256,bool,bool,string,string,address),uint8[])": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setNashTreasury(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateAgentFees(uint256)": FunctionFragment;
    "updateNashFees(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "agentAcceptDepositTransaction"
      | "agentAcceptWithdrawalTransaction"
      | "agentConfirmPayment"
      | "clientConfirmPayment"
      | "clientWritePaymentInformation"
      | "countSuccessfulTransactions"
      | "finalizeTransaction"
      | "getAgentFee"
      | "getMyTransactions"
      | "getNashFee"
      | "getNextTransactionIndex"
      | "getNextUnpairedTransaction"
      | "getTransactionByIndex"
      | "getTransactions"
      | "initialize"
      | "initializeDepositTransaction"
      | "initializeWithdrawalTransaction"
      | "isTxInStatus"
      | "owner"
      | "renounceOwnership"
      | "setNashTreasury"
      | "transferOwnership"
      | "updateAgentFees"
      | "updateNashFees"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "agentAcceptDepositTransaction",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "agentAcceptWithdrawalTransaction",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "agentConfirmPayment",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "clientConfirmPayment",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "clientWritePaymentInformation",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "countSuccessfulTransactions",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "finalizeTransaction",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAgentFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMyTransactions",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getNashFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNextTransactionIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNextUnpairedTransaction",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTransactionByIndex",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTransactions",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeDepositTransaction",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeWithdrawalTransaction",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isTxInStatus",
    values: [NashEscrow.NashTransactionStruct, PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setNashTreasury",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAgentFees",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateNashFees",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "agentAcceptDepositTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "agentAcceptWithdrawalTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "agentConfirmPayment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "clientConfirmPayment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "clientWritePaymentInformation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "countSuccessfulTransactions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalizeTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAgentFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMyTransactions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getNashFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getNextTransactionIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNextUnpairedTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTransactionByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTransactions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializeDepositTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializeWithdrawalTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTxInStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setNashTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAgentFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateNashFees",
    data: BytesLike
  ): Result;

  events: {
    "AgentConfirmationEvent(tuple)": EventFragment;
    "AgentPairingEvent(tuple)": EventFragment;
    "ClientConfirmationEvent(tuple)": EventFragment;
    "ConfirmationCompletedEvent(tuple)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "SavedClientCommentEvent(tuple)": EventFragment;
    "TransactionCompletionEvent(tuple)": EventFragment;
    "TransactionInitEvent(tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AgentConfirmationEvent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AgentPairingEvent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ClientConfirmationEvent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ConfirmationCompletedEvent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SavedClientCommentEvent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransactionCompletionEvent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransactionInitEvent"): EventFragment;
}

export interface AgentConfirmationEventEventObject {
  wtx: NashEscrow.NashTransactionStructOutput;
}
export type AgentConfirmationEventEvent = TypedEvent<
  [NashEscrow.NashTransactionStructOutput],
  AgentConfirmationEventEventObject
>;

export type AgentConfirmationEventEventFilter =
  TypedEventFilter<AgentConfirmationEventEvent>;

export interface AgentPairingEventEventObject {
  wtx: NashEscrow.NashTransactionStructOutput;
}
export type AgentPairingEventEvent = TypedEvent<
  [NashEscrow.NashTransactionStructOutput],
  AgentPairingEventEventObject
>;

export type AgentPairingEventEventFilter =
  TypedEventFilter<AgentPairingEventEvent>;

export interface ClientConfirmationEventEventObject {
  wtx: NashEscrow.NashTransactionStructOutput;
}
export type ClientConfirmationEventEvent = TypedEvent<
  [NashEscrow.NashTransactionStructOutput],
  ClientConfirmationEventEventObject
>;

export type ClientConfirmationEventEventFilter =
  TypedEventFilter<ClientConfirmationEventEvent>;

export interface ConfirmationCompletedEventEventObject {
  wtx: NashEscrow.NashTransactionStructOutput;
}
export type ConfirmationCompletedEventEvent = TypedEvent<
  [NashEscrow.NashTransactionStructOutput],
  ConfirmationCompletedEventEventObject
>;

export type ConfirmationCompletedEventEventFilter =
  TypedEventFilter<ConfirmationCompletedEventEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface SavedClientCommentEventEventObject {
  wtx: NashEscrow.NashTransactionStructOutput;
}
export type SavedClientCommentEventEvent = TypedEvent<
  [NashEscrow.NashTransactionStructOutput],
  SavedClientCommentEventEventObject
>;

export type SavedClientCommentEventEventFilter =
  TypedEventFilter<SavedClientCommentEventEvent>;

export interface TransactionCompletionEventEventObject {
  wtx: NashEscrow.NashTransactionStructOutput;
}
export type TransactionCompletionEventEvent = TypedEvent<
  [NashEscrow.NashTransactionStructOutput],
  TransactionCompletionEventEventObject
>;

export type TransactionCompletionEventEventFilter =
  TypedEventFilter<TransactionCompletionEventEvent>;

export interface TransactionInitEventEventObject {
  wtx: NashEscrow.NashTransactionStructOutput;
}
export type TransactionInitEventEvent = TypedEvent<
  [NashEscrow.NashTransactionStructOutput],
  TransactionInitEventEventObject
>;

export type TransactionInitEventEventFilter =
  TypedEventFilter<TransactionInitEventEvent>;

export interface NashEscrow extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NashEscrowInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    agentAcceptDepositTransaction(
      _transactionid: PromiseOrValue<BigNumberish>,
      _paymentDetails: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    agentAcceptWithdrawalTransaction(
      _transactionid: PromiseOrValue<BigNumberish>,
      _paymentDetails: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    agentConfirmPayment(
      _transactionid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    clientConfirmPayment(
      _transactionid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    clientWritePaymentInformation(
      _transactionid: PromiseOrValue<BigNumberish>,
      _comment: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    countSuccessfulTransactions(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    finalizeTransaction(
      _transactionid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAgentFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getMyTransactions(
      _paginationCount: PromiseOrValue<BigNumberish>,
      _startingPoint: PromiseOrValue<BigNumberish>,
      _status: PromiseOrValue<BigNumberish>[],
      myAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[NashEscrow.NashTransactionStructOutput[]]>;

    getNashFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getNextTransactionIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    getNextUnpairedTransaction(
      _transactionID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[NashEscrow.NashTransactionStructOutput]>;

    getTransactionByIndex(
      _transactionID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[NashEscrow.NashTransactionStructOutput]>;

    getTransactions(
      _paginationCount: PromiseOrValue<BigNumberish>,
      _startingPoint: PromiseOrValue<BigNumberish>,
      _status: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[NashEscrow.NashTransactionStructOutput[]]>;

    initialize(
      _nashTreasuryAddress: PromiseOrValue<string>,
      _nashFees: PromiseOrValue<BigNumberish>,
      _agentFees: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initializeDepositTransaction(
      _amount: PromiseOrValue<BigNumberish>,
      _exchangeToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initializeWithdrawalTransaction(
      _amount: PromiseOrValue<BigNumberish>,
      _exchangeToken: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isTxInStatus(
      wtx: NashEscrow.NashTransactionStruct,
      _status: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setNashTreasury(
      _newTreasuryAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateAgentFees(
      _agentFees: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateNashFees(
      _nashFees: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  agentAcceptDepositTransaction(
    _transactionid: PromiseOrValue<BigNumberish>,
    _paymentDetails: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  agentAcceptWithdrawalTransaction(
    _transactionid: PromiseOrValue<BigNumberish>,
    _paymentDetails: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  agentConfirmPayment(
    _transactionid: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  clientConfirmPayment(
    _transactionid: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  clientWritePaymentInformation(
    _transactionid: PromiseOrValue<BigNumberish>,
    _comment: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  countSuccessfulTransactions(overrides?: CallOverrides): Promise<BigNumber>;

  finalizeTransaction(
    _transactionid: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAgentFee(overrides?: CallOverrides): Promise<BigNumber>;

  getMyTransactions(
    _paginationCount: PromiseOrValue<BigNumberish>,
    _startingPoint: PromiseOrValue<BigNumberish>,
    _status: PromiseOrValue<BigNumberish>[],
    myAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<NashEscrow.NashTransactionStructOutput[]>;

  getNashFee(overrides?: CallOverrides): Promise<BigNumber>;

  getNextTransactionIndex(overrides?: CallOverrides): Promise<BigNumber>;

  getNextUnpairedTransaction(
    _transactionID: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<NashEscrow.NashTransactionStructOutput>;

  getTransactionByIndex(
    _transactionID: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<NashEscrow.NashTransactionStructOutput>;

  getTransactions(
    _paginationCount: PromiseOrValue<BigNumberish>,
    _startingPoint: PromiseOrValue<BigNumberish>,
    _status: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<NashEscrow.NashTransactionStructOutput[]>;

  initialize(
    _nashTreasuryAddress: PromiseOrValue<string>,
    _nashFees: PromiseOrValue<BigNumberish>,
    _agentFees: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initializeDepositTransaction(
    _amount: PromiseOrValue<BigNumberish>,
    _exchangeToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initializeWithdrawalTransaction(
    _amount: PromiseOrValue<BigNumberish>,
    _exchangeToken: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isTxInStatus(
    wtx: NashEscrow.NashTransactionStruct,
    _status: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setNashTreasury(
    _newTreasuryAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateAgentFees(
    _agentFees: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateNashFees(
    _nashFees: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    agentAcceptDepositTransaction(
      _transactionid: PromiseOrValue<BigNumberish>,
      _paymentDetails: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    agentAcceptWithdrawalTransaction(
      _transactionid: PromiseOrValue<BigNumberish>,
      _paymentDetails: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    agentConfirmPayment(
      _transactionid: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    clientConfirmPayment(
      _transactionid: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    clientWritePaymentInformation(
      _transactionid: PromiseOrValue<BigNumberish>,
      _comment: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    countSuccessfulTransactions(overrides?: CallOverrides): Promise<BigNumber>;

    finalizeTransaction(
      _transactionid: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getAgentFee(overrides?: CallOverrides): Promise<BigNumber>;

    getMyTransactions(
      _paginationCount: PromiseOrValue<BigNumberish>,
      _startingPoint: PromiseOrValue<BigNumberish>,
      _status: PromiseOrValue<BigNumberish>[],
      myAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<NashEscrow.NashTransactionStructOutput[]>;

    getNashFee(overrides?: CallOverrides): Promise<BigNumber>;

    getNextTransactionIndex(overrides?: CallOverrides): Promise<BigNumber>;

    getNextUnpairedTransaction(
      _transactionID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<NashEscrow.NashTransactionStructOutput>;

    getTransactionByIndex(
      _transactionID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<NashEscrow.NashTransactionStructOutput>;

    getTransactions(
      _paginationCount: PromiseOrValue<BigNumberish>,
      _startingPoint: PromiseOrValue<BigNumberish>,
      _status: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<NashEscrow.NashTransactionStructOutput[]>;

    initialize(
      _nashTreasuryAddress: PromiseOrValue<string>,
      _nashFees: PromiseOrValue<BigNumberish>,
      _agentFees: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    initializeDepositTransaction(
      _amount: PromiseOrValue<BigNumberish>,
      _exchangeToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    initializeWithdrawalTransaction(
      _amount: PromiseOrValue<BigNumberish>,
      _exchangeToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    isTxInStatus(
      wtx: NashEscrow.NashTransactionStruct,
      _status: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setNashTreasury(
      _newTreasuryAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateAgentFees(
      _agentFees: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateNashFees(
      _nashFees: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AgentConfirmationEvent(tuple)"(
      wtx?: null
    ): AgentConfirmationEventEventFilter;
    AgentConfirmationEvent(wtx?: null): AgentConfirmationEventEventFilter;

    "AgentPairingEvent(tuple)"(wtx?: null): AgentPairingEventEventFilter;
    AgentPairingEvent(wtx?: null): AgentPairingEventEventFilter;

    "ClientConfirmationEvent(tuple)"(
      wtx?: null
    ): ClientConfirmationEventEventFilter;
    ClientConfirmationEvent(wtx?: null): ClientConfirmationEventEventFilter;

    "ConfirmationCompletedEvent(tuple)"(
      wtx?: null
    ): ConfirmationCompletedEventEventFilter;
    ConfirmationCompletedEvent(
      wtx?: null
    ): ConfirmationCompletedEventEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "SavedClientCommentEvent(tuple)"(
      wtx?: null
    ): SavedClientCommentEventEventFilter;
    SavedClientCommentEvent(wtx?: null): SavedClientCommentEventEventFilter;

    "TransactionCompletionEvent(tuple)"(
      wtx?: null
    ): TransactionCompletionEventEventFilter;
    TransactionCompletionEvent(
      wtx?: null
    ): TransactionCompletionEventEventFilter;

    "TransactionInitEvent(tuple)"(wtx?: null): TransactionInitEventEventFilter;
    TransactionInitEvent(wtx?: null): TransactionInitEventEventFilter;
  };

  estimateGas: {
    agentAcceptDepositTransaction(
      _transactionid: PromiseOrValue<BigNumberish>,
      _paymentDetails: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    agentAcceptWithdrawalTransaction(
      _transactionid: PromiseOrValue<BigNumberish>,
      _paymentDetails: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    agentConfirmPayment(
      _transactionid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    clientConfirmPayment(
      _transactionid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    clientWritePaymentInformation(
      _transactionid: PromiseOrValue<BigNumberish>,
      _comment: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    countSuccessfulTransactions(overrides?: CallOverrides): Promise<BigNumber>;

    finalizeTransaction(
      _transactionid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAgentFee(overrides?: CallOverrides): Promise<BigNumber>;

    getMyTransactions(
      _paginationCount: PromiseOrValue<BigNumberish>,
      _startingPoint: PromiseOrValue<BigNumberish>,
      _status: PromiseOrValue<BigNumberish>[],
      myAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNashFee(overrides?: CallOverrides): Promise<BigNumber>;

    getNextTransactionIndex(overrides?: CallOverrides): Promise<BigNumber>;

    getNextUnpairedTransaction(
      _transactionID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTransactionByIndex(
      _transactionID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTransactions(
      _paginationCount: PromiseOrValue<BigNumberish>,
      _startingPoint: PromiseOrValue<BigNumberish>,
      _status: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _nashTreasuryAddress: PromiseOrValue<string>,
      _nashFees: PromiseOrValue<BigNumberish>,
      _agentFees: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initializeDepositTransaction(
      _amount: PromiseOrValue<BigNumberish>,
      _exchangeToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initializeWithdrawalTransaction(
      _amount: PromiseOrValue<BigNumberish>,
      _exchangeToken: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isTxInStatus(
      wtx: NashEscrow.NashTransactionStruct,
      _status: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setNashTreasury(
      _newTreasuryAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateAgentFees(
      _agentFees: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateNashFees(
      _nashFees: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    agentAcceptDepositTransaction(
      _transactionid: PromiseOrValue<BigNumberish>,
      _paymentDetails: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    agentAcceptWithdrawalTransaction(
      _transactionid: PromiseOrValue<BigNumberish>,
      _paymentDetails: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    agentConfirmPayment(
      _transactionid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    clientConfirmPayment(
      _transactionid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    clientWritePaymentInformation(
      _transactionid: PromiseOrValue<BigNumberish>,
      _comment: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    countSuccessfulTransactions(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    finalizeTransaction(
      _transactionid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAgentFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMyTransactions(
      _paginationCount: PromiseOrValue<BigNumberish>,
      _startingPoint: PromiseOrValue<BigNumberish>,
      _status: PromiseOrValue<BigNumberish>[],
      myAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNashFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNextTransactionIndex(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNextUnpairedTransaction(
      _transactionID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTransactionByIndex(
      _transactionID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTransactions(
      _paginationCount: PromiseOrValue<BigNumberish>,
      _startingPoint: PromiseOrValue<BigNumberish>,
      _status: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _nashTreasuryAddress: PromiseOrValue<string>,
      _nashFees: PromiseOrValue<BigNumberish>,
      _agentFees: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initializeDepositTransaction(
      _amount: PromiseOrValue<BigNumberish>,
      _exchangeToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initializeWithdrawalTransaction(
      _amount: PromiseOrValue<BigNumberish>,
      _exchangeToken: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isTxInStatus(
      wtx: NashEscrow.NashTransactionStruct,
      _status: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setNashTreasury(
      _newTreasuryAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateAgentFees(
      _agentFees: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateNashFees(
      _nashFees: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
