import * as React from "react";
import * as ReactDOM from "react-dom";
import Enzo from "../enzo/enzo.service";
import TrackList  from "../track-list/trackList";
import { Colors } from "../styles/index";
import Header from "../header/header";
import styled from "styled-components";

const trackList = Enzo.getTracks();

export const Wrapper = styled.div`
    display:flex;
    flex-flow:column;
    justify-content: center;
    align-items: center;
`;

export default () => (
    <Wrapper>
            <TrackList initialTracks={trackList}/>
    </Wrapper>
);
