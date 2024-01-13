'use client'

import styled from "styled-components"
import {FlexContainer} from "components"
import {FaSearch} from "react-icons/fa"


export const StyledForm = styled(FlexContainer).attrs({className:"search-form"})`
    width: 270px;
    height: 40px;

    border: 2px solid var(--accent-color);
    border-radius: 50px;

    padding: 3px 3px 3px 5px;

    background-color: rgba(0, 0, 0, 0.85);

    transition: width 0.5s ease-in-out;

    @media only screen and (max-width: 968px) {
        justify-self: end;

        justify-content: center;

        width: 30px;
        height: 30px;

        padding: 3px 3px 3px 3px;

        border-radius: 50px;

    }
`;

export const StyledInput = styled.input.attrs({type: "text", placeholder: "Search Movies and TV"})`
    border: none;
    outline: none;
    color: var(--light-foreground-color);
    height: 100%;
    flex: 1;
    border-radius: 8px;
    padding: 0 5px;
    background: transparent;

    transition: opacity 0.25s ease-in-out;

    @media only screen and (max-width: 968px) {
        display: none;
        opacity: 0;
    }
`;

export const StyledSearchButton = styled(FlexContainer).attrs({className:"search-button"})`
    width: 28px;
    height: 30px;

    border-radius: 50%;
    background-color: var(--accent-color);

    cursor: pointer;

    flex-shrink: 0;

    &:hover > .search-icon {
        color: var(--light-foreground-color);
    }

    @media only screen and (max-width: 968px) {
        width: 21px;
        height: 21px;
    }
`;

export const StyledSearchIcon = styled(FaSearch).attrs({className: "search-icon"})`
    font-size: 0.85rem;
    color: var(--dark-background-color);
    transition: color 0.5s;
`;