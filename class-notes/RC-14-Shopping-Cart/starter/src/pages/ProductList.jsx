import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";

const ProductList = () => {
  const [update, setUpdate] = useState([]);

  const url = "https://674dbe56635bad45618c9df8.mockapi.io/product";

  const productUpdate = async () => {
    const res = await axios.get(url);

    console.log(res.data);

    setUpdate(res);
  };

  useEffect(() => {
    productUpdate();
  }, []);

  return (
    <div className="container mt-3">
      <div className={"bg-light d-sm-block d-md-flex"}>
        <p className="text-center text-danger w-100">Loading...</p>

        <>
          <article id="product-panel" className="col-md-6">
            <ProductCard />
          </article>
          <article className="col-md-4 m-3">
            <CardTotal />
          </article>
        </>

        <p className="text-center text-danger w-100">No products data...</p>
      </div>
    </div>
  );
};

export default ProductList;
