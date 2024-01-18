'use client';
import styled from "styled-components";
import { FlexContainer } from "components"

export const StyledCreditsCard = styled.div`
    display: grid;
    grid-template-columns: repeat(11, 1fr);
      
    padding: 5px 10px;

    background: transparent;

    min-width: 0;

    border-left: 4px solid var(--accent-color);

    cursor: pointer;

    &:hover > .icon {
        color: var(--accent-color);
    }

    h2 {
        font-size: 1rem;
        font-size: clamp(1rem, 0.94rem + 0.25vw, 1.125rem);
        font-family: var(--primary-font);
        font-weight: 700;
        color: var(--light-foreground-color);

        margin-bottom: 5px;

        width: 100%;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: start;

        grid-column: span 10;

    }

    display: ${props => props.index > 17 ? "none" : "grid"} ;

    @media only screen and (max-width: 500px) {
        display: ${props => props.index > 7 ? "none" : "grid"} 
    }

    .icon {
        font-size: 1.1rem;
        color: var(--dark-foreground-color);

        grid-row: span 2;
        align-self: center;
        justify-self: end;

        transition: color 0.5s ease;

        cursor: pointer;

        &:hover {
            color: var(--accent-color);
        }
    }

`;

export const Department = styled(FlexContainer).attrs({gap: "10px"})`
    grid-column: span 10;

    p:first-child {
        @media only screen and (max-width: 1200px) {
            display: none;
        }

        @media only screen and (max-width: 500px) {
            display: block;
        }
    }

    p {
        font-size: 1rem;
        font-size: clamp(1rem, 0.94rem + 0.25vw, 1.125rem);
        font-family: var(--secondary-font);
        color: var(--dark-foreground-color);
        flex-shrink: 0;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: start;

        @media only screen and (max-width: 1200px) {
            flex-shrink: 1;
        }
    }

    .separator {
        width: 6px;
        height: 6px;
        background-color: var(--accent-color);

        border-radius: 50%;

        @media only screen and (max-width: 1200px) {
            display: none;
        }
        
        @media only screen and (max-width: 500px) {
            display: block;
        }
    }
`
