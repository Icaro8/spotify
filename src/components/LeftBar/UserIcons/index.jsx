import React from "react";
import { AiOutlineUser } from "react-icons/ai";

import "./style.scss";

export const UserICons = () => {
  return (
    <div className="contianerUserICons">
      <div className="svgContainer">
        <AiOutlineUser />
      </div>
      <div className="columns">
        <div className="maxwidth"></div>
        <div className="minwidth"></div>
        <div className="minwidth"></div>
      </div>
    </div>
  );
};
