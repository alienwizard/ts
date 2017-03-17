import styled, { css } from "styled-components";
import { Colors } from "./index";
import { Link } from "react-router-dom";

export const StandardBtn = styled.button`
    margin-top: 1rem;
    color: ${Colors.black};
    background-color: ${Colors.darkGray};
    border:none;
    border-radius:2px;
    transition: all .2s;
    padding: 0 3rem;

    &:hover{
        background-color: ${ Colors.hoverGray };
    }
`;

export const button = css`
    margin-top: 1rem;
    color: ${Colors.black};
    background-color: ${Colors.darkGray};
    border:none;
    border-radius:2px;
    transition: all .2s;
    padding: 0 3rem;

    &:hover{
        background-color: ${ Colors.hoverGray };
    }
`;

export const LinkWrap = styled.div`
    ${ button }
`;