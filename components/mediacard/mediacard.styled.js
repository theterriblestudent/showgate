'use client';

import styled from "styled-components";
import { FlexContainer } from "components";
import { FaStar, FaPlusCircle } from "react-icons/fa";


export const StyledMediaCard = styled.div`
    border-radius: 5px;

    width: 22rem;
    flex-shrink: 0;
    flex-grow: 0;

    position: relative;

    background-color: var(--light-background-color);

    @media only screen and (max-width: 968px) {
        background: transparent;
        width: 9.5rem;
    }
    img {
        width: 100%;
        height: 200px;

        border-radius: 5px 5px 0 0;

        @media only screen and (max-width: 968px) {
            border-radius: 8px;
            box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.7);
            height: auto;
        }
    }
`;

export const StyledMediaInfo = styled.div `
    padding: 5px 12px 5px 12px;
    max-width: 360px;

    @media only screen and (max-width: 968px) {
        display: none;

        background-color: transparent;
    }

`;

export const Title = styled.div`
    width: inherit;

    font-size: 1.25rem;
    font-size: clamp(1.25rem, 1rem + 0.800vw, 1.55rem);
    font-family: var(--secondary-font);
    font-weight: 600;
    text-overflow: ellipsis;
    color: var(--light-foreground-color);

    margin-bottom: 15px;

    white-space: nowrap;
    overflow: hidden;

    transition: color 0.5s;

    cursor: pointer;

    &:hover {
        color: var(--accent-color);
    }
`;

export const MobileReleaseDate = styled.h3`
    font-family: var(--secondary-font);
    font-size: 0.9rem;
    font-size: clamp(0.9rem, 0.817rem + 0.267vw, 1rem);
    font-weight: 500;

    color: var(--dark-foreground-color);

    display: none;

    margin-top: 10px;
    @media only screen and (max-width: 968px) {
        display: block;
    }
`;

export const Genres = styled(FlexContainer).attrs({gap:"5px"})`
    margin-bottom: 10px;

    grid-column: span 4;

    div {
        width: 5px;
        height: 5px;

        border-radius: 50%;

        margin-top: 3px;

        background-color: var(--accent-color);
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
    font-family: var(--secondary-font);
    color: var(--dark-foreground-color);
    font-size: 0.9rem;
    font-weight: 500;

    grid-column: span 4;

    margin-bottom: 20px;
`;

export const Star = styled(FaStar)`
    font-size: 1.15rem;
    color: var(--accent-color);
`;

export const AddButton = styled(FaPlusCircle)`
    font-size: 1.25rem;
    color: var(--accent-color);

    justify-self: end;
`;

export const MediaInfoGrid = styled.div`
    display: grid;
    width: 100%;

    grid-template-columns: repeat(5, 1fr);

    gap: 6px;
`;

export const RatingNumber = styled.h3`
    font-size: 17px;
    font-weight: bold;
    color: var(--dark-foreground-color);
    font-family: var(--primary-font);
`;

