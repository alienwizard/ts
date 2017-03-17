import * as React from "react";
import styled from "styled-components";
import { Colors } from "../styles/index";
import { placeholder } from "../styles/mixins";

type SearchProps = {
    searchChange: any
}

type SearchState = {

}

const SearchWrap = styled.div`
    display:flex;
    align-items:center;
`;

const SearchBar = styled.input`
    border:none;
    color:${Colors.white};
    background-color:${Colors.red};
    border-bottom: 2px solid white;
    padding:19px;
    padding-left:0px;
    position:relative;
    ${placeholder`
        color: white;
    `}

    &:after{
        content:"";
    }

    &:focus{
        outline:none;
    }
`;

export default class SearchComponent extends React.Component<SearchProps, SearchState> {
    handleChange(event: React.FormEvent<HTMLInputElement>) {
        console.log('change!', event);
        this.props.searchChange(event.currentTarget.value);
    }
    render() {
        return(
            <SearchWrap>
                <SearchBar type="text" placeholder="Sök på bana" onChange={(event) => this.handleChange(event)}/>
            </SearchWrap>
        );
    }
}