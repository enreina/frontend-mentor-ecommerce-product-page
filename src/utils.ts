export function getPriceAsStr(price: number) {
  return new Intl.NumberFormat('en-US', {style: 'currency', currency: "USD"}).format(price);
}
  
export function getDiscountedPrice(price: number, discount: number) {
  return price * discount;
} 

export function getDiscountAsStr(discount: number) {
  return `${discount * 100}%`;
}

export function parseIntWithFallback (
  str: string,
  radix: number,
  fallback: number
) {
  const value = Number.parseInt(str, radix);
  return Number.isNaN(value) ? fallback : value;
};