import React from "react";
import { BriefInfo } from "components"; 
import { getRealeaseYear, getRuntime } from "utils/date";
import useMediaOverview from "./useMediaOverview";
import { Overlay, Loader, FlexContainer } from "components";
import {  StyledMediaInfo, StyledSynopsis } from "./mediaoverview.styled"
import { StyledMediaOverview, OverviewContent } from "./mediaoverview.styled";
import { WatchlistButton, WatchlistButtonMobile, StyledPlus } from "./mediaoverview.styled";
import Credits from "./components/credits/credits";

function MediaOverview ({credits, media_type, media_id, media_info}) {

    const { overlayStyles, ageRating, getDepartmentMembers } = useMediaOverview(media_type, media_id, credits);

    return (
        <StyledMediaOverview small backdrop_path={media_info ? media_info.backdrop_path : ""}
                             poster_path={media_info ? media_info.poster_path: ""}>
        <Overlay className="full-width" width="100%" height="100%" styles={overlayStyles} />
            <OverviewContent>
                {
                    (!media_info) ? 
                    <Loader /> : (
                    <React.Fragment>
                        <img src={`http://image.tmdb.org/t/p/w342${media_info.poster_path}`} alt="Poster"/>
                        <StyledMediaInfo>
                            <h1>{media_info.title || media_info.name}</h1>
                            <FlexContainer align_content="flex-start" gap="20px">
                                <WatchlistButton>Watchlist</WatchlistButton>
                                <WatchlistButtonMobile><StyledPlus /></WatchlistButtonMobile>
                                <BriefInfo rating={media_info.vote_average} small
                                            releaseYear={getRealeaseYear(media_info.release_date || media_info.first_air_date)}
                                            runtime={getRuntime(media_info.runtime || media_info.episode_run_time[0])}
                                            PG={ageRating}/>
                            </FlexContainer>
                            <h2>Overview</h2>
                            <StyledSynopsis>
                                {media_info.overview}
                            </StyledSynopsis>
                            <FlexContainer align_content="flex-start" flex_direction="column" gap="clamp(0.625rem, 0.179rem + 1.429vw, 1.25rem)" >
                                <Credits values={getDepartmentMembers("Writing")} value_key="Writer" />
                                <Credits values={getDepartmentMembers("Directing")} value_key="Director" />
                            </FlexContainer>
                        </StyledMediaInfo>
                    </React.Fragment>
                    )
                }
            </OverviewContent>
        </StyledMediaOverview>
    )
}

export default  MediaOverview;