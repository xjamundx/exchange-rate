import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ExchangeRate } from "./components/ExchangeRate";
import { store } from "./store";
import "./style.css";

ReactDOM.render(
  <Provider store={store}>
    <ExchangeRate />
  </Provider>,
  document.getElementById("root")
);
