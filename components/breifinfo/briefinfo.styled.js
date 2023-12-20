'use client'

import styled from "styled-components"
import { FlexContainer } from "components";

export const StyledBriefInfo = styled(FlexContainer).attrs({
    gap: "clamp(0.313rem, -0.357rem + 2.143vw, 1.25rem)",
    justify_content: "center"
})`
    font-family: var(--secondary-font);
    width: 100%;
    @media only screen and (max-width: 968px) {
        gap: 10px;
    }
`;

export const StyledRating = styled(FlexContainer).attrs({
    justify_content: "center",
    gap: "5px"
})`
    h4 {
        font-size: clamp(1.2rem, 0.9846rem + 0.9846vw, 1.6rem);
        color: var(--light-foreground-color);
        cursor: default;
    }
`;

export const StyledPG = styled.p`
    padding: 5px;
    border: 2px solid var(--light-foreground-color);
    border-radius: 5px;
    flex-shrink: 0;
    font-size: clamp(0.9rem, 0.792rem + 0.492vw, 1.1rem);
    color: var(--light-foreground-color);
    cursor: default;
`;

export const StyledSeperator = styled.div`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--accent-color);
    flex-shrink: 0;
`;

export const StyledReleaseYear = styled.p`
    color: var(--light-foreground-color);
    font-size: clamp(1.1rem, 0.9385rem + 0.7385vw, 1.4rem);
    cursor: default;
`;

export const StyledRuntime = styled(StyledReleaseYear)`
    flex-shrink: 0;
`;