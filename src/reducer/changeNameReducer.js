import { actionTypes } from "../constants/action-types"

const initialNameState={
    name:"Leo Martin"
}

export const changeNameReducer=(state=initialNameState,action)=>{
    switch(action.type){
        case actionTypes.CHANGE_NAME:
            return{
                ...state,
                name:action.payload
            }
        default:
            return state
    }
}