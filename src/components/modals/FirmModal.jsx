import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { modalStyle } from '../../styles/globalStyles';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Button } from "@mui/material"


export default function FirmModal({open,handleClose}) {

    const [info,setInfo] = useState({
        name:"",
        phone:"",
        address:"",
        image:"",
    })
const handleChange = (e) => {
    const {name,value} = e.target
    setInfo({...info, [name]:value})

}
const handleSubmit = () => {
       
}
console.log(info);
  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Firm  Name"
          name="name"
          id="name"
          type="text"
          required
          variant="outlined"
         value={info?.name}
        onChange={handleChange}
         
        /> 
        <TextField
          label="Phone"
          name="phone"
          id="phone"
          required
          type="tel"
          variant="outlined"
         value={info?.phone}
        onChange={handleChange}
         
        /> 
        <TextField
          label="Address"
          name="address"
          id="address"
          required
          type="text"
          variant="outlined"
         value={info?.address}
        onChange={handleChange}
         
        /> 
        <TextField
          label="Image"
          name="image"
          id="image"
          required
          type="url"
          variant="outlined"
         value={info?.addreimagess}
        onChange={handleChange}
         
        /> 
        <Button type="submit" variant="contained"
        onSubmit={handleSubmit}
        >Submit Firm </Button>
        </Box>
        </Box>
      </Modal>
    </div>
  );
}