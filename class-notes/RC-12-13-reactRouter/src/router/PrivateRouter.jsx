import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  return JSON.parse(localStorage.getItem("email")) === "ipek" &&
    JSON.parse(localStorage.getItem("pass")) === "1234" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRouter;
