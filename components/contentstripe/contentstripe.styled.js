'use client';

import styled from "styled-components"
import {GridContainer, FlexContainer} from 'components';

export const StyledContentStripe = styled(GridContainer).attrs({className: "full-width container-grid"})`
    padding: 50px 0 50px 0;
    position: relative;

    .chevron {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        font-size: 2rem;

        color: var(--accent-color);

        z-index: 500;
    }

    .left-chevron {
        left: 0;
        transform: translateX(-50%);
    }

    .right-chevron {
        right: 0;
    }
`;

export const ScrollableContainer = styled(FlexContainer).attrs({className: "full-width", gap:"20px"})`
    flex-wrap: nowrap;
    overflow-x: scroll;

    min-height: 400px;
    min-width: 99%;

    width: 99%;
    margin: 0 auto;

    margin-top: 15px;
    padding-left: 5%;

    border-radius: 7px 7px 0 0;

    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none;
    }

    position: relative;

`;
