import React from "react";

import { AiOutlineEllipsis } from "react-icons/ai";

import { NavBarHome } from "./Navigation";

import "./styles.scss";

export const NavBar = () => {
  return (
    <div className="container">
      <nav className="navigation">
        <div className="container-content">
          <AiOutlineEllipsis />
        </div>
        <div>
          <NavBarHome />
        </div>
      </nav>
    </div>
  );
};
