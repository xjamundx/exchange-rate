import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ratesUpdated } from "../store/actions/RateActions";
import {
  getCurrencyCode,
  getSupportedCurrencies,
} from "../store/reducers/RateReducer";
import { RateTable } from "./RateTable";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { getExchangeRates } from "../api";
import { AmountField } from "./AmountField";

export function ExchangeRate() {
  useCurrencyCodes();
  return (
    <>
      <section>
        <h1 className="ExchangeRate-header">
          Exchange Rates <CurrencyCodePicker />
        </h1>
      </section>
      <section>
        <AmountField />
      </section>
      <section>
        <RateTable />
      </section>
    </>
  );
}

function useCurrencyCodes() {
  const dispatch = useDispatch();
  const supportedCurrencies = useSelector(getSupportedCurrencies);
  const currencyCode = useSelector(getCurrencyCode);
  const updateRates = (rates) => dispatch(ratesUpdated(rates));
  useEffect(() => {
    getLatestExchangeRates();
  }, [currencyCode]);
  function getLatestExchangeRates() {
    getExchangeRates(currencyCode, supportedCurrencies).then((rates) => {
      updateRates(rates);
    });
  }
}
