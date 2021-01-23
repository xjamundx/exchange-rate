import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ExchangeRateContainer } from "./components/ExchangeRate";
import { store } from "./store/store";
import "./style.css";

ReactDOM.render(
  <Provider store={store}>
    <ExchangeRateContainer />
  </Provider>,
  document.getElementById("root")
);
