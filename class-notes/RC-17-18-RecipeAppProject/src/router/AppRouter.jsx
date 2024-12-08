import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import About from "../pages/about/About";
import Home from "../pages/home/Home";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/github" element={<GITHUB />} /> */}
        <Route path="/logout" element={<Login />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
