import * as React from "react";
import styled from "styled-components";
import { Wrapper, Container } from "../styles/grid";
import { track, carConfig, weather } from "../types/index";
import CarConfig from "./car-config.component";
import Enzo from "../enzo/enzo.service";
import WeatherComponent from "./weather.component";
import WeatherService from "../weather/weather.service";
const TrackHeader = styled.header`
    display:flex;
    align-items:center;
`;

type Trackviewprops = {
    currentTrack: track;
}

type TrackviewState = {
    currentConfig: carConfig;
    currentForecast: weather[];
}

export default class TrackViewComponent extends React.Component<Trackviewprops, TrackviewState> {
    constructor(props: Trackviewprops) {
        super(props);
        this.getForecast();
    }
    getForecast() {
        const forecast = WeatherService.getForecast();
        this.setState({currentForecast: forecast});
    }
    getConfig(weather: weather) {
        const config = Enzo.getConfig(weather);
        this.setState({currentConfig: config});
    }
    render() {
        const {currentTrack} = this.props;
        return(
            <Wrapper>
                <TrackHeader>
                    <h1>{currentTrack.name}</h1>
                </TrackHeader>
                <Container>
                {this.state.currentForecast &&
                <WeatherComponent forecastList={this.state.currentForecast} selectForecast={this.getConfig}/>
                }
                </Container>
                {this.state.currentConfig &&
                <CarConfig track={currentTrack} config={this.state.currentConfig} />
                }
            </Wrapper>
        );
    }
}