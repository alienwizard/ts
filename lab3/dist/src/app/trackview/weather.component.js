"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const lists_1 = require("../styles/lists");
const index_1 = require("../styles/index");
const styled_components_1 = require("styled-components");
require("ionicons/dist/css/ionicons-core.css");
const TempWrap = styled_components_1.default.li `
    display:flex;
    flex-flow: row;
    justify-content: space-around;
    align-items:center;

`;
const ConditionInfo = styled_components_1.default.h3 `
    font-size: 16px;
`;
const TempInfo = styled_components_1.default.h2 `
    font-size: 18px;
`;
const Link = styled_components_1.default.span `
    font-size: 12px;
    color: ${index_1.Colors.linkBlue};
    cursor:pointer;
`;
class WeatherList extends React.Component {
    constructor(props) {
        super(props);
        this.showWeather = () => {
            this.setState(prevState => ({
                isVisible: !prevState.isVisible
            }));
        };
        this.selectForecast = (element) => {
            console.log('selected weather', element);
            this.props.selectForecast(element);
        };
        this.state = { isVisible: true };
    }
    ;
    componentDidMount() {
        /*
        const weatherGraph = d3.json(this.props.forecastList, function(data){
    let extent = d3.extent(data, function(d: weather) {
        return d.temperature;
    });

    let scale = d3.scaleLinear()
        .domain(extent)
        .range([0, 600]);
})
*/
    }
    render() {
        const forecastList = this.props.forecastList;
        return (React.createElement("div", null, this.state.isVisible &&
            React.createElement(lists_1.Ul, null,
                "Dagens V\u00E4derprognos:",
                this.props.forecastList &&
                    forecastList.map((element, index) => React.createElement(TempWrap, { key: index },
                        React.createElement(ConditionInfo, null, element.conditions),
                        React.createElement(TempInfo, null,
                            element.temperature,
                            "\u00B0"),
                        React.createElement(Link, { onClick: (e) => this.selectForecast(element) }, "V\u00E4lj prognos"))))));
    }
    ;
}
exports.default = WeatherList;
//# sourceMappingURL=weather.component.js.map