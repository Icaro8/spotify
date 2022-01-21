import React from "react";

import { AiFillHeart } from "react-icons/ai";

import "./style.scss";

export function CardMusic({ image, title, isNotification, isLiked }) {
  return (
    <div className="cardsInfo">
      <div className={isLiked ? "svgContent" : ""}>
        {isLiked ? <AiFillHeart /> : <img src={image} alt={title} />}
      </div>
      <div className={isNotification ? "notification" : ""}>
        <h3>{title}</h3>
      </div>
    </div>
  );
}
