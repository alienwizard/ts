import * as React from "react";
import * as ReactDOM from "react-dom";
import Enzo from "./enzo/enzo.service";
import { TrackList } from "./enzo/trackList";
import Header from "./header/header";

export interface HelloProps { compiler: string; framework: string; }

const trackList = Enzo.getTracks();
export default (props: HelloProps) => <div><Header /><h1>Hello from {props.compiler} and {props.framework}!</h1><section><TrackList trackArray={trackList}/></section></div>;
