"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const grid_1 = require("../styles/grid");
const car_config_component_1 = require("./car-config.component");
const enzo_service_1 = require("../enzo/enzo.service");
const weather_component_1 = require("./weather.component");
const weather_service_1 = require("../weather/weather.service");
const index_1 = require("../utils/index");
// import "flag-icon-css/css/flag-icon.min.css";
const react_router_dom_1 = require("react-router-dom");
const TrackHeader = styled_components_1.default.header `
    display:flex;
    align-items:center;
    flex-flow:row;
    width:100%;
    justify-content: space-between;
    padding: 35px 0px;
`;
const TrackFlag = styled_components_1.default.i `
    font-size:150px!important;
    display:block;
`;
class TrackViewComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentTrack: null, currentConfig: null, currentForecast: null };
        this.getConfig = this.getConfig.bind(this);
    }
    componentDidMount() {
        console.log(this.props);
        const track = enzo_service_1.default.getTrack(parseInt(this.props.match.params.trackId));
        const forecast = weather_service_1.default.getForecast();
        this.setState({ currentForecast: forecast, currentTrack: track[0] });
    }
    getConfig(weather) {
        const config = enzo_service_1.default.getConfig(weather);
        this.setState({ currentConfig: config });
    }
    render() {
        const countryClass = "flag-icon flag-icon-";
        return (React.createElement(grid_1.Wrapper, null,
            React.createElement(grid_1.Row, null, this.state.currentTrack &&
                React.createElement(TrackHeader, { style: { backgroundColor: "#" + this.state.currentTrack.color, color: index_1.getContrastYIQ(this.state.currentTrack.color) }, role: "banner" },
                    React.createElement(grid_1.Container, null,
                        React.createElement(grid_1.Row, null,
                            React.createElement(TrackFlag, { className: countryClass + this.state.currentTrack.countryCode, alt: this.state.currentTrack.country }),
                            React.createElement("h1", null, this.state.currentTrack.name),
                            React.createElement(react_router_dom_1.Link, { to: "/", tabIndex: 0, style: { color: index_1.getContrastYIQ(this.state.currentTrack.color) } }, "Tillbaka"))))),
            React.createElement(grid_1.Container, null,
                React.createElement(grid_1.Row, null, this.state.currentForecast &&
                    React.createElement(weather_component_1.default, { forecastList: this.state.currentForecast, selectForecast: this.getConfig }))),
            this.state.currentConfig &&
                React.createElement(car_config_component_1.default, { track: this.state.currentTrack, config: this.state.currentConfig })));
    }
}
exports.default = TrackViewComponent;
//# sourceMappingURL=track-view.component.js.map