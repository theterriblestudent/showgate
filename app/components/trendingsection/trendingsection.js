'use client'

import { ContentStripe } from "components";
import { generateRankCards } from "utils/cardbuilders";
import useTrendingSection from "./useTrendingSection";

function TrendingSection() {

    const {trendData, urlBuilder, setTrendPeriod, trendPeriod} = useTrendingSection();

    return (
        <ContentStripe urlBuilder={urlBuilder} controlOptions={trendData} 
                        setDataState={setTrendPeriod} more dataState={trendPeriod}
                        getContentCards={generateRankCards}/>
    );
}

export default TrendingSection;