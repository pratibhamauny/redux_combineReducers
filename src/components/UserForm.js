import React,{useState} from 'react'
import {connect} from 'react-redux'

const UserForm = (props) => {
    // const[name,setName]=useState('');
    // const [contact,setContact]=useState('');
    // const [email,setEmail]=useState('')
    const [user,setUser]=useState({
        name:'',
        email:'',
        contact:''
    })
    const changeHandler=(e)=>{
        //console.log(e.target.value)
        const name=e.target.name;
        const value=e.target.value
        setUser({...user,[name]:value})
    }
    const submitHandler=(e)=>{
        console.log("submit handler ",props)
        e.preventDefault()
       alert("User data saved successfully.")
       props.saveUser(user)
        setUser({
            name:'',
            email:'',
            contact:''
        })
    }
    console.log("user form ",user)
  return (
    <div>
        <h1>User Details...</h1>
        <form onSubmit={submitHandler}>
            <p>
                <label>Enter Name...</label>
                <input type="text" name="name" value={user.name} onChange={changeHandler}/>
            </p>
            <p>
                <label>Enter Email...</label>
                <input type="text" name="email" value={user.email} onChange={changeHandler}/>
            </p>
            <p>
                <label>Enter Contact...</label>
                <input type="text" name="contact" value={user.contact} onChange={changeHandler}/>
            </p>
            <p>
                <button>Save</button>
            </p>
        </form>
    </div>
  )
}
// const mapPropsToState=(state)=>{
//     return{
//         users:state.users
//     }
// }

const mapStateToDispatch=(dispatch)=>{
    return{
        saveUser:(data)=>dispatch({type:"SAVE_USER",payload:data})
    }
}
export default connect(null,mapStateToDispatch)(UserForm)