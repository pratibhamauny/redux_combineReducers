import { createStore } from "redux";
import { rootReducer } from "../reducer/rootReducer";

 const store=createStore(rootReducer)
//console.log(store)
 export default store