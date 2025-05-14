import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Userdetail from './assets/Components/Userdetail'
import AccountCreation from './assets/Components/AccountCreation'
import Address from './assets/Components/Address'

function App() {
  const [count, setCount] = useState(0)
  const NextPage =()=>{
 console.log('hello')
 console.log(count)
 if(count<2){setCount(prev=> prev+1)}
  } 
  const lastpage =()=>{
 console.log('hello')
 console.log(count)
 if(count>0){setCount(prev=> prev-1)}
  } 
  return (
    <>
   {count===0 &&  <Userdetail NextPage={NextPage}/>}
      {count===1 &&  <Address NextPage={NextPage} lastpage={lastpage} />}
     {count===2 &&   <AccountCreation NextPage={NextPage} lastpage={lastpage} />}
    </>
  )
}

export default App
