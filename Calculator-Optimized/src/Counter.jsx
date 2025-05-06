import React, { useReducer } from 'react'
 function reducer(state,action){
 switch(action.type){
    case 'increment':
    return{count:state.count+1};
    case 'decrement':
    return{count:state.count-1};
    default:
        return state;
 }
 }
const Counter = () => {
    const [state,dispatch]=useReducer(reducer,{count:0});
  return (
    <div>
           <h2>Count: {state.count}</h2>
        <button className='btn btn-primary ml-4 pl-2' onClick={()=>dispatch({type:'increment'})}>Increment</button>
        <button className='btn btn-primary' onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
    </div>
  )
}

export default Counter