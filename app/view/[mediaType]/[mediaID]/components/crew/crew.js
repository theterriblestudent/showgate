'use client';
import { Title, CreditsCard } from "components";
import {StyledCrewSection} from "./crew.styled"

function CrewSection() {
    return (
        <StyledCrewSection>
            <Title dataState={{title: "Crew"}}/>
            <CreditsCard credit_title="John Doe" department="Production" role="Creature Design"/>
        </StyledCrewSection>
    );
}

export default CrewSection;