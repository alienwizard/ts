import * as React from "react";
import { Component } from "react";
import { track, carConfig } from "../types/index";

interface ConfigProps {
    track: track;
    config: carConfig;
}

interface ConfigState {

}

export default class CarConfig extends Component<ConfigProps, ConfigState> {
    render() {
        return (
        <div>Car Config for: {this.props.track.name && <span>{this.props.track.name}</span>}</div>
        )
    }
}