import { actionTypes } from "../constants/action-types";
const initialCounterState={
    count:0
}
export const CounterReducer=(state=initialCounterState,action)=>{
    console.log(state)
    switch(action.type){
        case actionTypes.INCREMENT:
            return{
                ...state,
                count:state.count+1
            }
        case actionTypes.DECREMENT:
            return{
                ...state,
                count:state.count-1
            }
        case actionTypes.INCREMENT_BY_FIVE:
            return{
                ...state,
                count:state.count+action.payload
            }
        case actionTypes.DECREMENT_BY_FIVE:
            return{
                ...state,
                count:state.count-action.payload
            }
        default:
            return state
    }
}