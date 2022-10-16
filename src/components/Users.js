import React from 'react'
import {connect} from 'react-redux'
const Users = (props) => {
    console.log(props.users)
  
   
  return (
    <div>
    <h2>User List</h2>
    <button onClick={props.showUsers}>Show Data</button>
   
        <table width="600px" cellSpacing="5px">
            <thead>
                <tr><th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                </tr>
            </thead>
        </table>
   
    </div>
  )
}

const mapStateToProps=(state)=>{
    console.log()
    return {
        users:state.users
    }
}
// const mapStateToDispatch=(dispatch)=>{
//     return{
//         showUsers:()=>dispatch({type:"SHOW_USER"})
//     }
// }
export default connect(mapStateToProps)(Users)
