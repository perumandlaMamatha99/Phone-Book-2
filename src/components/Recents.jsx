import React from 'react';
import { useSelector } from 'react-redux';
import ContactDetail from './ContactDetail';

function Recents() {
  const cart = useSelector(state => state.favourite);
  const data=[...cart.cartItems];
  console.log(data);

  data.sort((a,b)=>{
    if(a.recent > b.recent){
      return -1;
    }
    if(a.recent < b.recent){
      return 1
    }
    return 0;
  })
  console.log(cart);
  return (
    <div>
      {data.map((contact, index) => {
        return index < 5 && <ContactDetail {...{ ...contact, index: index }} key={index} />
      }
      )}
    </div>
  )
}
export default Recents;
