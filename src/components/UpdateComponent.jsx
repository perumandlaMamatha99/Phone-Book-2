import React,{memo} from 'react'

 function UpdateComponent(props) {
    console.log("Update component")
  return (
    <div>
      Update Compoent
      <button onClick={props.incrementCount}>child button</button>
    </div>
  )
}
export default memo(UpdateComponent);
