import React from 'react'
import {connect} from 'react-redux'
const Users = (props) => {
   // console.log(props.users.users.length)
   const usersData=props.users.users
   const usersList=usersData.map(user=>{
    return <tr><td>{user.name}</td>
    <td>{user.email}</td>
    <td>{user.contact}</td></tr>
   })
  return (
   <div>
    {props.users.users.length>0?
    <table width="600px" cellPadding="5px" cellSpacing="3px" border="1px" align="center">
        <thead>
            <tr><th>Name</th>
            <th>Email</th>
            <th>Contact No.</th></tr>
            {usersList}
        </thead>
    </table>:<p>No user Data</p>}
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
