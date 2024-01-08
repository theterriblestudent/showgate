'use client';
import styled from "styled-components";
import { FlexContainer } from "components"

export const StyledCreditsCard = styled(FlexContainer).attrs({
    flex_direction: "column",
    align_content: "flex-start",
    justifiy_content: "space-between"
})`
    padding: 10px;

    background: transparent;

    border-left: 5px solid var(--accent-color);

    h2 {
        font-size: 18px;
        font-family: var(--primary-font);
        color: var(--light-foreground-color);

        margin-bottom: 5px;

    }

`;

export const Department = styled(FlexContainer).attrs({gap: "10px"})`
    p {
        font-size: 18px;
        font-family: var(--secondary-font);
        color: var(--dark-foreground-color);
    }

    div {
        width: 5px;
        height: 5px;
        background-color: var(--accent-color);

        border-radius: 50%;
    }
`
