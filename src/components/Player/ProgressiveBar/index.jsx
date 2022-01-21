import React from "react";

import "./style.scss";

export const ProgressiveBar = () => {
  return (
    <div className="flexProgressive">
      <div>
        <span>3:08</span>
      </div>
      <div className="progressiveBar"></div>
      <div>
        <span>3:45</span>
      </div>
    </div>
  );
};
