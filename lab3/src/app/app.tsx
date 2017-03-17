import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./home/home.component";
import SingleTrackComponent from "./trackview/track-view.component";
import Enzo from "./enzo/enzo.service";
import { Colors } from "./styles/index";
import Header from "./header/header";
import styled from "styled-components";

const trackList = Enzo.getTracks();

const Wrapper = styled.div`
    display:flex;
    flex-flow:column;
    justify-content: center;
    align-items: center;
`;

export default () => (
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/track/:track" component={SingleTrackComponent}/>
        </div>
    </Router>
);
