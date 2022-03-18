import { 
  Token,
  Listing,
  Bid, 
} from '../generated/schema';

export function getOrCreateToken(id: string): Token {  
  let token = Token.load(id);
  if (token === null) {
    token = new Token(id);
    token.status = 'listed';    
  };
  
  return token;
}

export function getOrCreateBid(id: string): Bid {  
  let bid = Bid.load(id);
  if (bid === null) {
    bid = new Bid(id);    
  };
  
  return bid;
}

export function getOrCreateListing(id: string): Listing {
  let listing = Listing.load(id);
  if (listing === null) {
    listing = new Listing(id);    
  };
  
  return listing;
}