import { Title } from "components";
import {generateCreditsCards} from "utils/cardbuilders"
import {StyledEpisodesSection, CreditsGrid} from "./episodes.styled"

function EpisodesSection({media_info, media_id}) {
    return (
        <StyledEpisodesSection>
            <Title dataState={{title: "Episodes"}}/>
            <CreditsGrid>
                {generateCreditsCards(credits ? credits.crew : [])}
            </CreditsGrid>
        </StyledEpisodesSection>
    );
}

export default EpisodesSection;