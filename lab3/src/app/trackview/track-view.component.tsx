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
import { Link } from "react-router-dom";

const TrackHeader = styled.header`
    display:flex;
    align-items:center;
    flex-flow:row;
    width:100%;
    justify-content: space-between;
    padding: 35px 0px;
`;

const TrackFlag = styled.i`
    font-size:150px!important;
    display:block;
`;

type Trackviewprops = {
    match: {
        params: {
            trackId: string;
        };
    }
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
        console.log(this.props);
        const track = Enzo.getTrack(parseInt(this.props.match.params.trackId));
        const forecast = WeatherService.getForecast();
        this.setState({currentForecast: forecast, currentTrack: track[0]});
    }

    getConfig(weather: weather) {
        const config = Enzo.getConfig(weather);
        this.setState({currentConfig: config});
    }

    render() {
        const countryClass = "flag-icon flag-icon-";
        return(
            <Wrapper>
                <Row>
                {this.state.currentTrack &&
                <TrackHeader style={{backgroundColor: "#" + this.state.currentTrack.color, color: getContrastYIQ(this.state.currentTrack.color)}} role="banner">
                    <Container>
                        <Row>
                            <TrackFlag className={countryClass + this.state.currentTrack.countryCode} alt={this.state.currentTrack.country}></TrackFlag>
                            <h1>{this.state.currentTrack.name}</h1>
                            <Link to="/" tabIndex={0} style={{color: getContrastYIQ(this.state.currentTrack.color)}}>Tillbaka</Link>
                        </Row>
                    </Container>
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