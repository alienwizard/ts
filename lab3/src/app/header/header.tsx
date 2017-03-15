import * as React from "react";
import { Component } from "react";
import styled from "styled-components";

import * as logo from "../../../assets/F1_logo.svg";

const Header = styled.header`
    height: 90px;
    width:100%;
`;

export default () => <header><img src="/images/tracks/barcelona.jpg" /><h1>Header</h1></header>;