import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { browserHistory } from 'react-router';
import Home from "./home/home.component";
import SingleTrackComponent from "./trackview/track-view.component";
import Enzo from "./enzo/enzo.service";
import { Colors } from "./styles/index";
import Header from "./header/header";
import styled from "styled-components";
import NoMatchComponent from "./shared/no-match.component";
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

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
            <Header />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/track/:trackId" render={({match}) => (
                    <div>
                        {JSON.stringify(match.params.trackId)}
                        <SingleTrackComponent currentTrackId={parseInt(match.params.trackId)}/>
                    </div>
                )}/>
                <Route component={NoMatchComponent}/>
            </Switch>
        </div>
    </Router>
);
