import { useState, useEffect } from "react";

export function useCurrencyData(currencyCode, supportedSymbols) {
  const [currencyData, setCurrencyData] = useState({ USD: 1.0 });

  useEffect(() => {
    const symbols = supportedSymbols
      .filter((symbol) => symbol !== currencyCode) // exclude your own code from requested symbols
      .join();
    const url = `https://api.exchangeratesapi.io/latest?base=${currencyCode}&symbols=${symbols}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setCurrencyData(res.rates);
      });
  }, [supportedSymbols, currencyCode]);

  return currencyData;
}
