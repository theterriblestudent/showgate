'use client';

import styled from "styled-components";
import {Button, FlexContainer} from "components";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";


export const  StyledTitle = styled(FlexContainer).attrs({gap: "15px", align_content: "flex-start"})`
    justify-content: space-between;

    background: transparent;
    
`;

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

    @media only screen and (max-width: 968px) {
            display: none;
        }

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

        transition: left 0.5s ease, width 0.25s ease-in;
    }   
`;

export const MobileButton = styled(Button)`
    display: none;

    @media only screen and (max-width: 968px) {
        display: block;
    }
`;

export const StyledDropDown = styled(FlexContainer).attrs({
    gap: "10px",
    className: "dropdown"
})`
    position: relative;

    a {
        font-family: var(--secondary-font);
        color: var(--accent-color);
        text-decoration: none;
        font-size: 1rem;
        font-weight: bold;

        cursor: pointer;
    }

    
`

export const StyledChevDown = styled(FaChevronDown)`
    font-size: 0.95rem;
    color: var(--accent-color);
`

export const DropDownList = styled(FlexContainer).attrs({
    flex_direction: "column",
    align_content: "flex-start",
    gap: "10px",
    className: "dropdown-list"
})`
    background-color: var(--light-background-color);
    border-radius: 10px;

    position: absolute;
    top: calc(100% + 10px);
    left: 0;

    width: 100%;
    max-height: 200px;
    overflow-y: scroll;

    opacity: 0;
    transform: translateY(-15px);

    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

    &::-webkit-scrollbar {
        display: none;
    }

    p:first-child {
        border-radius: 10px 10px 0 0;
    }

    p:last-child {
        border-radius: 0 0 10px 10px;
    }

    p {
        font-family: var(--secondary-font);
        color: var(--accent-color);

        width: 100%;

        padding: 5px 10px;

        cursor: pointer;

        &:hover {
            background-color: var(--accent-color);
            color: var(--light-foreground-color);
        }
    }
`