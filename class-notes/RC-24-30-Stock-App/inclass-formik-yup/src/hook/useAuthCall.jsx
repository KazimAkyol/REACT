import React from "react";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart } from "../features/authSlice";

const useAuthCall = () => {
  // Custom hook yazma kuralları
  //? 1-use Kelimesi ile başlar
  //? 2- return de { fonksiyonlar }, değişkense [ bilgiler ] gönderilmeli
  //? 3-Çağrılacağı noktada
  //? const {register}=useAuthCall()

  const register = async (userInfo) => {
    const dispatch = useDispatch();

    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        "https://stock-api-js.fullstack.clarusway.com/users/",
        userInfo
      );
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return {register}
};

export default useAuthCall;
