import React from "react";
import "./Product.css";
const Product = ({handleAddItem, product }) => {
  // console.log(product);
  const { image, name, price } = product;
  return (
    <div>
      <div className="product-container">
        <div className="product-item">
          <img src={image} alt="" />
          <div className="product-details">
            <h2>{name}</h2>
            <p>{price}</p>
            <button onClick={() => handleAddItem(product)}>Add Item</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
