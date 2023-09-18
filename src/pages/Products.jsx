import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import { flex } from "../styles/globalStyles";
import FirmModal from "../components/modals/FirmModal";

const Products = () => {
  const { getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getStockData("firms");
  }, []);

  console.log(firms);
  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Firm
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        {" "}
        New Firm
      </Button>

      <FirmModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <Grid container sx={flex}>
        {firms?.map((firm) => (
          <Grid item key={firm.id}>
            <FirmCard
              firm={firm}
              setOpen={setOpen}
              info={info}
              setInfo={setInfo}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
