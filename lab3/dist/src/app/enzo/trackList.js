"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const lists_1 = require("../styles/lists");
const colors_1 = require("../styles/colors");
const styled_components_1 = require("styled-components");
require("flag-icon-css/css/flag-icon.min.css");
const ListWrap = styled_components_1.default(lists_1.Ul) `
    display:flex;
    flex-flow:row;
    justify-content:space-around;
    width:100%;
`;
const TrackImage = styled_components_1.default.div `
    height: 300px;
    width:100%;
    background-size:cover;
    background-position:center center;
    
`;
const TrackWrapper = styled_components_1.default.li `
    width:400px;
    height:600px;
    text-aling:center;
    overflow:hidden;
    position:relative;
    background-color:${colors_1.Colors.gray};
    color:white;
    text-align:center;
`;
const CountryWrap = styled_components_1.default.div `
    position: absolute;
    height:70px;
    width:70px;
    border-radius:100%;
    padding:10px;
    background-color:red;
    display:flex;
    align-items:center;
    justify-content:center;
    left:50%;
    top: 8rem;
    
`;
const CountryIcon = styled_components_1.default.span `
    width: 50px !important;
    height: 50px;
    display:block;
    background-repeat:no-repeat;
`;
const TrackTitle = styled_components_1.default.h3 `
    text-align: center;
`;
class TrackList extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement("h2", null, "Selectable Tracks:"),
            this.props.trackArray &&
                React.createElement(ListWrap, null, this.props.trackArray.map((element, index) => React.createElement(TrackWrapper, { key: index },
                    React.createElement(TrackImage, { style: { backgroundImage: `url(${element.image})` } }),
                    React.createElement(CountryWrap, null,
                        React.createElement(CountryIcon, { className: countryClass + element })),
                    React.createElement(TrackTitle, null, element.name),
                    React.createElement("h5", null, element.country))))));
    }
}
exports.TrackList = TrackList;
//# sourceMappingURL=trackList.js.map