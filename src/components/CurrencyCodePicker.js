import { useSelector, useDispatch } from "react-redux";
import { updateCurrencyCode } from "../reducers/RateReducer";

export function CurrencyCodePicker() {
  const currencyCode = useSelector((state) => state.currencyCode);
  const supportedSymbols = useSelector((state) => state.supportedSymbols);
  const dispatch = useDispatch();
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
