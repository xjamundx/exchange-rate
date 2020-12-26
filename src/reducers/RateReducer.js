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
  if (action.type === "amountChanged") {
    return { ...state, amount: action.payload };
  } else if (action.type === "currencyCodeUpdated") {
    return { ...state, currencyCode: action.payload };
  } else if (action.type === "ratesUpdates") {
    return { ...state, rates: action.payload };
  }
  return state;
}

// action creators
export function updateCurrencyCode(currencyCode) {
  return (dispatch, getStore) => {
    const symbols = getStore().supportedSymbols;
    dispatch({ type: "currencyCodeUpdated", payload: currencyCode });
    getExchangeRates(currencyCode, symbols).then((rates) => {
      dispatch({ type: "ratesUpdates", payload: rates });
    });
  };
}

// custom hook
export function useCurrencyData() {
  const currencyCode = useSelector((state) => state.currencyCode);
  const rates = useSelector((state) => state.rates);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateCurrencyCode(currencyCode));
  }, []);
  return rates;
}
