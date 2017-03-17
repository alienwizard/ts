import styled from "styled-components";
import { Colors } from "./index";

export const ArticleHeader = styled.header`
    background-color:${Colors.red};
    width: 100%;
    height:120px;
    display:flex;
    justify-content:center;
    alignt-items:center;
    color: white;
`;

export const Container = styled.div`
    display:flex;
    flex-flow: row;
    width: 1100px;
`;

export const Section = styled.section`
    width:100%;
    display:flex;
    flex-flow:column;
    justify-content:center;
    align-items:center;
`;