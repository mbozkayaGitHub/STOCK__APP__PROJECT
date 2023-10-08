import { Grid } from "@mui/material";
import React from "react";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import { amber, deepPurple, pink } from "@mui/material/colors";

const KpiCards = () => {
  const data = [
    { id: 1, title: "sales", 
    value: "$40000", icon: <MonetizationOnIcon />,
    olor:deepPurple[600],
    bgColor:deepPurple[100] },
    { id: 2, title: "profit", 
    value: "$30000", icon: <ShoppingCartIcon />,
    olor:pink[600],
    bgColor:pink[100] },
    { id: 3, title: "purchases", 
    value: "$10000", icon: <PaymentsIcon />,
    olor:amber[600],
    bgColor:amber[100] },
  ];

  return (
    <Grid container>
      {data.map()}
      <Grid item> </Grid>
    </Grid>
  );
};

export default KpiCards;
