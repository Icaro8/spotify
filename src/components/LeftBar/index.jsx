import React from "react";

import { AiOutlineUserAdd } from "react-icons/ai";

import { UserICons } from "./UserIcons";
import { Button } from "./Button";
import "./style.scss";

export function LeftBar() {
  return (
    <div className="containerLeftBar">
      <div className="actv">
        <h3>Atividades de amigos</h3>
        <AiOutlineUserAdd className="svgIco" />
      </div>
      <div className="paragraphy">
        <p>
          Deixe seus amigos e seguidores no Spotify saberem o que você está
          ouvindo.
        </p>
      </div>
      <div className="columnUser">
        <UserICons />
        <UserICons />
        <UserICons />
      </div>
      <div className="paragraphy">
        <p>
          Vá para "Preferencias" > "Redes socias" e ative "Mostrar no Spotify o
          que eu escuto". Dá pra alterar essa configuração a qualquer momento.
        </p>
      </div>
      <Button />
    </div>
  );
}
