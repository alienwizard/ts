import * as React from "react";
import Enzo from "../enzo/enzo.service";
import TrackList  from "../track-list/trackList";
import styled from "styled-components";

const trackList = Enzo.getTracks();

const Wrapper = styled.div`
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
