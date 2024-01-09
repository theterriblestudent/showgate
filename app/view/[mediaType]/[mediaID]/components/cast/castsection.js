'use client'
import { generateCastCards } from "utils/cardbuilders";
import { ContentStripe } from "components";
import useCastSection from "./useCastSection";


function CastSection({credits}) {

    const { castData } = useCastSection();

    return (
            <ContentStripe small more dataState={castData}
                           getContentCards={generateCastCards} data={credits ? credits.cast : null}/>
    );
}

export default CastSection;