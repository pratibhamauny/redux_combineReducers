import React,{useState} from 'react'
import {connect} from 'react-redux'
 const ChangeName = (props) => {
    const [username,setUserName]=useState('');
  return (
    <div>
        <h1>Welcome {props.name}</h1>
        <input type="text" onChange={(e)=>setUserName(e.target.value)} value={username} placeholder="Enter name..."/>
        <button onClick={()=>props.changeName(username)}>Change Name</button>
    </div>
  )
}

const mapStateToProps=(state)=>{
    return{
        name:state.changeName.name
    }
}

const mapStateToDispatch=(dispatch)=>{
    return{
        changeName:(name)=>dispatch({type:"CHANGE_NAME",payload:name})
    }
}
export default connect(mapStateToProps,mapStateToDispatch)(ChangeName)