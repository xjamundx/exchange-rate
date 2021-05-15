// because the API we were using stopped being free
// we've added this mock fetch method, which supplies
// its own exchange rate data
import { fetch } from "./lib/fetch";

// helper to make our exchange rate API call
export function getExchangeRates(base, currencies) {
  const codes = currencies
    .filter((curr) => curr !== base) // exclude your own currency code from requested currencies
    .join();
  const url = `https://api.exchangeratesapi.io/latest?base=${base}&symbols=${codes}`;
  return fetch(url)
    .then((res) => res.json())
    .then(handleAPIErrors)
    .then((res) => res.rates);
}

// if there was an error log it and return super basic mock data
// errors for this API came back in the form of { success: false, error: {...}}
// so we can check for that and log any errors and then respond with a basic
// valid response so the app doesn't crash
function handleAPIErrors(res) {
  if (res.success) return res;
  console.error(`Server Error: ${res.error.info}`);
  return {
    rates: {
      USD: 1.0,
    },
  };
}
