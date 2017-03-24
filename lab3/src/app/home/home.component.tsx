import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display:flex;
    flex-flow:column;
    justify-content: center;
    align-items: center;
`;

export default () => (
    <Wrapper>
        <h1>Welcome!</h1>
    </Wrapper>
);
