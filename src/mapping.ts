import { BigInt } from "@graphprotocol/graph-ts"
import {
  BidCancelled,
  BidPlaced,
  EscrowReturned,
  TokenDelisted,
  TokenListed,
  TokenPurchased
} from "../generated/MarketPlace/MarketPlace"

export function handleBidCancelled(event: BidCancelled): void {}

export function handleBidPlaced(event: BidPlaced): void {}

export function handleEscrowReturned(event: EscrowReturned): void {}

export function handleTokenDelisted(event: TokenDelisted): void {}

export function handleTokenListed(event: TokenListed): void {}

export function handleTokenPurchased(event: TokenPurchased): void {}
