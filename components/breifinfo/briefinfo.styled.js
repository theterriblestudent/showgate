'use client'

import styled from "styled-components"
import { FaStar } from "react-icons/fa";
import { FlexContainer } from "components";

export const StyledBriefInfo = styled(FlexContainer).attrs({
    justify_content: "center"
})`
    gap: ${props => props.small ? "clamp(0.3rem, 0.01rem + 0.8vw, 0.7rem)" : "clamp(0.3rem, -0.175rem + 1.9vw, 1.25rem)"};
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
        font-size: ${props => props.small ? "clamp(1.15rem, 1.075rem + 0.3vw, 1.3rem)" : "clamp(1.2rem, 0.9846rem + 0.9846vw, 1.6rem)"};
        color: var(--light-foreground-color);
        cursor: default;
    }
`;

export const StyledStar = styled(FaStar)`
    color: var(--accent-color);

    font-size: ${props => props.small ? "clamp(1.1rem, 0.9rem + 0.8vw, 1.5rem)" : "clamp(1.15rem, 0.83rem + 1.3vw, 1.8rem)"};
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
    font-size:${props => props.small ? "clamp(1.2rem, 1.125rem + 0.3vw, 1.35rem)" : "clamp(1.1rem, 0.9385rem + 0.7385vw, 1.4rem)"};
    cursor: default;
`;

export const StyledRuntime = styled(StyledReleaseYear)`
    flex-shrink: 0;
`;