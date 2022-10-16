import React from 'react'
import {connect} from 'react-redux'

const Counter = (props) => {
  return (
    <div>
        <h1>Counter</h1>
        <p>Count:{props.count}</p>
        <button onClick={props.incrementCount}>INCREMENT</button>
        <button onClick={props.decrementCount}>DECREMENT</button>
        <button onClick={props.incrementByFive}>INCREMENT BY 5</button>
        <button onClick={props.decrementByFive}>DECREMENT BY 5</button>
    </div>
  )
}

const mapStateToProps=(state)=>{
    return {
        count:state.counter.count
    }
}

const mapStateToDispatch=(dispatch)=>{
    return{
        incrementCount:()=>dispatch({type:"INCREMENT"}),
        decrementCount:()=>dispatch({type:"DECREMENT"}),
        incrementByFive:()=>dispatch({type:"INCREMENT_BY_FIVE",payload:5}),
        decrementByFive:()=>dispatch({type:"DECREMENT_BY_FIVE",payload:5})
    }
}
export default connect(mapStateToProps,mapStateToDispatch)(Counter)