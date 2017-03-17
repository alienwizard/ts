import * as React from "react";
import { Component } from "react";
import styled from "styled-components";
import ClubBarComponent from "./club-bar.components";
import * as logo from "../../../assets/F1_logo.svg";

const Header = styled.header`
    height: 90px;
    width:100%;
    border-bottom:1px solid gray;
    
`;

const LogoWrap = styled.div`

`;

const InitialClubArray = [
    {
        "logo": "/images/clubs/ferrari.svg",
        "link": "/ferrari"
    }
]

export default () => <Header><LogoWrap><img src={logo as any} alt="f1"/></LogoWrap><ClubBarComponent clubArray={InitialClubArray } /><h1>Header</h1></Header>;