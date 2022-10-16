import { combineReducers } from "redux";
import { changeNameReducer } from "./changeNameReducer";
import { CounterReducer } from "./counterReducer";

export const rootReducer=combineReducers({
    counter:CounterReducer,
    changeName:changeNameReducer
})