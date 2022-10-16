import { combineReducers } from "redux";
import { changeNameReducer } from "./changeNameReducer";
import { CounterReducer } from "./counterReducer";
import { usersReducer } from "./usersReducer";

export const rootReducer=combineReducers({
    counter:CounterReducer,
    changeName:changeNameReducer,
    users:usersReducer
})