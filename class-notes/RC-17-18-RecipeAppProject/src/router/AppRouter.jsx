import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Login from "../pages/login/Login";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/home/Home";
import Details from "../pages/details/Details";
import NotFound from "../pages/errorPage/NotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />

        {/* şifre kontrolü için private router'i gönderme */}
        <Route path="/home" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
        </Route>

        <Route path="/details" element={<Details />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
