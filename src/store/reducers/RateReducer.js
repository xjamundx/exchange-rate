import * as Actions from "../actions/ActionTypes";

// selectors
const initialState = {
  amount: "12.99",
  currencyCode: "EUR",
  rates: {
    USD: 1.0,
  },
  supportedCurrencies: ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"],
};

// reducer
export function rateReducer(state = initialState, action) {
  if (action.type === Actions.AMOUNT_CHANGED) {
    return { ...state, amount: action.payload };
  } else if (action.type === Actions.CURRENCY_CODE_UPDATED) {
    return { ...state, currencyCode: action.payload };
  } else if (action.type === Actions.RATES_UPDATED) {
    return { ...state, rates: action.payload };
  }
  return state;
}

// selectors
export const getCurrencyCode = (state) => state.rates.currencyCode;
export const getAmount = (state) => state.rates.amount;
export const getSupportedCurrencies = (state) =>
  state.rates.supportedCurrencies;
export const getRates = (state) => state.rates.rates;
