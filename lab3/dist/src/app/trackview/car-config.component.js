"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
class CarConfig extends react_1.Component {
    render() {
        return (React.createElement("div", null,
            "Car Config for: ",
            this.props.track.name && React.createElement("span", null, this.props.track.name)));
    }
}
exports.default = CarConfig;
//# sourceMappingURL=car-config.component.js.map