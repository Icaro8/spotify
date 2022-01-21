import React from "react";

import { RiHome7Fill } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";

import "./styles.scss";

export function NavBarHome() {
  return (
    <div className="container">
      <div className="row">
        <RiHome7Fill />
        <strong>Início</strong>
      </div>
      <div className="row">
        <AiOutlineSearch />
        <strong>Buscar</strong>
      </div>
      <div className="row">
        <BiLibrary />
        <strong>Sua Bibliotéca</strong>
      </div>
    </div>
  );
}
//AiOutlineSearch  RiHome7Fill  GiBookshelf
