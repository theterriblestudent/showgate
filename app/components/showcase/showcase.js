'use client';

import { Overlay } from "components";
import { StyledShowcase } from "./showcase.styled";
import useShowcase from "./useShowcase";

function ShowcaseSection() {
    const {showcaseMovie, overlay_styles} = useShowcase();
    
    return(
        <StyledShowcase showcaseMovie={showcaseMovie}>
            <Overlay width="100%" height="100%" styles={overlay_styles} />
        </StyledShowcase>
    )
}

export default ShowcaseSection;