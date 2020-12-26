import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { rateReducer } from "./reducers/RateReducer";

export const store = createStore(rateReducer, applyMiddleware(thunk));
