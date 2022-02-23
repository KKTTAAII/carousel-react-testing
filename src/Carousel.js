import React, { useState } from "react";
import "./Carousel.css";
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import Card from "./Card";

const Carousel = ({ cardData, title }) => {
  const [cardIdx, setCardIdx] = useState(0);
  const card = cardData[cardIdx];
  const total = cardData.length;
  const goForward = () => setCardIdx(cardIdx + 1);
  const goBackward = () => setCardIdx(cardIdx - 1);
  const leftClass = `fas fa-chevron-circle-left fa-2x`
  const rightClass = `fas fa-chevron-circle-right fa-2x`
  const {caption, src} = card;

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <i
          className={
            cardIdx === 0
              ? leftClass + " hide"
              : leftClass
          }
          onClick={goBackward}
          data-testid="left-arrow"
        />
        <Card
          caption={caption}
          src={src}
          currNum={cardIdx + 1}
          totalNum={total}
        />
        <i
          className={
            cardIdx === total - 1
              ? rightClass + " hide"
              : rightClass
          }
          onClick={goForward}
          data-testid="right-arrow"
        />
      </div>
    </div>
  );
};

Carousel.defaultProps = {
  cardData: [
    {
      src: image1,
      caption: "Photo by Richard Pasquarella on Unsplash",
    },
    {
      src: image2,
      caption: "Photo by Pratik Patel on Unsplash",
    },
    {
      src: image3,
      caption: "Photo by Josh Post on Unsplash",
    },
  ],
  title: "Shells from far away beaches.",
};

export default Carousel;
