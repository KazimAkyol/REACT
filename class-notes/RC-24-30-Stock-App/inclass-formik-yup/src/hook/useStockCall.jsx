import React from "react";

const useStockCall = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const getStockData = async (url) => {
    dispatch(fetchStart());

    try {
      const { data } = await axios.post(`${BASE_URL}${url}`);
      console.log("register icinde", data);
      dispatch(firmSuccess(data));
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return <div>useStockCall</div>;
};

export default useStockCall;
