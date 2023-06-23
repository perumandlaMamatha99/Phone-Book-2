import React from 'react'
import ContactDetail from './ContactDetail';
import { useSelector } from 'react-redux';

function Contacts() {
  const cart = useSelector(state => state.favourite);
  console.log(cart);
  return (
    <div>
      {cart.cartItems.map((contact,index)=>(
        <div>
           <ContactDetail {...{...contact,index:index}} key={index}/>
        </div>
      ))}
    </div>
  )
}
export default Contacts;
