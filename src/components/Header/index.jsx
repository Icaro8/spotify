import React from "react";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";

import "./style.scss";

import { ProfileLogged } from "./ProfileLogged";

export const Header = () => {
  return (
    <header className="Header">
      <div className="svg">
        <AiFillLeftCircle />
        <AiFillRightCircle />
      </div>
      <div className="rowInfos">
        <div className="backgroundBlack">
          <strong>Faça Upgrade</strong>
        </div>
        <div>
          <ProfileLogged />
        </div>
      </div>
    </header>
  );
};
