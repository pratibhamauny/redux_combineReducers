import { actionTypes } from "../constants/action-types"
export const incrementCount=()=>{
    return{
        type:actionTypes.INCREMENT
    }
}

export const decrementCount=()=>{
    return{
        type:actionTypes.DECREMENT
    }
}

export const incrementByFive=(data)=>{
    return{
        type:actionTypes.INCREMENT_BY_FIVE,
        payload:data
    }
}
export const decrementByFive=(data)=>{
    return{
        type:actionTypes.DECREMENT_BY_FIVE,
        payload:data
    }
}