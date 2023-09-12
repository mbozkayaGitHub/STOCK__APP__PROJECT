import { fetchFail, getSuccess, fetchStart } from "../features/stockSlice";

import { useDispatch, useSelector } from "react-redux";
import useAxios from "./useAxios";
import axios from "axios";

const useStockCall = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { axiosWithToken } = useAxios();

  const getStockData = async (url) => {
    // const BASE_URL = "https://12256.fullstack.clarusway.com/";

    dispatch(fetchStart());

    try {
      // const { data } = await axios(`${BASE_URL}stock/${url}/`, {
      //   headers: { Authorization: `Token ${token}` },
      // });
      const { data } = await axiosWithToken.get(`stock/${url}/`);
      dispatch(getSuccess({ data,url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail);
    }
  };

  const deleteStockData = async (url, id) => {
    const BASE_URL = "https://12256.fullstack.clarusway.com/";
    dispatch(fetchStart());

    try {
      await axios.delete(`${BASE_URL}stock/${url}/${id}/`, {
        headers: { Authorization: `Token ${token}` },
      });

      getStockData(url);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail);
    }
  };

  return { getStockData, deleteStockData };
};

export default useStockCall;
