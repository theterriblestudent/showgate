'use client';

import styled from "styled-components"
import {GridContainer, FlexContainer} from 'components';

export const StyledContentStripe = styled(GridContainer).attrs({className: "full-width container-grid"})`
    margin-bottom: 80px;

    @media only screen and (max-width: 968px) {
        margin-bottom: 45px;
    } 

    position: relative;

    .chevron {
        position: absolute;
        top: 40%;
        transform: translateY(-50%);

        font-size: 2rem;

        color: var(--accent-color);

        z-index: 500;

        @media only screen and (max-width: 968px) {
            display: none;
        }
    }

    .left-chevron {
        left: 0;
        transform: translateX(-50%);
    }

    .right-chevron {
        right: 0;
    }
`;

export const ScrollableContainer = styled(FlexContainer).attrs({
    className: "full-width",
    gap:"20px",
    align_content: "start"
})`
    flex-wrap: nowrap;
    overflow-x: scroll;

    min-height: 200px;
    min-width: 99%;

    width: 99%;
    margin: 0 auto;

    margin-top: 40px;
    padding-left: 4.5%;

    border-radius: 7px 7px 0 0;

    scroll-behavior: smooth;

    @media only screen and (max-width: 968px) {
        margin-top: 20px;
        padding-left: 5%;
    }

    &::-webkit-scrollbar {
        display: none;
    }

    position: relative;

`;
