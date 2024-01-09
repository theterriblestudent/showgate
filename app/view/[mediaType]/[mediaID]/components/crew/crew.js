'use client';
import { Title } from "components";
import {generateCreditsCards} from "utils/cardbuilders"
import {StyledCrewSection, CreditsGrid} from "./crew.styled"

function CrewSection({credits}) {
    return (
        <StyledCrewSection>
            <Title dataState={{title: "Crew"}}/>
            <CreditsGrid>
                {generateCreditsCards(credits ? credits.crew : [])}
            </CreditsGrid>
        </StyledCrewSection>
    );
}

export default CrewSection;