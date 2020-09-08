export function getCreditsForPayment(amountUSD: number) {
  return Math.floor(amountUSD / 5);
}
