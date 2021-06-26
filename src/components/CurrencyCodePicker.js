import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCurrencyCode,
  getSupportedCurrencies,
} from "../store/reducers/RateReducer";
import { updateCurrencyCode } from "../store/actions/RateActions";

export function CurrencyCodePicker() {
  const dispatch = useDispatch();
  const currencyCode = useSelector(getCurrencyCode);
  const supportedCurrencies = useSelector(getSupportedCurrencies);
  function onChange(e) {
    const currencyCode = e.target.value;
    dispatch(updateCurrencyCode(currencyCode));
  }
  return (
    <select className="currencyCode" value={currencyCode} onChange={onChange}>
      {supportedCurrencies.map((code) => (
        <option key={code} value={code}>
          {code}
        </option>
      ))}
    </select>
  );
}
