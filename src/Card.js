import React from "react";
import "./Card.css";

const Card = ({caption, src, totalNum, currNum}) => {
  return (
    <div className="Card">
      <span className="Card-title">{caption}</span>
      <img className="Card-image" src={src} alt={caption} />
      <span className="Card-small">
        Image {currNum} of {totalNum}.
      </span>
    </div>
  );
}

export default Card;
