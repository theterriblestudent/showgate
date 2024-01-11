'use client';
import styled from "styled-components";

import { StyledCrewSection, CreditsGrid } from "../crew/crew.styled";

export const StyledEpisodesSection = styled(StyledCrewSection).attrs({
    className: "full-width",
    small: true,
    align_content: "start"})``;
    
export { CreditsGrid };