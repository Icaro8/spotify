import React from "react";

import "./style.scss";

export function CardCast({ title, image, text, isPlay }) {
  return (
    <div className="cardCast">
      <div>
        <div className={isPlay ? "relative" : ""}>
          <img src={image} alt={title} />
        </div>
        <div className="cardTitle">
          <h3>{title}</h3>
        </div>
        <div className="text">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
