export const getPrice = (price: number) => {
  if (price === 0) {
    return 'No extra cost';
  }
  if (price < 0) {
    return `${price} $`;
  }
  return `+${price} $`;
};
