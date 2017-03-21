import * as React from "react";
import styled from "styled-components";
import { track, weather, carConfig } from "../types/index";
import { Colors } from "../styles/index";
import { LinkWrap } from "../styles/buttons";
import "flag-icon-css/css/flag-icon.min.css";
import WeatherService from "../weather/weather.service";
import { Link } from "react-router-dom";
import Overdrive from "react-overdrive"

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
    background-color:${Colors.white};
    display:flex;
    align-items:center;
    justify-content:center;
    left:50%;
    margin-left: -35px;
    bottom: 0%;
    margin-bottom:-35px;
    
`;

const CountryIcon = styled.span`
    width: 50px !important;
    height: 50px;
    display:block;
    background-repeat:no-repeat;
`;

const TrackTitle = styled.h2`
    font-size:  20px;
    margin-top: 55px;
    text-align: center;
`;

const BoxBorder = styled.svg`
    position: absolute;
    bottom: -.4rem;
    left: 0;

    .fill{
        fill: ${Colors.gray}
    }
`;

const ImageWrap = styled.div`
    position:relative;
`;

type trackProps = {
    track: track,
    index: number
    updateCurrentTrack: (track: track) => void;
}

const TrackComponent = ({track, index}: trackProps) => {
    const countryClass = "flag-icon flag-icon-";

    return(
        <TrackWrapper key={index}>
            <Overdrive id="track">
                <ImageWrap>
                    <TrackImage style={{backgroundImage: `url(${track.image})`}}></TrackImage>
                    <CountryWrap><CountryIcon className={countryClass + track.countryCode}></CountryIcon></CountryWrap>
                    <BoxBorder xmlns="//www.w3.org/2000/svg" height="40" width="170">
                        <path className="fill" d="M3998,4894l51.91,18-1,5.29c75.27,22.9,152.4,34.56,231.23,40.06-0.44,2-.81,3.87-1.26,5.7s-1,3.77-1.78,6.41c7.79,0.53,15.17,1.17,22.57,1.51,12.14,0.56,24.29.9,36.43,1.38,1.65,0.07,3.28.42,4.92,0.64H3998v-79Z" transform="translate(-3998 -4894)"></path>
                    </BoxBorder>
                </ImageWrap>
                <TrackTitle>{track.name}</TrackTitle>
                <h5>{track.country}</h5>
                <LinkWrap>
                    <Link to={{pathname: '/track/'+track.id+''}}> konfigurera din bil </Link>
                </LinkWrap>
            </Overdrive>
        </TrackWrapper>
    );
}



export default TrackComponent