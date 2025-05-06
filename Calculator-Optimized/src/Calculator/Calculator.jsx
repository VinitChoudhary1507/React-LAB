import React, { useReducer } from 'react'
const initialState = {
    display: '',
};
function reducer(state, action) {
    switch(action.type){
        case "RESULT":
            try {
              
                return { ...state, display: eval(state.display).toString() };
            } catch {
                return { ...state, display: 'Error' };
            }
        
        case "CLEAR":
            return { ...state, display: '' };
        
        case "APPEND":
            console.log( { ...state, display: state.display + action.payload })
            return { ...state, display: state.display + action.payload };

           default:
           return console.log("whow")
      }    
    }
    
    const Calculator = () => {
    // const action =[RESULT, CLEAR ,APPEND]
    const Value = ['1', '2', 'X', '3', '4', '5', '6', '7', '8', '9', '0', '/', '*', '-', '=']
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleClickValue=(val)=>{
          if(val==="="){
            dispatch({type:"RESULT"})
          }
          else if(val === 'X'){
            dispatch({type:"CLEAR"})
          }
          else{
            dispatch({type:"APPEND",payload:val})
          }
    }
    return (
<>
    <div className='container mt-5 pt-5 '>
    <div className="mb-3">
                <input type="text" className="form-control w-50" value={state.display} readOnly />
            </div>
        <div className="row w-50 g-2">
            
            {Value.map((val, i) => (
                <div onClick={()=>{handleClickValue(val)} } className="col-4" key={i}>
                    <button  className={`btn ${isNaN(val) ? (val === '=' ? 'btn-success' : 'btn-warning') : 'btn-secondary'} w-100 small-btn`}  >{val}</button>
                </div>
            ))}
        </div>
     </div>
</>
    )
}

export default Calculator;