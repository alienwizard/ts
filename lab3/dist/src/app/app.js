"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzo_service_1 = require("./enzo/enzo.service");
const trackList_1 = require("./enzo/trackList");
const header_1 = require("./header/header");
const trackList = enzo_service_1.default.getTracks();
exports.default = (props) => React.createElement("div", null,
    React.createElement(header_1.default, null),
    React.createElement("h1", null,
        "Hello from ",
        props.compiler,
        " and ",
        props.framework,
        "!"),
    React.createElement("section", null,
        React.createElement(trackList_1.TrackList, { trackArray: trackList })));
//# sourceMappingURL=app.js.map