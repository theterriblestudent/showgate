'use client'

import styled from 'styled-components';
import {FlexContainer} from "components";

export const StyledPeoplesCard = styled(FlexContainer).attrs({flex_direction: "column"})`
    width: clamp(8.75rem, 7.45rem + 4.17vw, 10.3125rem);
    background-color: var(--light-background-color);
    border-radius: 8px;
    padding-bottom: 8px;
    flex-shrink: 0;
    img {
        width: 100%;
        aspect-ratio: 3 / 3.5;
        object-fit: cover;
        object-position: center;
        margin-bottom: 8px;
        border-radius: 8px 8px 0 0;
     }
    p {
        font-family: var(--secondary-font);
        color: var(--light-foreground-color);
        font-size: 1rem;
        font-size: clamp(1rem, 0.92rem + 0.23vw, 1.1rem);
        font-weight: 600;
        text-align: center;
        transition: color 0.5s;
        &:hover {color: var(--accent-color)}
    }
`;