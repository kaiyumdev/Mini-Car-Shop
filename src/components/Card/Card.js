import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./Card.css";

const Card = ({ card, handleReset, handleRemoveItem }) => {
  const [random, setRandom] = useState([]);
  const handleSelectRandomItem = () => {
    let mainProduct = card[Math.floor(Math.random() * card.length)];
    setRandom(mainProduct);
  };
  return (
    <div className="card-container">
      <div className="card-text">
        <h1>Added Card Items:{card.length}</h1>
        {card.map((item) => {
          return (
            <div key={item.id} className="card-details">
              {item.name}
              <button onClick={() => handleRemoveItem(item)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          );
        })}
      </div>
      <div className="card-name">
        <h3>{random.name}</h3>
        <button onClick={() => handleSelectRandomItem()}>Random Select</button>
        <br />
        <button onClick={() => handleReset(card)}>Reset</button>
      </div>
    </div>
  );
};

export default Card;
