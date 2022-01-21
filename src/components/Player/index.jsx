import React from "react";
import { InfoMusic } from "./InfoMusic";
import { MediaController } from "./MediaControllers";
import { ProgressiveBar } from "./ProgressiveBar";
import { MusicSettings } from "./MusicSettings";
import "./style.scss";

export function Player() {
  return (
    <div className="mediaControllers">
      <div>
        <InfoMusic
          artist="Rihanna"
          title="Diamonds"
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b273dcba7bcd884aeb0d2e19c7dc&f=1&nofb=1"
        />
      </div>
      <div className="columnPlayer">
        <MediaController />
        <ProgressiveBar />
      </div>
      <div>
        <MusicSettings />
      </div>
    </div>
  );
}
//title, artist,image
