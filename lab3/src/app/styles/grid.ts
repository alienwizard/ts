import styled from "styled-components";
import { Colors } from "./index";

export const ArticleHeader = styled.header`
    background-color:${Colors.red};
    width: 100%;
    height:120px;
    display:flex;
    justify-content:center;
    alignt-items:center;
    align-content:center;
    color: white;

    h1{

    }
`;

export const Wrapper = styled.section`
    display:flex;
`;

export const Container = styled.div`
    display:flex;
    flex-flow: column;
    width: 1100px;
    align-items:center;
`;

export const Row = styled.div`
    display:flex;
    flex-flow:row;
`

export const Section = styled.section`
    width:100%;
    display:flex;
    flex-flow:column;
    justify-content:center;
    align-items:center;
`;