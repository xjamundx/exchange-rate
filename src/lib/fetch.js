import exchangeRates from "./rates.json";

// sleep helper to simulate a network call
const sleep = (time) => new Promise((res) => setTimeout(res, time));

// since we only make a single fetch call
// we're going to use this mock fetch method
// which will simulate a short delay and return
// with exchange rates after a short period
export async function fetch(url) {
  const [, search = ""] = url.split("?");
  const params = new URLSearchParams(search);
  await sleep(400);
  const symbols = new Set((params.get("symbols") || "").split(","));
  const base = params.get("base");
  const rates = exchangeRates[base];
  return {
    // simulate the JSON method on the fetch response
    async json() {
      return {
        success: true,
        rates,
      };
    },
  };
}
