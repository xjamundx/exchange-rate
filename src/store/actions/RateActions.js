import {
  CURRENCY_CODE_UPDATED,
  AMOUNT_CHANGED,
  RATES_UPDATED,
} from "./ActionTypes";

export const updateCurrencyCode = (currencyCode) => ({
  type: CURRENCY_CODE_UPDATED,
  payload: currencyCode,
});
export const ratesUpdated = (rates) => ({
  type: RATES_UPDATED,
  payload: rates,
});

export const amountChanged = (amount) => ({
  type: AMOUNT_CHANGED,
  payload: amount,
});
