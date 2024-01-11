import { Title } from "components";
import {generateEpisodeCards} from "utils/cardbuilders"
import useEpisodesSection from "./useEpisodesSection";
import {StyledEpisodesSection, CreditsGrid} from "./episodes.styled"

function EpisodesSection({media_info}) {

    const {season, seasonData, setSeason, data} = useEpisodesSection(media_info)
    return (
        <StyledEpisodesSection>
            <Title dataState={season} setDataState={setSeason} controlOptions={seasonData} dd_test/>
            <CreditsGrid>
               {data ? generateEpisodeCards(data.episodes) : []}
            </CreditsGrid>
        </StyledEpisodesSection>
    );
}

export default EpisodesSection;