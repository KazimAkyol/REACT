import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";
import Main from "../pages/Main";
import About from "../pages/About";
import NewProduct from "../pages/NewProduct";
import ProductList from "../pages/ProductList";
import UpdateProduct from "../pages/UpdateProduct";

const AppRouter = () => {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/newProduct" element={<NewProduct />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
