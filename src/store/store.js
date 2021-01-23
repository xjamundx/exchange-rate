import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { rateReducer } from "./reducers/RateReducer";
import { userReducer } from "./reducers/UserReducer";

const rootReducer = combineReducers({
  rates: rateReducer,
  user: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
