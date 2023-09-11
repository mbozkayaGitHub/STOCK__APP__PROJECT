import React from "react";

const useStockCall = () => {
  getStockData("sales");
  getStockData("firms");

  const getStockData = async (url) => {
    const BASE_URL = "https://12256.fullstack.clarusway.com/";

    try {
      dispatch(fetchStart());
      const { data } = await axios(`${BASE_URL}stock/${url}/`, {
        headers: { Authorization: `Token ${token}` },
      });

      dispatch(getSuccess({ data, url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail);
    }
  };

  return <div>useStockCall</div>;
};

export default useStockCall;
