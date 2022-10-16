import { actionTypes } from "../constants/action-types";

const initialUserState={
    users:[]
}
export const usersReducer=(state=initialUserState,action)=>{
    console.log(state)
    console.log(action.payload)
    switch(action.type){
        case actionTypes.SAVE_USER:
            return{
                ...state,
                users:[...state.users,action.payload]
            }
        // case actionTypes.SHOW_USER:
        //     return{
        //         users:state.users
        //     }
        default:
            return state
    }
}