import React, { useState } from 'react'
import UpdateComponent from './UpdateComponent';
import { useCallback } from 'react';

 function UseMemoEx() {
  const[number,setNumber]=useState(0);
  const[count,setCount]=useState(0);
  const incrementCount=useCallback(()=>{
    setCount(count+1);
  },[count])
  console.log("parent compoent");

  return (
    <div>
      useMemo
      <UpdateComponent incrementCount={incrementCount}/>
      <button  onClick={()=>setNumber(number+1)}>click me</button>
    </div>
  )
}
export default UseMemoEx;
