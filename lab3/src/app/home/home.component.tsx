import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    display:flex;
    flex-flow:column;
    justify-content: center;
    align-items: center;
`;

export default () => (
    <Wrapper>
        <h1>Welcome!</h1>
        <Link to="/tracks" >Klicka här för att välja bana</Link>
    </Wrapper>
);
