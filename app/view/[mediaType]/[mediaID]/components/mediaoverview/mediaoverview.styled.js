'use client';
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { GridContainer, FlexContainer, Button } from "components";

export const StyledMediaOverview = styled(GridContainer).attrs({className: "full-width"})`
    min-height: 50vh;
    padding-bottom: 50px;

    background-image: ${props => {
            if (props.backdrop_path)
                return `url(https://image.tmdb.org/t/p/w1280${props.backdrop_path})`;
            else
                return "none";
            }
        };

    @media only screen and (max-width: 968px) {
        background-image: ${props => {
            if (props.backdrop_path)
                return `url(https://image.tmdb.org/t/p/w500${props.poster_path})`;
            else
                return "none";
            }
        };
    }
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

export const OverviewContent = styled(FlexContainer).attrs({
    justifiy_content: "space-between",
    gap:"40px"
})`
    position: relative;
    z-index: 4;
    padding-top: 110px;

    @media only screen and (max-width: 968px) {
        padding-top: 130px;
    }

    img {
        width: clamp(16.875rem, 15.536rem + 4.286vw, 18.75rem);
        border-radius: 3px;
        @media only screen and (max-width: 968px){
            display: none;
        }
    }
`

export const StyledMediaInfo = styled(FlexContainer).attrs({
    flex_direction: "column",
    justifiy_content: "center",
    align_content: "flex-start",
    gap: "1.5rem",
})`
    h1, h2 {
        color: var(--light-foreground-color);
        font-family: var(--primary-font);
        font-weight: bold;
    }

    h1 {
        font-size: 1.8rem;
        font-size: clamp(1.8rem, 1.3rem + 1.6vw, 2.5rem);
    }

    h2 {
        font-size: 1.45rem;
        font-size: clamp(1.45rem, 1.129rem + 1.029vw, 1.9rem);

        @media only screen and (max-width: 968px) {
            margin-bottom: -12px;
            margin-top: 7px;
        }
    }
`;

export const WatchlistButton = styled(Button).attrs({button_type: "accent"})`
    @media only screen and (max-width: 968px) {
        display: none;
    }
`;

export const WatchlistButtonMobile = styled(Button).attrs({button_type: "accent"})`
    display: none;

    padding: 5px;
    margin-right: 5px;

    border-radius: 50%;

    @media only screen and (max-width: 968px) {
        display: block;
    }
`;

export const StyledPlus = styled(FaPlus)`
    font-size: 0.95rem;
    color: var(--light-foreground-color);
`;

export const StyledSynopsis = styled.p`
    font-family: var(--secondary-font);
    font-size: 1rem;
    font-size: clamp(1rem, 0.911rem + 0.286vw, 1.125rem);
    color: var(--light-foreground-color);
    
    max-width: 95%;
    
    @media only screen and (max-width: 968px){
        line-height: 1.6rem;
    }
`;