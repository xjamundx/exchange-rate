import { useState, useCallback, useEffect } from "react";
import { RateTable } from "./RateTable";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { AmountField } from "./AmountField";
import { getExchangeRates } from "../api";

const supportedCurrencies = ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"];

export function ExchangeRate() {
  const [amount, setAmount] = useState("1.50");
  const [currencyCode, setCurrencyCode] = useState("USD");
  const [currencyData, setCurrencyData] = useState({ USD: 1.0 });

  // fetch the exchange rates each time currency code changes
  useEffect(() => {
    getExchangeRates(currencyCode, supportedCurrencies).then((rates) => {
      setCurrencyData(rates);
    });
  }, [currencyCode]);

  const handleCurrencyCode = useCallback(
    (e) => setCurrencyCode(e.target.value),
    []
  );

  const handleAmountChange = useCallback((e) => {
    let newAmount = e.target.value;
    setAmount(newAmount);
  }, []);

  return (
    <>
      <section>
        <h1 className="ExchangeRate-header">
          Exchange Rates{" "}
          <CurrencyCodePicker
            supportedCurrencies={supportedCurrencies}
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
    </>
  );
}
