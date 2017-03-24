import * as React from "react";
import { track, carConfig } from "../types/index";
import { Ul } from "../styles/lists";
import { Container, ArticleHeader, Section, Row } from "../styles/grid";
import { Sizes } from "../styles/index";
import TrackComponent from "./track.component";
import SearchComponent from "../shared/search.component";
import styled from "styled-components";
//import "ionicons/dist/css/ionicons.min.css";

type trackListProps = {
    initialTracks: track[];
};

interface TrackListState {
    currentConfig: carConfig;
    currentTrack: track;
    trackArray: track[];
}
const ListWrap = styled(Ul)`
    display:flex;
    flex-flow:row;
    flex-wrap: wrap;
    justify-content:space-between;
    width:${Sizes.pageSize};
`;

export default class TrackList extends React.Component<trackListProps, TrackListState> {
    constructor(props: trackListProps) {
        super(props);
        this.state = {currentTrack: null, currentConfig: null, trackArray: this.props.initialTracks};
        // const initialTracks = this.props.initialTracks;
        this.filterTracks = this.filterTracks.bind(this)
    }

    updateCurrentTrack(track: track) {
        this.setState({ currentTrack:  track})
    }
    filterTracks(searchStr: string) {
        console.log(searchStr);
        searchStr === ""
        ? this.setState({trackArray: this.props.initialTracks})
        : this.setState({trackArray: this.state.trackArray.filter((track: track) => track.name.toLowerCase().search( searchStr.toLowerCase()) !== -1 )})
    }

    render() {

        return(
            <Section>
                <ArticleHeader>
                    <Container>
                        <Row>
                            <h1>Banor</h1>
                            <SearchComponent searchChange={this.filterTracks}/>
                        </Row>
                    </Container>
                </ArticleHeader>
                <Container>
                    <h2>Selectable Tracks:</h2>
                    {this.state.trackArray &&
                    <ListWrap>
                        {this.state.trackArray.map((element: track, index) =>
                            <TrackComponent key={index} track={element} index={index} updateCurrentTrack={ (element) => this.updateCurrentTrack(element)}/>
                        )}
                    </ListWrap>
                    }
                </Container>
            </Section>
            );
    }
}       