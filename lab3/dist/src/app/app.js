"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const home_1 = require("./home");
const _1 = require("./trackview/");
const header_1 = require("./header/header");
const no_match_component_1 = require("./shared/no-match.component");
/**Home route not rendering the component */
exports.default = () => (React.createElement(react_router_dom_1.BrowserRouter, null,
    React.createElement("div", null,
        React.createElement(header_1.default, null),
        React.createElement(react_router_dom_1.Switch, null,
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: home_1.default }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/tracks", component: home_1.default }),
            React.createElement(react_router_dom_1.Route, { path: "/track/:trackId", component: _1.default }),
            React.createElement(react_router_dom_1.Route, { component: no_match_component_1.default })))));
//# sourceMappingURL=app.js.map