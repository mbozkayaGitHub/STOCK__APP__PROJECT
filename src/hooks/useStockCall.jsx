import React from "react";
import { fetchFail, getSuccess, fetchStart } from "../features/stockSlice";
import axios from "axios";
import { useDispatch } from "react-redux";

const useStockCall = () => {
  const dispatch = useDispatch();

  const getStockData = async (url) => {
    const BASE_URL = "https://12256.fullstack.clarusway.com/";

    try {
      useDispatch(fetchStart());
      const { data } = await axios(`${BASE_URL}stock/${url}/`, {
        headers: { Authorization: `Token ${token}` },
      });

      dispatch(getSuccess({ data, url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail);
    }
  };

  return { getStockData };
};

export default useStockCall;
