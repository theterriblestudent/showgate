'use client';

import { FlexContainer } from "components";
import styled from "styled-components";

export const StyledMediaCard = styled.div`
    border-radius: 5px;
    flex-basis: clamp(9.375rem, 6.75rem + 13.125vw, 22.5rem);
    flex-shrink: 0;
    flex-grow: 0;
    position: relative;
    @media only screen and (max-width: 968px) {
        background: transparent;
    }
    img {
        width: 100%;
        height: auto;
        border-radius: 5px 5px 0 0;
        @media only screen and (max-width: 968px) {
            border-radius: 8px;
            box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.7);
        }
    }
`;

export const StyledMediaInfo = styled.div `
    padding: 15px 20px 20px 20px;
    max-width: 360px;
    @media only screen and (max-width: 968px) {
        display: none;
    }
`;

export const Title = styled.div`
    font-size: 1.25rem;
    font-size: clamp(1.25rem, 1rem + 0.800vw, 1.55rem);
    font-family: var(--primary-font);
    margin-bottom: 10px;
    color: var(--light-foreground-color);
    font-weight: 500;
    cursor: pointer;
    white-space: nowrap;
    width: inherit;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color 0.5s;
    &:hover {
        color: var(--accent-color);
    }
`;

export const MobileReleaseDate = styled.h3`
    font-family: var(--secondary-font);
    color: var(--dark-foreground-color);
    font-size: 0.9rem;
    font-size: clamp(0.9rem, 0.817rem + 0.267vw, 1rem);
    font-weight: 500;
    display: none;
    margin-top: 10px;
    @media only screen and (max-width: 968px) {
        display: block;
    }
`;

export const Genres = styled(FlexContainer).attrs({gap:"5px"})`
    margin-bottom: 10px;

    div {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        margin-top: 3px;
    }

    p {
        font-family: var(--secondary-font);
        color: var(--dark-foreground-color);
        font-size: 1rem;
        font-size: clamp(1rem, 0.958rem + 0.133vw, 1.05rem);
        font-weight: 500;
    }
`;

export const ReleaseDate = styled.p `
    font-family: var(--seconday-font);
    color: var(--dark-foreground-color);
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 20px;
`;

