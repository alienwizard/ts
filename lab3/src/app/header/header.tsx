import * as React from "react";
import { Component } from "react";
import styled from "styled-components";

import * as logo from "../../../assets/F1_logo.svg";

const Header = styled.header`
    height: 90px;
    width:100%;
    border-bottom:1px solid gray;
    
`;

export default () => <Header><h1>Header</h1></Header>;