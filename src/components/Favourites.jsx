import React from 'react'
import { useSelector } from 'react-redux';
import ContactDetail from './ContactDetail';
import { addToFavourite } from '../reducers/favourite';

 function Favourites() {
  const favourites = useSelector(state => state.favourite);
  console.log(favourites);
  return (
    <div>
      {
      favourites.cartItems.map((contact,index)=>
       {console.log('he'); 
        return contact.isFav==1 &&(<ContactDetail {... {...contact,index:index}}/>)} 
      )}
    </div>
  )
}
export default Favourites;
