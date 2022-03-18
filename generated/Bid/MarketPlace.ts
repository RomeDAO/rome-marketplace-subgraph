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

export class BidCancelled extends ethereum.Event {
  get params(): BidCancelled__Params {
    return new BidCancelled__Params(this);
  }
}

export class BidCancelled__Params {
  _event: BidCancelled;

  constructor(event: BidCancelled) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get buyer(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get escrowed(): boolean {
    return this._event.parameters[4].value.toBoolean();
  }

  get timestamp(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class BidPlaced extends ethereum.Event {
  get params(): BidPlaced__Params {
    return new BidPlaced__Params(this);
  }
}

export class BidPlaced__Params {
  _event: BidPlaced;

  constructor(event: BidPlaced) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get buyer(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get timestamp(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get escrowed(): boolean {
    return this._event.parameters[5].value.toBoolean();
  }
}

export class EscrowReturned extends ethereum.Event {
  get params(): EscrowReturned__Params {
    return new EscrowReturned__Params(this);
  }
}

export class EscrowReturned__Params {
  _event: EscrowReturned;

  constructor(event: EscrowReturned) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TokenDelisted extends ethereum.Event {
  get params(): TokenDelisted__Params {
    return new TokenDelisted__Params(this);
  }
}

export class TokenDelisted__Params {
  _event: TokenDelisted;

  constructor(event: TokenDelisted) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class TokenListed extends ethereum.Event {
  get params(): TokenListed__Params {
    return new TokenListed__Params(this);
  }
}

export class TokenListed__Params {
  _event: TokenListed;

  constructor(event: TokenListed) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class TokenPurchased extends ethereum.Event {
  get params(): TokenPurchased__Params {
    return new TokenPurchased__Params(this);
  }
}

export class TokenPurchased__Params {
  _event: TokenPurchased;

  constructor(event: TokenPurchased) {
    this._event = event;
  }

  get oldOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get collection(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class MarketPlace__getCurrentListingResultValue0Struct extends ethereum.Tuple {
  get price(): BigInt {
    return this[0].toBigInt();
  }

  get timestamp(): BigInt {
    return this[1].toBigInt();
  }

  get tokenId(): BigInt {
    return this[2].toBigInt();
  }

  get accepted(): boolean {
    return this[3].toBoolean();
  }
}

export class MarketPlace__getOffersResultValue0Struct extends ethereum.Tuple {
  get price(): BigInt {
    return this[0].toBigInt();
  }

  get timestamp(): BigInt {
    return this[1].toBigInt();
  }

  get accepted(): boolean {
    return this[2].toBoolean();
  }

  get buyer(): Address {
    return this[3].toAddress();
  }

  get escrowed(): boolean {
    return this[4].toBoolean();
  }
}

export class MarketPlace__getTokenListingHistoryResultValue0Struct extends ethereum.Tuple {
  get price(): BigInt {
    return this[0].toBigInt();
  }

  get timestamp(): BigInt {
    return this[1].toBigInt();
  }

  get tokenId(): BigInt {
    return this[2].toBigInt();
  }

  get accepted(): boolean {
    return this[3].toBoolean();
  }
}

export class MarketPlace extends ethereum.SmartContract {
  static bind(address: Address): MarketPlace {
    return new MarketPlace("MarketPlace", address);
  }

  burnAddress(): Address {
    let result = super.call("burnAddress", "burnAddress():(address)", []);

    return result[0].toAddress();
  }

  try_burnAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall("burnAddress", "burnAddress():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  burnFee(): BigInt {
    let result = super.call("burnFee", "burnFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_burnFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("burnFee", "burnFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  checkEscrowAmount(user: Address): BigInt {
    let result = super.call(
      "checkEscrowAmount",
      "checkEscrowAmount(address):(uint256)",
      [ethereum.Value.fromAddress(user)]
    );

    return result[0].toBigInt();
  }

  try_checkEscrowAmount(user: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "checkEscrowAmount",
      "checkEscrowAmount(address):(uint256)",
      [ethereum.Value.fromAddress(user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  clearBidsAfterAcceptingOffer(): boolean {
    let result = super.call(
      "clearBidsAfterAcceptingOffer",
      "clearBidsAfterAcceptingOffer():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_clearBidsAfterAcceptingOffer(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "clearBidsAfterAcceptingOffer",
      "clearBidsAfterAcceptingOffer():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  daoAddress(): Address {
    let result = super.call("daoAddress", "daoAddress():(address)", []);

    return result[0].toAddress();
  }

  try_daoAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall("daoAddress", "daoAddress():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  daoFee(): BigInt {
    let result = super.call("daoFee", "daoFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_daoFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("daoFee", "daoFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  delistAfterAcceptingOffer(): boolean {
    let result = super.call(
      "delistAfterAcceptingOffer",
      "delistAfterAcceptingOffer():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_delistAfterAcceptingOffer(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "delistAfterAcceptingOffer",
      "delistAfterAcceptingOffer():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  feesOn(): boolean {
    let result = super.call("feesOn", "feesOn():(bool)", []);

    return result[0].toBoolean();
  }

  try_feesOn(): ethereum.CallResult<boolean> {
    let result = super.tryCall("feesOn", "feesOn():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getCurrentListing(
    ca: Address,
    tokenId: BigInt
  ): MarketPlace__getCurrentListingResultValue0Struct {
    let result = super.call(
      "getCurrentListing",
      "getCurrentListing(address,uint256):((uint256,uint256,uint256,bool))",
      [
        ethereum.Value.fromAddress(ca),
        ethereum.Value.fromUnsignedBigInt(tokenId)
      ]
    );

    return changetype<MarketPlace__getCurrentListingResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getCurrentListing(
    ca: Address,
    tokenId: BigInt
  ): ethereum.CallResult<MarketPlace__getCurrentListingResultValue0Struct> {
    let result = super.tryCall(
      "getCurrentListing",
      "getCurrentListing(address,uint256):((uint256,uint256,uint256,bool))",
      [
        ethereum.Value.fromAddress(ca),
        ethereum.Value.fromUnsignedBigInt(tokenId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<MarketPlace__getCurrentListingResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  getCurrentListingPrice(ca: Address, tokenId: BigInt): BigInt {
    let result = super.call(
      "getCurrentListingPrice",
      "getCurrentListingPrice(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(ca),
        ethereum.Value.fromUnsignedBigInt(tokenId)
      ]
    );

    return result[0].toBigInt();
  }

  try_getCurrentListingPrice(
    ca: Address,
    tokenId: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getCurrentListingPrice",
      "getCurrentListingPrice(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(ca),
        ethereum.Value.fromUnsignedBigInt(tokenId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getEscrowedAmount(user: Address): BigInt {
    let result = super.call(
      "getEscrowedAmount",
      "getEscrowedAmount(address):(uint256)",
      [ethereum.Value.fromAddress(user)]
    );

    return result[0].toBigInt();
  }

  try_getEscrowedAmount(user: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getEscrowedAmount",
      "getEscrowedAmount(address):(uint256)",
      [ethereum.Value.fromAddress(user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getOffers(
    ca: Address,
    tokenId: BigInt
  ): Array<MarketPlace__getOffersResultValue0Struct> {
    let result = super.call(
      "getOffers",
      "getOffers(address,uint256):((uint256,uint256,bool,address,bool)[])",
      [
        ethereum.Value.fromAddress(ca),
        ethereum.Value.fromUnsignedBigInt(tokenId)
      ]
    );

    return result[0].toTupleArray<MarketPlace__getOffersResultValue0Struct>();
  }

  try_getOffers(
    ca: Address,
    tokenId: BigInt
  ): ethereum.CallResult<Array<MarketPlace__getOffersResultValue0Struct>> {
    let result = super.tryCall(
      "getOffers",
      "getOffers(address,uint256):((uint256,uint256,bool,address,bool)[])",
      [
        ethereum.Value.fromAddress(ca),
        ethereum.Value.fromUnsignedBigInt(tokenId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<MarketPlace__getOffersResultValue0Struct>()
    );
  }

  getTokenListingHistory(
    ca: Address,
    tokenId: BigInt
  ): Array<MarketPlace__getTokenListingHistoryResultValue0Struct> {
    let result = super.call(
      "getTokenListingHistory",
      "getTokenListingHistory(address,uint256):((uint256,uint256,uint256,bool)[])",
      [
        ethereum.Value.fromAddress(ca),
        ethereum.Value.fromUnsignedBigInt(tokenId)
      ]
    );

    return result[0].toTupleArray<
      MarketPlace__getTokenListingHistoryResultValue0Struct
    >();
  }

  try_getTokenListingHistory(
    ca: Address,
    tokenId: BigInt
  ): ethereum.CallResult<
    Array<MarketPlace__getTokenListingHistoryResultValue0Struct>
  > {
    let result = super.tryCall(
      "getTokenListingHistory",
      "getTokenListingHistory(address,uint256):((uint256,uint256,uint256,bool)[])",
      [
        ethereum.Value.fromAddress(ca),
        ethereum.Value.fromUnsignedBigInt(tokenId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<
        MarketPlace__getTokenListingHistoryResultValue0Struct
      >()
    );
  }

  isCollectionTrading(ca: Address): boolean {
    let result = super.call(
      "isCollectionTrading",
      "isCollectionTrading(address):(bool)",
      [ethereum.Value.fromAddress(ca)]
    );

    return result[0].toBoolean();
  }

  try_isCollectionTrading(ca: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isCollectionTrading",
      "isCollectionTrading(address):(bool)",
      [ethereum.Value.fromAddress(ca)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isListed(ca: Address, tokenId: BigInt): boolean {
    let result = super.call("isListed", "isListed(address,uint256):(bool)", [
      ethereum.Value.fromAddress(ca),
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toBoolean();
  }

  try_isListed(ca: Address, tokenId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("isListed", "isListed(address,uint256):(bool)", [
      ethereum.Value.fromAddress(ca),
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  sROME(): Address {
    let result = super.call("sROME", "sROME():(address)", []);

    return result[0].toAddress();
  }

  try_sROME(): ethereum.CallResult<Address> {
    let result = super.tryCall("sROME", "sROME():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  totalEscrowedAmount(): BigInt {
    let result = super.call(
      "totalEscrowedAmount",
      "totalEscrowedAmount():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalEscrowedAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalEscrowedAmount",
      "totalEscrowedAmount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalFees(): BigInt {
    let result = super.call("totalFees", "totalFees():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalFees(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalFees", "totalFees():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tradingPaused(): boolean {
    let result = super.call("tradingPaused", "tradingPaused():(bool)", []);

    return result[0].toBoolean();
  }

  try_tradingPaused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("tradingPaused", "tradingPaused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class RecoverMOVRCall extends ethereum.Call {
  get inputs(): RecoverMOVRCall__Inputs {
    return new RecoverMOVRCall__Inputs(this);
  }

  get outputs(): RecoverMOVRCall__Outputs {
    return new RecoverMOVRCall__Outputs(this);
  }
}

export class RecoverMOVRCall__Inputs {
  _call: RecoverMOVRCall;

  constructor(call: RecoverMOVRCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RecoverMOVRCall__Outputs {
  _call: RecoverMOVRCall;

  constructor(call: RecoverMOVRCall) {
    this._call = call;
  }
}

export class AcceptOfferCall extends ethereum.Call {
  get inputs(): AcceptOfferCall__Inputs {
    return new AcceptOfferCall__Inputs(this);
  }

  get outputs(): AcceptOfferCall__Outputs {
    return new AcceptOfferCall__Outputs(this);
  }
}

export class AcceptOfferCall__Inputs {
  _call: AcceptOfferCall;

  constructor(call: AcceptOfferCall) {
    this._call = call;
  }

  get ca(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get from(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get escrowedBid(): boolean {
    return this._call.inputValues[4].value.toBoolean();
  }
}

export class AcceptOfferCall__Outputs {
  _call: AcceptOfferCall;

  constructor(call: AcceptOfferCall) {
    this._call = call;
  }
}

export class AddMoneyToEscrowCall extends ethereum.Call {
  get inputs(): AddMoneyToEscrowCall__Inputs {
    return new AddMoneyToEscrowCall__Inputs(this);
  }

  get outputs(): AddMoneyToEscrowCall__Outputs {
    return new AddMoneyToEscrowCall__Outputs(this);
  }
}

export class AddMoneyToEscrowCall__Inputs {
  _call: AddMoneyToEscrowCall;

  constructor(call: AddMoneyToEscrowCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class AddMoneyToEscrowCall__Outputs {
  _call: AddMoneyToEscrowCall;

  constructor(call: AddMoneyToEscrowCall) {
    this._call = call;
  }
}

export class CancelOfferCall extends ethereum.Call {
  get inputs(): CancelOfferCall__Inputs {
    return new CancelOfferCall__Inputs(this);
  }

  get outputs(): CancelOfferCall__Outputs {
    return new CancelOfferCall__Outputs(this);
  }
}

export class CancelOfferCall__Inputs {
  _call: CancelOfferCall;

  constructor(call: CancelOfferCall) {
    this._call = call;
  }

  get ca(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get escrowed(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }
}

export class CancelOfferCall__Outputs {
  _call: CancelOfferCall;

  constructor(call: CancelOfferCall) {
    this._call = call;
  }
}

export class ClearAllBidsCall extends ethereum.Call {
  get inputs(): ClearAllBidsCall__Inputs {
    return new ClearAllBidsCall__Inputs(this);
  }

  get outputs(): ClearAllBidsCall__Outputs {
    return new ClearAllBidsCall__Outputs(this);
  }
}

export class ClearAllBidsCall__Inputs {
  _call: ClearAllBidsCall;

  constructor(call: ClearAllBidsCall) {
    this._call = call;
  }

  get ca(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ClearAllBidsCall__Outputs {
  _call: ClearAllBidsCall;

  constructor(call: ClearAllBidsCall) {
    this._call = call;
  }
}

export class ClearAllListingsCall extends ethereum.Call {
  get inputs(): ClearAllListingsCall__Inputs {
    return new ClearAllListingsCall__Inputs(this);
  }

  get outputs(): ClearAllListingsCall__Outputs {
    return new ClearAllListingsCall__Outputs(this);
  }
}

export class ClearAllListingsCall__Inputs {
  _call: ClearAllListingsCall;

  constructor(call: ClearAllListingsCall) {
    this._call = call;
  }

  get ca(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ClearAllListingsCall__Outputs {
  _call: ClearAllListingsCall;

  constructor(call: ClearAllListingsCall) {
    this._call = call;
  }
}

export class DelistTokenCall extends ethereum.Call {
  get inputs(): DelistTokenCall__Inputs {
    return new DelistTokenCall__Inputs(this);
  }

  get outputs(): DelistTokenCall__Outputs {
    return new DelistTokenCall__Outputs(this);
  }
}

export class DelistTokenCall__Inputs {
  _call: DelistTokenCall;

  constructor(call: DelistTokenCall) {
    this._call = call;
  }

  get ca(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DelistTokenCall__Outputs {
  _call: DelistTokenCall;

  constructor(call: DelistTokenCall) {
    this._call = call;
  }
}

export class FulfillListingCall extends ethereum.Call {
  get inputs(): FulfillListingCall__Inputs {
    return new FulfillListingCall__Inputs(this);
  }

  get outputs(): FulfillListingCall__Outputs {
    return new FulfillListingCall__Outputs(this);
  }
}

export class FulfillListingCall__Inputs {
  _call: FulfillListingCall;

  constructor(call: FulfillListingCall) {
    this._call = call;
  }

  get ca(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class FulfillListingCall__Outputs {
  _call: FulfillListingCall;

  constructor(call: FulfillListingCall) {
    this._call = call;
  }
}

export class ListTokenCall extends ethereum.Call {
  get inputs(): ListTokenCall__Inputs {
    return new ListTokenCall__Inputs(this);
  }

  get outputs(): ListTokenCall__Outputs {
    return new ListTokenCall__Outputs(this);
  }
}

export class ListTokenCall__Inputs {
  _call: ListTokenCall;

  constructor(call: ListTokenCall) {
    this._call = call;
  }

  get ca(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ListTokenCall__Outputs {
  _call: ListTokenCall;

  constructor(call: ListTokenCall) {
    this._call = call;
  }
}

export class MakeEscrowedOfferCall extends ethereum.Call {
  get inputs(): MakeEscrowedOfferCall__Inputs {
    return new MakeEscrowedOfferCall__Inputs(this);
  }

  get outputs(): MakeEscrowedOfferCall__Outputs {
    return new MakeEscrowedOfferCall__Outputs(this);
  }
}

export class MakeEscrowedOfferCall__Inputs {
  _call: MakeEscrowedOfferCall;

  constructor(call: MakeEscrowedOfferCall) {
    this._call = call;
  }

  get ca(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class MakeEscrowedOfferCall__Outputs {
  _call: MakeEscrowedOfferCall;

  constructor(call: MakeEscrowedOfferCall) {
    this._call = call;
  }
}

export class MakeOfferCall extends ethereum.Call {
  get inputs(): MakeOfferCall__Inputs {
    return new MakeOfferCall__Inputs(this);
  }

  get outputs(): MakeOfferCall__Outputs {
    return new MakeOfferCall__Outputs(this);
  }
}

export class MakeOfferCall__Inputs {
  _call: MakeOfferCall;

  constructor(call: MakeOfferCall) {
    this._call = call;
  }

  get ca(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class MakeOfferCall__Outputs {
  _call: MakeOfferCall;

  constructor(call: MakeOfferCall) {
    this._call = call;
  }
}

export class OnERC721ReceivedCall extends ethereum.Call {
  get inputs(): OnERC721ReceivedCall__Inputs {
    return new OnERC721ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC721ReceivedCall__Outputs {
    return new OnERC721ReceivedCall__Outputs(this);
  }
}

export class OnERC721ReceivedCall__Inputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class OnERC721ReceivedCall__Outputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class RecoverNFTCall extends ethereum.Call {
  get inputs(): RecoverNFTCall__Inputs {
    return new RecoverNFTCall__Inputs(this);
  }

  get outputs(): RecoverNFTCall__Outputs {
    return new RecoverNFTCall__Outputs(this);
  }
}

export class RecoverNFTCall__Inputs {
  _call: RecoverNFTCall;

  constructor(call: RecoverNFTCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RecoverNFTCall__Outputs {
  _call: RecoverNFTCall;

  constructor(call: RecoverNFTCall) {
    this._call = call;
  }
}

export class RecoverTokenCall extends ethereum.Call {
  get inputs(): RecoverTokenCall__Inputs {
    return new RecoverTokenCall__Inputs(this);
  }

  get outputs(): RecoverTokenCall__Outputs {
    return new RecoverTokenCall__Outputs(this);
  }
}

export class RecoverTokenCall__Inputs {
  _call: RecoverTokenCall;

  constructor(call: RecoverTokenCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RecoverTokenCall__Outputs {
  _call: RecoverTokenCall;

  constructor(call: RecoverTokenCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetBurnAddressCall extends ethereum.Call {
  get inputs(): SetBurnAddressCall__Inputs {
    return new SetBurnAddressCall__Inputs(this);
  }

  get outputs(): SetBurnAddressCall__Outputs {
    return new SetBurnAddressCall__Outputs(this);
  }
}

export class SetBurnAddressCall__Inputs {
  _call: SetBurnAddressCall;

  constructor(call: SetBurnAddressCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetBurnAddressCall__Outputs {
  _call: SetBurnAddressCall;

  constructor(call: SetBurnAddressCall) {
    this._call = call;
  }
}

export class SetBurnFeeCall extends ethereum.Call {
  get inputs(): SetBurnFeeCall__Inputs {
    return new SetBurnFeeCall__Inputs(this);
  }

  get outputs(): SetBurnFeeCall__Outputs {
    return new SetBurnFeeCall__Outputs(this);
  }
}

export class SetBurnFeeCall__Inputs {
  _call: SetBurnFeeCall;

  constructor(call: SetBurnFeeCall) {
    this._call = call;
  }

  get fee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetBurnFeeCall__Outputs {
  _call: SetBurnFeeCall;

  constructor(call: SetBurnFeeCall) {
    this._call = call;
  }
}

export class SetClearBidsAfterAcceptingOfferCall extends ethereum.Call {
  get inputs(): SetClearBidsAfterAcceptingOfferCall__Inputs {
    return new SetClearBidsAfterAcceptingOfferCall__Inputs(this);
  }

  get outputs(): SetClearBidsAfterAcceptingOfferCall__Outputs {
    return new SetClearBidsAfterAcceptingOfferCall__Outputs(this);
  }
}

export class SetClearBidsAfterAcceptingOfferCall__Inputs {
  _call: SetClearBidsAfterAcceptingOfferCall;

  constructor(call: SetClearBidsAfterAcceptingOfferCall) {
    this._call = call;
  }

  get _value(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetClearBidsAfterAcceptingOfferCall__Outputs {
  _call: SetClearBidsAfterAcceptingOfferCall;

  constructor(call: SetClearBidsAfterAcceptingOfferCall) {
    this._call = call;
  }
}

export class SetCollectionTradingCall extends ethereum.Call {
  get inputs(): SetCollectionTradingCall__Inputs {
    return new SetCollectionTradingCall__Inputs(this);
  }

  get outputs(): SetCollectionTradingCall__Outputs {
    return new SetCollectionTradingCall__Outputs(this);
  }
}

export class SetCollectionTradingCall__Inputs {
  _call: SetCollectionTradingCall;

  constructor(call: SetCollectionTradingCall) {
    this._call = call;
  }

  get ca(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetCollectionTradingCall__Outputs {
  _call: SetCollectionTradingCall;

  constructor(call: SetCollectionTradingCall) {
    this._call = call;
  }
}

export class SetDaoAddressCall extends ethereum.Call {
  get inputs(): SetDaoAddressCall__Inputs {
    return new SetDaoAddressCall__Inputs(this);
  }

  get outputs(): SetDaoAddressCall__Outputs {
    return new SetDaoAddressCall__Outputs(this);
  }
}

export class SetDaoAddressCall__Inputs {
  _call: SetDaoAddressCall;

  constructor(call: SetDaoAddressCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetDaoAddressCall__Outputs {
  _call: SetDaoAddressCall;

  constructor(call: SetDaoAddressCall) {
    this._call = call;
  }
}

export class SetDaoFeeCall extends ethereum.Call {
  get inputs(): SetDaoFeeCall__Inputs {
    return new SetDaoFeeCall__Inputs(this);
  }

  get outputs(): SetDaoFeeCall__Outputs {
    return new SetDaoFeeCall__Outputs(this);
  }
}

export class SetDaoFeeCall__Inputs {
  _call: SetDaoFeeCall;

  constructor(call: SetDaoFeeCall) {
    this._call = call;
  }

  get fee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetDaoFeeCall__Outputs {
  _call: SetDaoFeeCall;

  constructor(call: SetDaoFeeCall) {
    this._call = call;
  }
}

export class SetDelistAfterAcceptingOfferCall extends ethereum.Call {
  get inputs(): SetDelistAfterAcceptingOfferCall__Inputs {
    return new SetDelistAfterAcceptingOfferCall__Inputs(this);
  }

  get outputs(): SetDelistAfterAcceptingOfferCall__Outputs {
    return new SetDelistAfterAcceptingOfferCall__Outputs(this);
  }
}

export class SetDelistAfterAcceptingOfferCall__Inputs {
  _call: SetDelistAfterAcceptingOfferCall;

  constructor(call: SetDelistAfterAcceptingOfferCall) {
    this._call = call;
  }

  get _value(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetDelistAfterAcceptingOfferCall__Outputs {
  _call: SetDelistAfterAcceptingOfferCall;

  constructor(call: SetDelistAfterAcceptingOfferCall) {
    this._call = call;
  }
}

export class SetFeesOnCall extends ethereum.Call {
  get inputs(): SetFeesOnCall__Inputs {
    return new SetFeesOnCall__Inputs(this);
  }

  get outputs(): SetFeesOnCall__Outputs {
    return new SetFeesOnCall__Outputs(this);
  }
}

export class SetFeesOnCall__Inputs {
  _call: SetFeesOnCall;

  constructor(call: SetFeesOnCall) {
    this._call = call;
  }

  get _value(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetFeesOnCall__Outputs {
  _call: SetFeesOnCall;

  constructor(call: SetFeesOnCall) {
    this._call = call;
  }
}

export class SetTradingCall extends ethereum.Call {
  get inputs(): SetTradingCall__Inputs {
    return new SetTradingCall__Inputs(this);
  }

  get outputs(): SetTradingCall__Outputs {
    return new SetTradingCall__Outputs(this);
  }
}

export class SetTradingCall__Inputs {
  _call: SetTradingCall;

  constructor(call: SetTradingCall) {
    this._call = call;
  }

  get value(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetTradingCall__Outputs {
  _call: SetTradingCall;

  constructor(call: SetTradingCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawMoneyFromEscrowCall extends ethereum.Call {
  get inputs(): WithdrawMoneyFromEscrowCall__Inputs {
    return new WithdrawMoneyFromEscrowCall__Inputs(this);
  }

  get outputs(): WithdrawMoneyFromEscrowCall__Outputs {
    return new WithdrawMoneyFromEscrowCall__Outputs(this);
  }
}

export class WithdrawMoneyFromEscrowCall__Inputs {
  _call: WithdrawMoneyFromEscrowCall;

  constructor(call: WithdrawMoneyFromEscrowCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawMoneyFromEscrowCall__Outputs {
  _call: WithdrawMoneyFromEscrowCall;

  constructor(call: WithdrawMoneyFromEscrowCall) {
    this._call = call;
  }
}
