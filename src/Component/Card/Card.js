import React from "react";
import "./card.css";

const Card = ({ cardData }) => {
  return (
    <div className="card-info">
      <div className="icon-container">
        <span className="card-outter">
          <img className="card-img" src={cardData.cardIcon} />
        </span>
      </div>
      <div className="card-container">
        <div className="card-heder">{cardData.cardHeader}</div>
        <div className="card-description">{cardData.cardDescription}</div>
      </div>
    </div>
  );
};

export default Card;
