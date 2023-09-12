
import { fetchFail, getSuccess, fetchStart } from "../features/stockSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const useStockCall = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth)

  const getStockData = async (url) => {
    const BASE_URL = "https://12256.fullstack.clarusway.com/";
    dispatch(fetchStart())

    try {
    
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


