import React from "react";
import { AiOutlineEllipsis } from "react-icons/ai";

import "./style.scss";

export const CardButtons = () => {
  return (
    <div className="contentrow">
      <button className="play">Play</button>
      <button className="follow">Seguir</button>
      <AiOutlineEllipsis />
    </div>
  );
};
