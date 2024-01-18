'use client';

import styled from "styled-components"
import {GridContainer, FlexContainer} from 'components';

export const StyledContentStripe = styled(GridContainer).attrs({className: "full-width container-grid"})`
    margin-bottom: 70px;

    @media only screen and (max-width: 968px) {
        margin-bottom: 0px;
    }

    position: relative;

    .chevron {
        position: absolute;
        top: 105%;

        font-size: 1.5rem;

        color: var(--accent-color);

        z-index: 500;

        @media only screen and (max-width: 968px) {
            display: none;
        }
    }

    .left-chevron {
        right: 50%;
        transform: translateX(-20%);
    }

    .right-chevron {
        left: 50%;
        transform: translateX(20%);
    }
`;

export const ScrollableContainer = styled(FlexContainer).attrs({
    gap:"20px",
    align_content: "start"
})`
    flex-wrap: nowrap;
    overflow-x: scroll;

    min-height: 200px;
    min-width: 99%;

    width: 99%;
    margin: 0 auto;

    margin-top: 20px;

    padding-left: ${props => props.small ? "0" : "4.5%"};

    grid-column: ${props => {
        if (props.small) {
            if (props.breakout) 
                return "breakout";
            return "content"
        } else return "full-width";
    }} !important;

    border-radius: 7px 7px 0 0;

    scroll-behavior: smooth;

    transition: opacity 0.25s;

    @media only screen and (max-width: 968px) {
        margin-top: 20px;
        padding-left: ${props => props.small ? "0" : "5%"};

        gap: 15px;
    }

    &::-webkit-scrollbar {
        display: none;
    }

    position: relative;

`;
