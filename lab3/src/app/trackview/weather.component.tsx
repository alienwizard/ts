import * as React from "react";
import { weather } from "../types/index";
import { Ul } from "../styles/lists";
import { Colors } from "../styles/index"
import styled from "styled-components";
import "ionicons/dist/css/ionicons-core.css";

interface WeatherState {
    isVisible: boolean;
}

interface WeatherProps {
    forecastList: weather[];
    selectForecast: (element: weather) => void;
}

const TempWrap = styled.li`
    display:flex;
    flex-flow: row;
    justify-content: space-around;
    align-items:center;

`;

const ConditionInfo = styled.h3`
    font-size: 16px;
`;

const TempInfo = styled.h2`
    font-size: 18px;
`;

const Link = styled.span`
    font-size: 12px;
    color: ${Colors.linkBlue};
    cursor:pointer;
`;

export default class WeatherList extends React.Component<WeatherProps, WeatherState> {
    constructor(props: WeatherProps) {
        super(props);
        this.state = {isVisible: true};
    };

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

    showWeather = () => {
        this.setState( prevState => ({
            isVisible: !prevState.isVisible
        }));
    };
    selectForecast = (element: weather) => {
        console.log('selected weather', element);
        this.props.selectForecast(element);
    }
    render() {
        const forecastList = this.props.forecastList;
        return (
            <div>
            {this.state.isVisible &&
            <Ul>
                Dagens Väderprognos:
                {this.props.forecastList &&
                forecastList.map((element, index) =>
                    <TempWrap key={index}>
                        <ConditionInfo>{element.conditions}</ConditionInfo>
                        <TempInfo>{element.temperature}°</TempInfo>
                        <Link onClick={ (e) => this.selectForecast(element)}>Välj prognos</Link>
                    </TempWrap>
                )
                }
            </Ul>
            }
            </div>
            );
    };
}