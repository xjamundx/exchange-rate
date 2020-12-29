import { getExchangeRates } from "../api";

const initialState = {
  amount: "12.99",
  currencyCode: "EUR",
  rates: {
    USD: 1.0,
  },
  supportedSymbols: ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"],
};

export function rateReducer(state = initialState, action) {
  if (action.type === "rate/amountChanged") {
    return { ...state, amount: action.payload };
  } else if (action.type === "rate/currencyCodeUpdated") {
    return { ...state, currencyCode: action.payload };
  } else if (action.type === "rate/updateRates") {
    return { ...state, rates: action.payload };
  }
  return state;
}

// action creators
export function updateCurrencyCode(currencyCode = initialState.currencyCode) {
  return (dispatch, getState) => {
    const state = getState();
    const symbols = getSupportedSymbols(state);
    dispatch({ type: "rate/currencyCodeUpdated", payload: currencyCode });
    getExchangeRates(currencyCode, symbols).then((rates) => {
      dispatch({ type: "rate/updateRates", payload: rates });
    });
  };
}

export const amountChanged = (amount) => ({
  type: "rate/amountChanged",
  payload: amount,
});

// selectors
export const getCurrencyCode = (state) => state.rate.currencyCode;
export const getAmount = (state) => state.rate.amount;
export const getSupportedSymbols = (state) => state.rate.supportedSymbols;
export const getRates = (state) => state.rate.rates;
