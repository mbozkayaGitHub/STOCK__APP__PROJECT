import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { modalStyle } from "../../styles/globalStyles";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button } from "@mui/material";
import useStockCall from "../../hooks/useStockCall";
import { useSelector } from "react-redux";

export default function ProductModal({ open, handleClose, info, setInfo }) {
  // const [info,setInfo] = useState({
  //     name:"",
  //     phone:"",
  //     address:"",
  //     image:"",
  // })

  const { postStockData } = useStockCall();
  const { categories } = useSelector((state) => state.stock);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    postStockData("products", info);

    handleClose();
    setInfo({ name: "", phone: "", address: "", image: "" });
  };
  console.log(info);
  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          handleClose();
          setInfo({ name: "", phone: "", address: "", image: "" });
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component="form"
            onSubmit={handleSubmit}
          >
            <FormControl fullWidth>
              <InputLabel id="category">Categories</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Category"
                onChange={handleChange}
              >
                {categories.map((item) => (
                  <MenuItem key={item.id} value={10}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
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
              value={info?.image}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained">
              Submit Firm{" "}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
