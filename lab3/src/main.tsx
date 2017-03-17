import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./app/app";
import "../assets/css/global.css";
export interface HelloProps { compiler: string; framework: string; }

ReactDOM.render(
  <App />,
  document.getElementById("root")
);