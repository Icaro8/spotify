import React from "react";
import {
  IoIosShuffle,
  IoIosSkipBackward,
  IoMdPlay,
  IoIosSkipForward,
} from "react-icons/io";
import { MdOutlineLoop } from "react-icons/md";

import "./style.scss";

export function MediaController() {
  return (
    <div className="mediaControler">
      <div>
        <IoIosShuffle />
      </div>
      <div>
        <IoIosSkipBackward />
      </div>
      <div className="play">
        <IoMdPlay />
      </div>
      <div>
        <IoIosSkipForward />
      </div>
      <div>
        <MdOutlineLoop />
      </div>
    </div>
  );
}
