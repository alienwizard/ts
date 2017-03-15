import * as React from "react";
import { weather } from "../types/index";

interface WeatherState {
    isVisible: boolean;
}

interface WeatherProps {
    forecastList: weather[];
}

export default class WeatherList extends React.Component<WeatherProps, WeatherState>{
    constructor(props: WeatherProps) {
        super(props);
        this.state = {isVisible: false}
    }

    showWeather() {
        this.setState({isVisible: true});
    }
    render() {

    }
}