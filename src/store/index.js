import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";

const rootReducer = combineReducers({
  cashReducer,
  customerReducer
});

export const store = createStore(rootReducer, composeWithDevTools());