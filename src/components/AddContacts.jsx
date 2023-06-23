import React, { useState } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { addToContacts } from '../reducers/favourite';
import { useDispatch, useSelector } from 'react-redux';
export default function AddContacts() {
    const dispatch =useDispatch();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const[fname,setfName]=useState("");
    const[lname,setlName]=useState("");
    const[number,setNumber]=useState("");
    const addContact=()=>{
        console.log(fname);
        const payload={
            firstname:fname,
            lastname:lname,
            number:number,
            isFav:0,
           recent: Date.now()
        }
       dispatch(addToContacts(payload))
        handleClose();
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return (
        <div>
            <AddCircleOutlineIcon
             onClick={handleOpen}
                style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0
                }} />
            <Modal
                open={open}
                
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CloseIcon onClick={handleClose}  style={{float:"right"}}/>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                       Add contact details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <TextField
                    id="outlined"
                    label="FirstName"
                    vaule={fname}
                    onChange={(e)=>setfName(e.target.value)}
                    /><br />
                    <TextField
                    id="outlined"
                    label="LastName"
                    vaule={lname}
                    onChange={(e)=>setlName(e.target.value)}
                    /><br />
                    <TextField
                    id="outlined"
                    label="Phone Number"
                    vaule={number}
                    onChange={(e)=>setNumber(e.target.value)}
                    />
                    <Button onClick={addContact} >add</Button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}
