import { useState, useEffect, useCallback } from "react";
import { RateTable } from "./RateTable";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { AmountField } from "./AmountField";
import { getExchangeRates } from "../api";

const supportedSymbols = ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"];

export function ExchangeRate() {
  const [currencyCode, setCurrencyCode] = useState("USD");
  const [currencyData, setCurrencyData] = useState({ USD: 1.0 });
  useEffect(() => {
    getExchangeRates(currencyCode, supportedSymbols).then((rates) => {
      setCurrencyData(rates);
    });
  }, [currencyCode]);
  const handleCurrencyCode = useCallback(
    (e) => setCurrencyCode(e.target.value),
    []
  );
  return (
    <>
      <section>
        <h1 className="ExchangeRate-header">
          Exchange Rates{" "}
          <CurrencyCodePicker
            supportedSymbols={supportedSymbols}
            currencyCode={currencyCode}
            onChange={handleCurrencyCode}
          />
        </h1>
      </section>
      <section>
        <AmountField />
      </section>
      <section>
        <RateTable currencyData={currencyData} />
      </section>
    </>
  );
}
