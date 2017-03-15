import * as React from "react";
import * as ReactDOM from "react-dom";
import Enzo from "./enzo/enzo.service";
import { TrackList } from "./enzo/trackList";
import Header from "./header/header";
import styled from "styled-components";

export interface HelloProps { compiler: string; framework: string; }

const trackList = Enzo.getTracks();
const Wrapper = styled.div`
    display:flex;
    flex-flow:column;
    justify-content: center;
    align-items: center;
`;

const Container = styled.section`
    display:flex;
    flex-flow: row;
    width: 1100px;
`;

export default (props: HelloProps) => <Wrapper><Header /><Container><TrackList trackArray={trackList}/></Container></Wrapper>;
