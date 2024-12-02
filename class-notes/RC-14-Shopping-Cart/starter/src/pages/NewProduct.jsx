import React, { useState } from "react";

const NewProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");

  const gonderDatabase = (e) => {
    e.preventDefault();

    alert(
      `name:${name}  price: ${price} quantity: ${quantity} image:${image} `
    );

    setName("");
    setPrice("");
    setQuantity("");
    setImage("");
  };

  return (
    <div className="container text-center mt-4">
      <h1>New Product</h1>

      <form onSubmit={gonderDatabase}>
        <div className="mb-3">
          <label className="form-label" htmlFor="isim">
            Product Name <span className="text-danger">{name} </span>
          </label>
          <input
            className="form-control"
            id="isim"
            type="text"
            onInput={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            Product Price {price}
          </label>
          <input
            className="form-control"
            id="password"
            type="password"
            value={price}
            onChange={(p) => setPrice(p.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            Product Quantity {quantity}
          </label>
          <input
            className="form-control"
            id="password"
            type="password"
            value={quantity}
            onChange={(p) => setQuantity(p.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            Product Image {image}
          </label>
          <input
            className="form-control"
            id="password"
            type="password"
            value={image}
            onChange={(p) => setImage(p.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Save To New Product
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
