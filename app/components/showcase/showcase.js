'use client';

import { BriefInfo, Overlay } from "components";
import { StyledShowcase, MovieInfo } from "./showcase.styled";
import useShowcase from "./useShowcase";

function ShowcaseSection() {
    const {showcaseMovie, overlay_styles} = useShowcase();
    
    return(
        <StyledShowcase showcaseMovie={showcaseMovie}>
            <Overlay className="full-width" width="100%" height="100%" styles={overlay_styles} />
            <MovieInfo>
                {showcaseMovie && <img src={showcaseMovie.logo} alt="" />}
                {showcaseMovie && (
                    <BriefInfo releaseYear={showcaseMovie.releaseYear}
                               rating={showcaseMovie.score}
                               PG={showcaseMovie.rating}
                               runtime={showcaseMovie.runtime}
                    />
                )}
            </MovieInfo>
        </StyledShowcase>
    )
}

export default ShowcaseSection;