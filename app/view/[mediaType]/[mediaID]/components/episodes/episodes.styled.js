'use client';
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

import { StyledCrewSection, CreditsGrid } from "../crew/crew.styled";

export const StyledEpisodesSection = styled(StyledCrewSection).attrs({
    className: "full-width",
    small: true,
    align_content: "start"})``;

export const StyledStar = styled(FaStar)`
    color: var(--accent-color);
    size: 0.9rem;
    flex-shrink: 0;
`
    
export { CreditsGrid };