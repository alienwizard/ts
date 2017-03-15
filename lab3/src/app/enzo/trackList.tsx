import * as React from "react";
import { track } from "../types/index";
import { Ul } from "../styles/lists";
import styled from "styled-components";

type trackListProps = {
    trackArray: track[];
};

interface TrackListState {

}
const TrackImage = (trackImage: string) => <div></div>;

export class TrackList extends React.Component<trackListProps, TrackListState> {
    render() {
        return(
            <div>
                <h2>Selectable Tracks:</h2>
                {this.props.trackArray &&
                <Ul>
                    {this.props.trackArray.map((element, index) =>
                         <li key={index}>
                                <div style={{backgroundImage: `url(${element.image})`}}></div>
                                <h3>{element.name}</h3>
                                <h5>{element.country}</h5>
                        </li>
                    )}
                </Ul>
                }
            </div>
            );
    }
}       