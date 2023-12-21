'use client';

import styled from "styled-components";
import {FlexContainer} from "components";
import { FaChevronRight } from "react-icons/fa";


export const  StyledTitle = styled(FlexContainer).attrs({gap: "15px"})``;

export const StyledTitleText = styled.h1`
    font-family: var(--primary-font);
    font-size: 1.4rem;
    font-size: clamp(1.4rem, 0.971rem + 1.371vw, 2rem);

    color: var(--light-foreground-color);

    transition: color 0.5s;
    cursor: pointer;

    &:hover {color: var(--accent-color);}
`;

export const StyledChev = styled(FaChevronRight)`
    font-size: 1rem;
    font-size: clamp(1rem, 0.857rem + 0.571vw, 1.5rem);
    color: var(--accent-color);

    @media only screen and (max-width: 968px) {
        display: none;
    }
`;

export const ButtonsContainer = styled(FlexContainer)`
    background: var(--light-background-color);
    border: 2px solid var(--light-background-color);
    border-radius: 100px;
    position: relative;
    margin-left: 25px;

    button {
        background: transparent;
        border: none;
        padding: 7px 24px;

        font-family: var(--primary-font);
        font-size: 1rem;
        font-weight: 500;
        color: var(--light-foreground-color);

        transition: color 0.5s ease;

        z-index: 3;

    }

    & > div {
        z-index: 2;
        height: 100%;
        width: 50%;

        position: absolute;
        left: 0px;
        top: 0px;

        border-radius: 100px;
        background-color: var(--accent-color);

        transition: left 0.5s ease;
    }   
`;