"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const InitialClubArray = [
    {
        "logo": "/images/clubs/ferrari.svg",
        "link": "/ferrari"
    }
];
const ClubBarComponent = ({ clubArray = InitialClubArray }) => (React.createElement("div", null,
    React.createElement("ul", null, clubArray &&
        clubArray.map((club, index) => (React.createElement("li", { key: index },
            React.createElement("a", { href: club.link },
                React.createElement("img", { src: club.logo, alt: "ferrari" }))))))));
exports.default = ClubBarComponent;
//# sourceMappingURL=club-bar.components.js.map