import React from "react";
import { GiMicrophone } from "react-icons/gi";
import { RiPlayList2Fill } from "react-icons/ri";
import { BiDesktop } from "react-icons/bi";
import { AiFillSound } from "react-icons/ai";
import "./style.scss";

export const MusicSettings = () => {
  return (
    <div className="flexMusic">
      <div>
        <GiMicrophone />
      </div>
      <div>
        <RiPlayList2Fill />
      </div>
      <div>
        <BiDesktop />
      </div>
      <div className="contentAudio">
        <AiFillSound />
        <div className="progressive"></div>
      </div>
    </div>
  );
};
