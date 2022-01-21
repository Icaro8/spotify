import React from "react";

import { FaStar } from "react-icons/fa";

import { CardButtons } from "./CardButtons";

import "./style.scss";

export function Card() {
  return (
    <div className="card">
      <div className="image">
        <img src="/assets/sertanejo.jpg" alt="Esquenta Sertanejo" />
      </div>
      <div className="ContentDescription">
        <div className="ContentTitle">
          <div>
            <strong>Playlist</strong>
          </div>
          <div className="absolute">
            <strong>patrocinado</strong>
          </div>
          <div>
            <h1>
              Sertanejo 2022 <FaStar />
              Mais...
            </h1>
          </div>
        </div>
        <CardButtons />
      </div>
    </div>
  );
}
