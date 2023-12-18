'use client';

import styled from "styled-components";

export const StyledShowcase = styled.section.attrs({className:"full-width"})`
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
    }

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;
