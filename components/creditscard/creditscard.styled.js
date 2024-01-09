'use client';
import styled from "styled-components";
import { FlexContainer } from "components"

export const StyledCreditsCard = styled(FlexContainer).attrs({
    flex_direction: "column",
    align_content: "flex-start",
    justifiy_content: "space-between"
})`
    padding: 5px 10px;

    background: transparent;

    border-left: 4px solid var(--accent-color);

    h2 {
        font-size: 1rem;
        font-size: clamp(1rem, 0.94rem + 0.25vw, 1.125rem);
        font-family: var(--primary-font);
        font-weight: 700;
        color: var(--light-foreground-color);

        margin-bottom: 5px;

    }

    display: ${props => props.index > 17 ? "none" : "flex"} ;

`;

export const Department = styled(FlexContainer).attrs({gap: "10px"})`
    p:first-child {
        @media only screen and (max-width: 1200px) {
            display: none;
        }
    }

    p {
        font-size: 1rem;
        font-size: clamp(1rem, 0.94rem + 0.25vw, 1.125rem);
        font-family: var(--secondary-font);
        color: var(--dark-foreground-color);
        flex-shrink: 0;

        @media only screen and (max-width: 1200px) {
            flex-shrink: 1;
        }
    }

    div {
        width: 6px;
        height: 6px;
        background-color: var(--accent-color);

        border-radius: 50%;

        @media only screen and (max-width: 1200px) {
            display: none;
        }
    }
`
