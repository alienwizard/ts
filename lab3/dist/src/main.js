"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const app_1 = require("./app/app");
require("../assets/css/global.css");
const react_async_component_1 = require("react-async-component");
const Root = (React.createElement(react_async_component_1.AsyncComponentProvider, null,
    React.createElement(app_1.default, null)));
ReactDOM.render(Root, document.getElementById("root"));
//# sourceMappingURL=main.js.map