'use client'

import { ContentStripe } from "components";
import useTrendingSection from "./useTrendingSection";

function TrendingSection() {

    const {trendData, endpointBuilder, setTrendPeriod, trendPeriod} = useTrendingSection();

    return (
        <ContentStripe 
            endpointBuilder={endpointBuilder} controlOptions={trendData} 
            setDataState={setTrendPeriod} more dataState={trendPeriod}/>
    );
}

export default TrendingSection;