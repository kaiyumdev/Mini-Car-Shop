import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // added card items
  const handleAddItem = (items) => {
    setCard([...card, items]);
  };

  // remove all selected card items
  const handleReset = (allItem) => {
    for (const item in allItem) {
      const reset = card.filter((myCard) => myCard.id === item.id);
      setCard(reset);
    }
  };
  // remove single one selected card item
  const handleRemoveItem = (selectedItem) => {
    const remove = card.filter(
      (singleProduct) => singleProduct.id !== selectedItem.id
    );
    setCard(remove);
  };

  return (
    <div className="main-container">
      <h1>My Mini Car Shop</h1>
      <div className="products-container">
        <div className="products">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddItem={handleAddItem}
            ></Product>
          ))}
        </div>
        <div className="card">
          <Card
            card={card}
            handleReset={handleReset}
            handleRemoveItem={handleRemoveItem}
          >
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Products;
