import * as React from "react";
import styled from "styled-components";
import { Wrapper, Container, Row } from "../styles/grid";
import { track, carConfig, weather } from "../types/index";
import CarConfig from "./car-config.component";
import Enzo from "../enzo/enzo.service";
import WeatherComponent from "./weather.component";
import WeatherService from "../weather/weather.service";
import { getContrastYIQ } from "../utils/index";
import "flag-icon-css/css/flag-icon.min.css";
import Overdrive from "react-overdrive";
import { Link } from "react-router-dom";

const TrackHeader = styled.header`
    display:flex;
    align-items:center;
    flex-flow:column;
    width:100%;
`;

type Trackviewprops = {
    currentTrackId: number;
}

type TrackviewState = {
    currentTrack: track;
    currentConfig: carConfig;
    currentForecast: weather[];
}

class TrackViewComponent extends React.Component<Trackviewprops, TrackviewState> {
    constructor(props: Trackviewprops) {
        super(props);
        this.state = {currentTrack: null, currentConfig: null, currentForecast: null};
        this.getConfig = this.getConfig.bind(this);
    }

    componentDidMount() {
        const track = Enzo.getTrack(this.props.currentTrackId);
        const forecast = WeatherService.getForecast();
        this.setState({currentForecast: forecast, currentTrack: track[0]});
    }

    getConfig(weather: weather) {
        const config = Enzo.getConfig(weather);
        this.setState({currentConfig: config});
    }


    render() {
        return(
            <Wrapper>
                <Row>
                {this.state.currentTrack &&
                <TrackHeader style={{backgroundColor: this.state.currentTrack.color, color: getContrastYIQ(this.state.currentTrack.color)}} role="banner">
                        <div><img src={this.state.currentTrack.countryCode} alt={this.state.currentTrack.country}/></div>
                        <h1>{this.state.currentTrack.name}</h1>
                        <Link to="/" tabindex={0} style={{color: getContrastYIQ(this.state.currentTrack.color)}}>Tillbaka</Link>
                </TrackHeader>
                }
                </Row>
                <Container>
                    <Row>
                {this.state.currentForecast &&
                <WeatherComponent forecastList={this.state.currentForecast} selectForecast={this.getConfig}/>
                }
                    </Row>
                </Container>
                {this.state.currentConfig &&
                <CarConfig track={this.state.currentTrack} config={this.state.currentConfig} />
                }
            </Wrapper>
        );
    }
}


export default TrackViewComponent;