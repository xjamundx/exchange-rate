// helper to make our exchange rate API call
export function getExchangeRates(base, supportedCurrencies) {
  const symbols = supportedCurrencies
    .filter((symbol) => symbol !== base) // exclude your own code from requested symbols
    .join();
  const url = `https://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbols}`;
  return fetch(url)
    .then((res) => res.json())
    .then((res) => res.rates);
}
