// helper to make our exchange rate API call
export function getExchangeRates(base, currencies) {
  const codes = currencies
    .filter((curr) => curr !== base) // exclude your own currency code from requested currencies
    .join();
  const url = `https://api.exchangeratesapi.io/latest?base=${base}&symbols=${codes}`;
  return fetch(url)
    .then((res) => res.json())
    .then((res) => res.rates);
}
