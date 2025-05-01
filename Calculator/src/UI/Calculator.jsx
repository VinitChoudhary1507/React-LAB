import React, { useState } from 'react'

const Calculator = () => {
  
  const Value = ['1', '2','X', '3', '4', '5', '6', '7', '8', '9',  '0', '/', '*', '-', '=']

  const [number1, setNumber1] = useState("")
  const [number2, setNumber2] = useState("")
  const [sign, setSign] = useState("")
  const [result, setResult] = useState("")
  const handleClickValue = (value) => {
    
    console.log('Button clicked:', value);
    if(!isNaN(value)){
      if(sign===""){
        setNumber1((prev) => prev + value);
      } else{
        setNumber2((prev) => prev + value);
      } 
     } 
     else if (value === '=') {
        // perform calculation
        const num1 = parseFloat(number1);
        const num2 = parseFloat(number2);
        let res = "";
  
        switch (sign) {
          case '+': res = num1 + num2; break;
          case '-': res = num1 - num2; break;
          case '*': res = num1 * num2; break;
          case '/': res = num2 !== 0 ? num1 / num2 : 'Error'; break;
          default: res = 'Invalid';
        }
  
        setResult(res);
        setNumber1("")
        setNumber1(res);
        setNumber2("");
      } else {
        // operator input
        setSign(value);
      }  if (value === 'X') {
        setResult('')
      }
  
      console.log("Num1:", number1);
      console.log("Sign:", sign);
      console.log("Num2:", number2);
      console.log("Result:", result);
    };
  return (
    <>
      <div className='container mt-5 pt-5 '>
        <div className="row w-50 g-2">
          <input className='form-control ' type="text" value={`${number1 }    ${sign}   ${number2}   ${result !==""? "= " + result : ""}`} readOnly/>
          {Value.map((val, i) => (
            <div className="col-4" key={i}>
              <button className={`btn ${isNaN(val) ? (val === '=' ? 'btn-success' : 'btn-warning') : 'btn-secondary'} w-100 small-btn`} onClick={() => { handleClickValue(val) }} >{val}</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Calculator