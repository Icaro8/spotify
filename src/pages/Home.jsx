import React, { useState, useEffect } from "react";

import { NavBar } from "../components/NavBar";
import { MediaPlayerNavigation } from "../components/MediaPlayerNavigation";
import { ScrollNavigation } from "../components/ScrollNavigation";
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { CardMusic } from "../components/CardMusc";
import { Player } from "../components/Player";

import "./Styles/Home.scss";
import { CardCast } from "../components/CardCast";
import { LeftBar } from "../components/LeftBar";

export function Home() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    function Message() {
      if (new Date().getHours() > 12) setMessage("Boa Tarde");
      if (new Date().getHours() > 18) setMessage("Boa Noite");
      else setMessage("Bom dia");
    }
    Message();
  }, [message]);

  return (
    <div className="ContainerPage">
      <div className="column">
        <div className="separator">
          <NavBar />
          <MediaPlayerNavigation />
        </div>

        <div className="scroll">
          <ScrollNavigation />
        </div>
      </div>
      <div className="contentCenter">
        <div className="header">
          <Header />
        </div>
        <div className="scrollNav">
          <div className="cardContent">
            <Card />
          </div>

          <div className="cardsPlaylist">
            <div>
              <h2>{message}</h2>
            </div>
            <div className="cardsSection">
              <CardMusic isLiked={true} title="Músicas Curtidas" />
              <CardMusic
                isLiked={false}
                title="Rock"
                image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fdaily.plaympe.com%2Fwp-content%2Fuploads%2F2015%2F01%2F2581941_20150121130135_1894748569.jpg&f=1&nofb=1"
              />
              <CardMusic
                isLiked={false}
                title="Uma nova História"
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FJPH4ez9hVgw%2Fmaxresdefault.jpg&f=1&nofb=1"
              />
              <CardMusic
                isLiked={false}
                title="Compilado"
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FJ5u5JcZXLv0%2Fmaxresdefault.jpg&f=1&nofb=1"
              />
            </div>
            <div className="rowProgams">
              <h3>Seus progamas</h3> <a href="/">ver tudo</a>
            </div>
            <div className="sectionCast">
              <CardCast
                title="Podcast React"
                text="React is great lib?"
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmochikit.com%2Fwp-content%2Fuploads%2F2019%2F01%2Freact-js.jpg&f=1&nofb=1"
              />
              <CardCast
                title="SONCast"
                text="School of net"
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fab%2F3b%2Fcb%2Fab3bcb13ae4b5cd4d668afcdc9fc20b8.jpg&f=1&nofb=1"
              />
              <CardCast
                title="Café debug"
                text="Café debug seu podcast de tecnologia"
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis5-ssl.mzstatic.com%2Fimage%2Fthumb%2FPodcasts124%2Fv4%2F88%2F0a%2F39%2F880a39ee-eadd-29ff-8d44-0c617cec2384%2Fmza_12639952742933520437.jpg%2F1200x1200bb.jpg&f=1&nofb=1"
              />
            </div>
            <div className="rowProgams">
              <h3>Suas Playlists</h3> <a href="/">ver tudo</a>
            </div>
            <div className="sectionCast">
              <CardCast
                isPlay={true}
                title="SUMMER"
                text="de Sia"
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FclPXvjkGRng%2Fmaxresdefault.jpg&f=1&nofb=1"
              />
              <CardCast
                isPlay={true}
                title="This is AC/DC"
                text="de Sia"
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkickassforever.com%2Fwp-content%2Fuploads%2F2020%2F10%2Facdc--900x800.jpg&f=1&nofb=1"
              />
              <CardCast
                isPlay={true}
                title="This is Linkin Park"
                text="de Sia"
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.musicastorrent.com%2Fwp-content%2Fuploads%2F2020%2F02%2Fcapa-42.jpg&f=1&nofb=1"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="leftBar">
        <LeftBar />
      </div>
      <div className="fixed">
        <Player />
      </div>
    </div>
  );
}
