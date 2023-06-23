import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Rating } from '@mui/material';
import AddFavourite from './AddFavourite';



function stringToColor( string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}
function ContactDetail(user) {
   
  return (
    <div style={{display:"flex",position:"relative",marginRight: "20px",marginTop:"15px"}}>
      {/* key={user.index} */}
      <Avatar {...stringAvatar(`${user.firstname} ${user.lastname},${user.number}`)} />
      <div className="user-details" style={{paddingLeft:"20px"}}>
        {user.firstname} {user.lastname} 
        <div>{user.number}</div>
        </div>
       <AddFavourite  isFav={user.isFav} userId={user.index} />
    </div>
  )
}
export default ContactDetail;
