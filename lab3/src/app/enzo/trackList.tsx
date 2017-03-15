import * as React from "react";
import { track } from "../types/index";
import { Ul } from "../styles/lists";
import { Colors, Sizes } from "../styles/index";
import WeatherComponent from "../weather/weather.component";
import WeatherService from "../weather/weather.service";
import styled from "styled-components";
import "flag-icon-css/css/flag-icon.min.css";
import "ionicons/dist/css/ionicons.min.css";

type trackListProps = {
    trackArray: track[];
};

interface TrackListState {

}
const ListWrap = styled(Ul)`
    display:flex;
    flex-flow:row;
    justify-content:space-between;
    width:${Sizes.pageSize};
`;
const TrackImage = styled.div`
    height: 250px;
    width:100%;
    background-size:cover;
    background-position:center center;
    
`;

const TrackWrapper = styled.li`
    width:400px;
    text-aling:center;
    overflow:hidden;
    position:relative;
    background-color:${Colors.gray};
    color:${Colors.black};
    text-align:center;
`;

const CountryWrap = styled.div`
    position: absolute;
    height:70px;
    width:70px;
    border-radius:100%;
    padding:10px;
    background-color:red;
    display:flex;
    align-items:center;
    justify-content:center;
    left:50%;
    top: 8rem;
    
`;

const CountryIcon = styled.span`
    width: 50px !important;
    height: 50px;
    display:block;
    background-repeat:no-repeat;
`;

const TrackTitle = styled.h2`
    text-align: center;
`;

export class TrackList extends React.Component<trackListProps, TrackListState> {
    render() {
        const countryClass = "flag-icon flag-icon";
        const forecast = WeatherService.getForecast();
        return(
            <div>
                <h2>Selectable Tracks:</h2>
                {this.props.trackArray &&
                <ListWrap>
                    {this.props.trackArray.map((element, index) =>
                         <TrackWrapper key={index}>
                                <TrackImage style={{backgroundImage: `url(${element.image})`}}></TrackImage>
                                <CountryWrap><CountryIcon className={countryClass + element.countryCode}></CountryIcon></CountryWrap>
                                <TrackTitle>{element.name}</TrackTitle>
                                <h5>{element.country}</h5>
                                <WeatherComponent forecastList={forecast}/>
                        </TrackWrapper>
                    )}
                </ListWrap>
                }
            </div>
            );
    }
}       