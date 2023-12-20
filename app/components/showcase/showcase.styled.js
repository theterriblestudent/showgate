'use client';

import styled from "styled-components";
import { FlexContainer, GridContainer } from "components";

export const StyledShowcase = styled(GridContainer).attrs({className:"full-width container-grid"})`
    position: relative;
    width: 100%;
    height: 100vh;

    @media only screen and (min-width: 968px) {
        background-image: ${props => {
            if (props.showcaseMovie)
                return `url(${props.showcaseMovie.backdrop})`;
            else
                return "none";
            }
        };
    }

    @media only screen and (max-width: 968px) {
        background-image: ${props => {
            if (props.showcaseMovie)
                return `url(${props.showcaseMovie.poster})`;
            else
                return "none";
            }
        };

        height: 60vh;
        margin-bottom: 35px;

        align-items: end;
        justify-items: center;
    }

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

export const MovieInfo = styled(FlexContainer).attrs({justify_content: "center", flex_direction: "column"})`
    width: 18.75rem;
    width: clamp(18.75rem, 14.97844827586207rem + 17.241379310344826vw, 34.375rem);
    gap: 0.5rem;
    gap: clamp(0.5rem, 0.31896551724137934rem + 0.8275862068965516vw, 1.25rem);
    
    position: relative;
    z-index: 2;

    img {width: 100%};

    @media only screen and (max-width: 968px) {
        transform: translateY(-25px);
    }
`;
