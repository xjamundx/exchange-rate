import { getExchangeRates } from "../../api";
import { getSupportedSymbols } from "../reducers/RateReducer";
import {
  CURRENCY_CODE_UPDATED,
  AMOUNT_CHANGED,
  RATES_UPDATED,
} from "./ActionTypes";

export function updateCurrencyCode(currencyCode) {
  return (dispatch, getState) => {
    const state = getState();
    const symbols = getSupportedSymbols(state);
    dispatch({ type: CURRENCY_CODE_UPDATED, payload: currencyCode });
    getExchangeRates(currencyCode, symbols).then((rates) => {
      dispatch({ type: RATES_UPDATED, payload: rates });
    });
  };
}

export const amountChanged = (amount) => ({
  type: AMOUNT_CHANGED,
  payload: amount,
});
