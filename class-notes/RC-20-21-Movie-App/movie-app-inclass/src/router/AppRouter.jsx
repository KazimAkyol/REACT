import React from "react";
import Register from "../pages/Register";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Main from "../pages/Main";
import Login from "../pages/Login";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default AppRouter;
