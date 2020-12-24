import { useState, useCallback } from "react";
import { RateTable } from "./RateTable";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { useCurrencyData } from "../hooks";
import { AmountField } from "./AmountField";

const supportedSymbols = ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"];

export function ExchangeRate() {
  const [amount, setAmount] = useState("0.0");
  const [currencyCode, setCurrencyCode] = useState("USD");
  const currencyData = useCurrencyData(currencyCode, supportedSymbols);
  const handleCurrencyCode = useCallback(
    (e) => setCurrencyCode(e.target.value),
    []
  );
  function handleAmountChange(e) {
    let newAmount = e.target.value;
    setAmount(newAmount);
  }
  return (
    <main>
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
        <AmountField amount={amount} onChange={handleAmountChange} />
      </section>
      <section>
        <RateTable currencyData={currencyData} amount={amount} />
      </section>
    </main>
  );
}
