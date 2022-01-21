import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import { RoutesApp } from "./routes";

import "./styles/GlobalStyles.scss";

ReactDOM.render(
  <BrowserRouter>
    <RoutesApp />
  </BrowserRouter>,
  document.getElementById("root")
);
