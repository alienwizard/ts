import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./app/app";
export interface HelloProps { compiler: string; framework: string; }

ReactDOM.render(
  <App compiler="TypeScript" framework="React" />,
  document.getElementById("root")
);