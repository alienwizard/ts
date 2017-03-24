"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const index_1 = require("../styles/index");
const mixins_1 = require("../styles/mixins");
const SearchWrap = styled_components_1.default.div `
    display:flex;
    align-items:center;
`;
const SearchBar = styled_components_1.default.input `
    border:none;
    color:${index_1.Colors.white};
    background-color:${index_1.Colors.red};
    border-bottom: 2px solid white;
    padding:19px;
    padding-left:0px;
    position:relative;
    ${mixins_1.placeholder `
        color: white;
    `}

    &:after{
        content:"";
    }

    &:focus{
        outline:none;
    }
`;
class SearchComponent extends React.Component {
    handleChange(event) {
        console.log('change!', event);
        this.props.searchChange(event.currentTarget.value);
    }
    render() {
        return (React.createElement(SearchWrap, null,
            React.createElement(SearchBar, { type: "text", placeholder: "Sök på bana", onChange: (event) => this.handleChange(event) })));
    }
}
exports.default = SearchComponent;
//# sourceMappingURL=search.component.js.map