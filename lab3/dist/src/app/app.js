"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzo_service_1 = require("./enzo/enzo.service");
const trackList_1 = require("./enzo/trackList");
const header_1 = require("./header/header");
const styled_components_1 = require("styled-components");
const trackList = enzo_service_1.default.getTracks();
const Wrapper = styled_components_1.default.div `
    display:flex;
    flex-flow:column;
    justify-content: center;
    align-items: center;
`;
const Container = styled_components_1.default.section `
    display:flex;
    flex-flow: row;
    width: 1100px;
`;
exports.default = (props) => React.createElement(Wrapper, null,
    React.createElement(header_1.default, null),
    React.createElement(Container, null,
        React.createElement(trackList_1.TrackList, { trackArray: trackList })));
//# sourceMappingURL=app.js.map