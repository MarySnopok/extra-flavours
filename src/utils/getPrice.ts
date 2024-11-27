/**
 * Returns a formatted price string based on the input price.
 *
 * @param price - The price value to format.
 * @returns A string representing the formatted price.
 *          - If the price is 0, returns 'No extra cost'.
 *          - If the price is negative, returns the price followed by ' $'.
 *          - If the price is positive, returns the price prefixed with '+' and followed by ' $'.
 */
export const getPrice = (price: number) => {
  if (price === 0) {
    return 'No extra cost';
  }
  if (price < 0) {
    return `${price} $`;
  }
  return `+${price} $`;
};
