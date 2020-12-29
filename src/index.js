import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ExchangeRate } from "./components/ExchangeRate";
import { updateCurrencyCode } from "./reducers/RateReducer";
import { store } from "./store";
import "./style.css";

// kick start the exchange rate call
store.dispatch(updateCurrencyCode("USD"));

ReactDOM.render(
  <Provider store={store}>
    <ExchangeRate />
  </Provider>,
  document.getElementById("root")
);
