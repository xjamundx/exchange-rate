import { createStore } from "redux";

const initialState = {
  amount: "12.99",
};

function rateReducer(state = initialState, action) {
  if (action.type === "amountChanged") {
    return { amount: action.payload };
  }
  return state;
}

export const store = createStore(rateReducer);
