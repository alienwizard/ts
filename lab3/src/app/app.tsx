import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./home";
import TrackView from "./trackview/"
import Header from "./header/header";
import NoMatchComponent from "./shared/no-match.component";

/**Home route not rendering the component */
export default () => (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/tracks" component={Home} />
                <Route path="/track/:trackId" component={TrackView}/>
                <Route component={NoMatchComponent}/>
            </Switch>
        </div>
    </Router>
);
