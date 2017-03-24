"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const lists_1 = require("../styles/lists");
const grid_1 = require("../styles/grid");
const index_1 = require("../styles/index");
const track_component_1 = require("./track.component");
const search_component_1 = require("../shared/search.component");
const styled_components_1 = require("styled-components");
const ListWrap = styled_components_1.default(lists_1.Ul) `
    display:flex;
    flex-flow:row;
    flex-wrap: wrap;
    justify-content:space-between;
    width:${index_1.Sizes.pageSize};
`;
class TrackList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentTrack: null, currentConfig: null, trackArray: this.props.initialTracks };
        // const initialTracks = this.props.initialTracks;
        this.filterTracks = this.filterTracks.bind(this);
    }
    updateCurrentTrack(track) {
        this.setState({ currentTrack: track });
    }
    filterTracks(searchStr) {
        console.log(searchStr);
        searchStr === ""
            ? this.setState({ trackArray: this.props.initialTracks })
            : this.setState({ trackArray: this.state.trackArray.filter((track) => track.name.toLowerCase().search(searchStr.toLowerCase()) !== -1) });
    }
    render() {
        return (React.createElement(grid_1.Section, null,
            React.createElement(grid_1.ArticleHeader, null,
                React.createElement(grid_1.Container, null,
                    React.createElement(grid_1.Row, null,
                        React.createElement("h1", null, "Banor"),
                        React.createElement(search_component_1.default, { searchChange: this.filterTracks })))),
            React.createElement(grid_1.Container, null,
                React.createElement("h2", null, "Selectable Tracks:"),
                this.state.trackArray &&
                    React.createElement(ListWrap, null, this.state.trackArray.map((element, index) => React.createElement(track_component_1.default, { key: index, track: element, index: index, updateCurrentTrack: (element) => this.updateCurrentTrack(element) }))))));
    }
}
exports.default = TrackList;
//# sourceMappingURL=trackList.js.map