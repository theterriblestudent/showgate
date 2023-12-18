'use client'

import styled from "styled-components"
import {FlexContainer} from "components"
import {FaSearch} from "react-icons/fa"


export const StyledForm = styled(FlexContainer)`
    width: 270px;
    height: 40px;
    border: 2px solid var(--accent-color);
    border-radius: 50px;
    padding: 3px 3px 3px 5px;

    @media only screen and (max-width: 968px) {
        position: absolute;
        right: 0;
        bottom: -135%;
        background-color: var(--dark-background-color);
    }

    @media only screen and (max-width: 480px) {
        height: 35px;
        width: 245px;
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
`;

export const StyledSearchButton = styled(FlexContainer)`
    width: 28px;
    height: 30px;
    border-radius: 50px;
    background-color: var(--accent-color);
    cursor: pointer;

    &:hover > .search-icon {
        color: var(--light-foreground-color);
    }

    @media only screen and (max-width: 480px) {
        width: 23px;
        height: 25px;
    }
`;

export const StyledSearchIcon = styled(FaSearch).attrs({className: "search-icon"})`
    font-size: 0.85rem;
    color: var(--dark-background-color);
    transition: color 0.5s;
`;