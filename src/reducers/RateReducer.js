import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
export function updateCurrencyCode(currencyCode) {
  return (dispatch, getState) => {
    const state = getState();
    const symbols = getSupportedSymbols(state);
    dispatch({ type: "rate/currencyCodeUpdated", payload: currencyCode });
    getExchangeRates(currencyCode, symbols).then((rates) => {
      dispatch({ type: "rate/updateRates", payload: rates });
    });
  };
}

// custom hook
export function useCurrencyData() {
  const currencyCode = useSelector(getCurrencyCode);
  const rates = useSelector(getRates);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateCurrencyCode(currencyCode));
  }, []);
  return rates;
}

// selectors
export const getCurrencyCode = (state) => state.rate.currencyCode;
export const getAmount = (state) => state.rate.amount;
export const getSupportedSymbols = (state) => state.rate.supportedSymbols;
export const getRates = (state) => state.rate.rates;
