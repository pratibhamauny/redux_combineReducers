import { actionTypes } from "../constants/action-types"


export const changeName=(name)=>{
    return{
        type:actionTypes.CHANGE_NAME,
        payload:name
    }
}