import React from 'react'

const useStockCall = () => {

    const getFirms = async () => {
        const BASE_URL = "https://12256.fullstack.clarusway.com/";
    
        const url = "firms";
    
        try {
          dispatch(fetchStart());
          const { data } = await axios(`${BASE_URL}stock/firms/`, {
            headers: { Authorization: `Token ${token}` },
          });
    
          dispatch(getSuccess({ data, url }));
        } catch (error) {
          console.log(error);
          dispatch(fetchFail);
        }
      };


  return (
    <div>useStockCall</div>
  )
}

export default useStockCall