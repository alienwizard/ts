"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const index_1 = require("../styles/index");
const buttons_1 = require("../styles/buttons");
// import "flag-icon-css/css/flag-icon.min.css";
const react_router_dom_1 = require("react-router-dom");
const react_overdrive_1 = require("react-overdrive");
const TrackImage = styled_components_1.default.div `
    height: 250px;
    width:100%;
    background-size:cover;
    background-position:center center;
    
`;
const TrackWrapper = styled_components_1.default.li `
    width:400px;
    text-aling:center;
    overflow:hidden;
    position:relative;
    background-color:${index_1.Colors.gray};
    color:${index_1.Colors.black};
    text-align:center;
    margin-bottom:2rem;
`;
const CountryWrap = styled_components_1.default.div `
    position: absolute;
    height:70px;
    width:70px;
    border-radius:100%;
    padding:10px;
    background-color:${index_1.Colors.white};
    display:flex;
    align-items:center;
    justify-content:center;
    left:50%;
    margin-left: -35px;
    bottom: 0%;
    margin-bottom:-35px;
    
`;
const CountryIcon = styled_components_1.default.span `
    width: 50px !important;
    height: 50px;
    display:block;
    background-repeat:no-repeat;
`;
const TrackTitle = styled_components_1.default.h2 `
    font-size:  20px;
    margin-top: 55px;
    text-align: center;
`;
const BoxBorder = styled_components_1.default.svg `
    position: absolute;
    bottom: -.4rem;
    left: 0;

    .fill{
        fill: ${index_1.Colors.gray}
    }
`;
const ImageWrap = styled_components_1.default.div `
    position:relative;
`;
const TrackComponent = ({ track, index }) => {
    const countryClass = "flag-icon flag-icon-";
    return (React.createElement(TrackWrapper, { key: index },
        React.createElement(react_overdrive_1.default, { id: "track" },
            React.createElement(ImageWrap, null,
                React.createElement(TrackImage, { style: { backgroundImage: `url(${track.image})` } }),
                React.createElement(CountryWrap, null,
                    React.createElement(CountryIcon, { className: countryClass + track.countryCode })),
                React.createElement(BoxBorder, { xmlns: "//www.w3.org/2000/svg", height: "40", width: "170" },
                    React.createElement("path", { className: "fill", d: "M3998,4894l51.91,18-1,5.29c75.27,22.9,152.4,34.56,231.23,40.06-0.44,2-.81,3.87-1.26,5.7s-1,3.77-1.78,6.41c7.79,0.53,15.17,1.17,22.57,1.51,12.14,0.56,24.29.9,36.43,1.38,1.65,0.07,3.28.42,4.92,0.64H3998v-79Z", transform: "translate(-3998 -4894)" }))),
            React.createElement(TrackTitle, null, track.name),
            React.createElement("h5", null, track.country),
            React.createElement(buttons_1.LinkWrap, null,
                React.createElement(react_router_dom_1.Link, { to: { pathname: '/track/' + track.id + '' } }, " konfigurera din bil ")))));
};
exports.default = TrackComponent;
//# sourceMappingURL=track.component.js.map