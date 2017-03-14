"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
exports.Hello = function (props) { return React.createElement("h1", null,
    "Hello from ",
    props.compiler,
    " and ",
    props.framework,
    "!"); };
ReactDOM.render(React.createElement(exports.Hello, { compiler: "TypeScript", framework: "React" }), document.getElementById("root"));
//# sourceMappingURL=main.js.map