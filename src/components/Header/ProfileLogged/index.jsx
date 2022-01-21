import React from "react";

import { AiFillCaretDown } from "react-icons/ai";

import "./style.scss";
export function ProfileLogged() {
  return (
    <div className="flexRow">
      <div className="image">
        <img src="/assets/sia.jpg" alt="Sia" />
      </div>
      <div>
        <strong>Sia</strong>
      </div>
      <div className="svgHeader">
        <AiFillCaretDown />
      </div>
    </div>
  );
}
