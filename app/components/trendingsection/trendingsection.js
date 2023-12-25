'use client'

import { ContentStripe } from "components";
import { generateMediaCards } from "utils/cardbuilders";
import useTrendingSection from "./useTrendingSection";
import { StyledTrendingSection } from "./trendingsection.styled";

function TrendingSection() {

    const {trendData, urlBuilder, setTrendPeriod, trendPeriod} = useTrendingSection();

    return (
        <StyledTrendingSection>
            <ContentStripe urlBuilder={urlBuilder} controlOptions={trendData} 
                           setDataState={setTrendPeriod} more dataState={trendPeriod}
                           getContentCards={generateMediaCards}/>
        </StyledTrendingSection>
    );
}

export default TrendingSection;