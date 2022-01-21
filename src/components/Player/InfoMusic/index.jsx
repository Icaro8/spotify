import React from "react";
import { AiFillHeart } from "react-icons/ai";

import "./style.scss";

export const InfoMusic = ({ title, artist, image }) => {
  return (
    <div className="contentContainer">
      <div>
        <img src={image} alt={title} />
      </div>
      <div className="description">
        <h4>{title}</h4>
        <p>{artist}</p>
      </div>
      <div>
        <AiFillHeart />
      </div>
    </div>
  );
};
