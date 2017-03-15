import * as React from "react";
import { weather } from "../types/index";
import { StandardBtn } from "../styles/buttons";
interface WeatherState {
    isVisible: boolean;
}

interface WeatherProps {
    forecastList: weather[];
}

export default class WeatherList extends React.Component<WeatherProps, WeatherState> {
    constructor(props: WeatherProps) {
        super(props);
        this.state = {isVisible: false};
    };

    showWeather = () => {
        console.log("hello");
        this.setState( prevState => ({
            isVisible: !prevState.isVisible
        }));
    };
    render() {
        const forecastList = this.props.forecastList;
        return (
            <div>
            <StandardBtn onClick={this.showWeather}>Se prognos</StandardBtn>
            {this.state.isVisible &&
            <ul>
                Dagens Väderprognos:
                {this.props.forecastList &&
                forecastList.map((element, index) =>
                    <li key={index}>
                        <h3>{element.conditions}</h3>
                        <h2>{element.temperature}°</h2>
                    </li>
                )
                }
            </ul>
            }
            </div>
            );
    };
}