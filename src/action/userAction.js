import { actionTypes } from "../constants/action-types"

export const saveUser=(data)=>{
    alert("save")
    console.log("action save---",data)
    return{
        type:actionTypes.SAVE_USER,
        payload:data
    }
}

// export const showUsers=()=>{
//    alert("Show data")
//     return{
//         type:actionTypes.SHOW_USER
//     }
// }