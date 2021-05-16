import { useSelector, useDispatch } from "react-redux";
import {
  updateCurrencyCode,
  getCurrencyCode,
  getSupportedSymbols,
} from "../reducers/RateReducer";

export function CurrencyCodePicker() {
  const dispatch = useDispatch();
  const currencyCode = useSelector(getCurrencyCode);
  const supportedSymbols = useSelector(getSupportedSymbols);
  return (
    <select
      className="currencyCode"
      value={currencyCode}
      onChange={(e) => dispatch(updateCurrencyCode(e.target.value))}
    >
      {supportedSymbols.map((code) => (
        <option value={code}>{code}</option>
      ))}
    </select>
  );
}
