import { Title } from "components";
import {generateEpisodeCards} from "utils/cardbuilders"
import useEpisodesSection from "./useEpisodesSection";
import {StyledEpisodesSection, CreditsGrid} from "./episodes.styled"

function EpisodesSection({media_info}) {

    const {season, seasonData, setSeason, data, getEpisodeRatings, containerRef} = useEpisodesSection(media_info)
    return (
        <StyledEpisodesSection>
            <Title dataState={season} setDataState={setSeason}
                   controlOptions={seasonData} scrollableContainer={containerRef}/>
                   
            <CreditsGrid ref={containerRef}>
               {data ? generateEpisodeCards(data.episodes, getEpisodeRatings) : []}
            </CreditsGrid>
        </StyledEpisodesSection>
    );
}

export default EpisodesSection;