export const convertCurrency = (amount, fromCurrency, toCurrency) => {
  if (fromCurrency === toCurrency) {
    return amount;
  }

  const convertedAmount = (amount * toCurrency) / fromCurrency;
  return convertedAmount;
};
