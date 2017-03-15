"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const lists_1 = require("../styles/lists");
const TrackImage = (trackImage) => React.createElement("div", null);
class TrackList extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement("h2", null, "Selectable Tracks:"),
            this.props.trackArray &&
                React.createElement(lists_1.Ul, null, this.props.trackArray.map((element, index) => React.createElement("li", { key: index },
                    React.createElement("div", { style: { backgroundImage: `url(${element.image})` } }),
                    React.createElement("h3", null, element.name),
                    React.createElement("h5", null, element.country))))));
    }
}
exports.TrackList = TrackList;
//# sourceMappingURL=trackList.js.map