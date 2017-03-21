import * as React from "react";
import { Component } from "react";

export default class NoMatchComponent extends Component<{}, {}> {
    render() {
        return(
            <div>
                <h1>Hittade inte sida</h1>
            </div>
        )
    }
}