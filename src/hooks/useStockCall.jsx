import { fetchFail, getSuccess, fetchStart,getProCatBrandSuccess } from "../features/stockSlice";

import { useDispatch, useSelector } from "react-redux";
import useAxios from "./useAxios";

import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

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
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail);
    }
  };

  const deleteStockData = async (url, id) => {
    dispatch(fetchStart());

    try {
      await axiosWithToken.delete(`stock/${url}/${id}/`);
      toastSuccessNotify(`${url} successfully deleted`);
      getStockData(url);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail);
      toastErrorNotify(`${url} can not be deleted`);
    }
  };
  const postStockData = async (url, info) => {
    dispatch(fetchStart());

    try {
      await axiosWithToken.post(`stock/${url}/`, info);
      toastSuccessNotify(`${url} successfully posted`);
      getStockData(url);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail);
      toastErrorNotify(`${url} can not be posted`);
    }
  };
  const putStockData = async (url, info) => {
    dispatch(fetchStart());

    try {
      await axiosWithToken.put(`stock/${url}/${info.id}/`, info);
      toastSuccessNotify(`${url} successfully updated`);
      getStockData(url);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail);
      toastErrorNotify(`${url} can not be updated`);
    }
  };
  const getProCatBrand = async () => {
   dispatch(fetchStart())
   try {
      const [products, categories, brands] = await Promise.all([
        axiosWithToken.get("stock/products/"),
        axiosWithToken.get("stock/categories/"),
        axiosWithToken.get("stock/brands/"),
      ])
      dispatch(getProCatBrandSuccess([products?.data, categories?.data, brands?.data]));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail);
      toastErrorNotify(`Data can not be fetched`);
    }
  };

  return {
    getStockData,
    deleteStockData,
    postStockData,
    putStockData,
    getProCatBrand,
  };
};

export default useStockCall;
