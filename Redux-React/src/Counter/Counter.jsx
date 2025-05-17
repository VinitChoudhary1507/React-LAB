import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './CounterSlice';
import { Read } from '../read';


const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
    
      <Read></Read>
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
    </>
  );
};

export default Counter;
