import { Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Firms = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const getFirms = async () => {
    const BASE_URL = "https://12256.fullstack.clarusway.com/";
    const { data } = await axios(`${BASE_URL}stock/firms/`, {
      headers: { Authorization: `Token ${token}` },
    });

    dispatch(getSuccess());
  };

  useEffect(() => {
    getFirms();
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Firm
      </Typography>
      <Button variant="contained"> New Firm</Button>
    </div>
  );
};

export default Firms;
