"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const club_bar_components_1 = require("./club-bar.components");
const logo = require("../../../assets/F1_logo.svg");
const Header = styled_components_1.default.header `
    height: 90px;
    width:100%;
    border-bottom:1px solid gray;
    
`;
const LogoWrap = styled_components_1.default.div `

`;
const InitialClubArray = [
    {
        "logo": "/images/clubs/ferrari.svg",
        "link": "/ferrari"
    }
];
exports.default = () => React.createElement(Header, { role: "header" },
    React.createElement(LogoWrap, { role: "banner", tabIndex: 0 },
        React.createElement("img", { src: logo, alt: "f1" })),
    React.createElement(club_bar_components_1.default, { clubArray: InitialClubArray }),
    React.createElement("h1", null, "Header"));
//# sourceMappingURL=header.js.map