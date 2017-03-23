import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./app/app";
import "../assets/css/global.css";
export interface HelloProps { compiler: string; framework: string; }
import { AsyncComponentProvider } from 'react-async-component';

const Root = (
  <AsyncComponentProvider>
    <App />
  </AsyncComponentProvider>
)

ReactDOM.render(
  Root,
  document.getElementById("root")
);