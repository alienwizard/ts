"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzo_service_1 = require("../enzo/enzo.service");
const trackList_1 = require("../track-list/trackList");
const styled_components_1 = require("styled-components");
const trackList = enzo_service_1.default.getTracks();
const Wrapper = styled_components_1.default.div `
    display:flex;
    flex-flow:column;
    justify-content: center;
    align-items: center;
`;
exports.default = () => (React.createElement(Wrapper, null,
    React.createElement(trackList_1.default, { initialTracks: trackList })));
//# sourceMappingURL=home.component.js.map