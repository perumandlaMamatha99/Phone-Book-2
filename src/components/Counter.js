import { Button } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

 function Counter() {
  const dispatch =useDispatch();
  const countervalue =useSelector(state=>state.counter);
  console.log(countervalue);

  const handleIncre=()=>{
    dispatch({type:"INCREMENT"})
  }
  const handleClick=()=>{
    dispatch({type:"DECREMENT"})
    
  }
  return (
    <div>
      <h1>{countervalue}</h1>
      <Button onClick={handleIncre}>Increment</Button>
      <Button onClick={handleClick}>decrement</Button>
      
    </div>
  )
}
export default Counter;
