import React from "react";

import { IoMdAdd } from "react-icons/io";
import { BsHeartFill } from "react-icons/bs";
import { BiPodcast } from "react-icons/bi";

import "./styles.scss";

export function MediaPlayerNavigation() {
  return (
    <div className="containerContent">
      <div className="rowContent">
        <div className="addPlay">
          <IoMdAdd />
        </div>
        <div>
          <strong>Criar Playlist</strong>
        </div>
      </div>
      <div className="rowContent">
        <div className="liked">
          <BsHeartFill />
        </div>
        <div>
          <strong>Músicas Curtidas</strong>
        </div>
      </div>
      <div className="rowContent">
        <div className="podcast">
          <BiPodcast />
        </div>
        <div>
          <strong>Podcasts</strong>
        </div>
      </div>
    </div>
  );
}
