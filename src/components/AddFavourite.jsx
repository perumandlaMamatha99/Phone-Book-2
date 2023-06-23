import { Rating } from '@mui/material'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavourite } from '../reducers/favourite';

export default function AddFavourite(props) {
  const id=props.userId;
  console.log(id);
  const dispatch=useDispatch();
  const cart = useSelector(state => state.favourite);
  console.log(cart);
   const addtoFav=()=>{
    dispatch(addToFavourite(id))
   }
   
  return (
    <div>
      <Rating name="customized-10" defaultValue={props.isFav} max={1}  onChange={addtoFav} style={{position:"absolute",right:"0"}} />
    </div>
  )
}
