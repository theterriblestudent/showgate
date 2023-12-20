'use client'

import { ContentStripe } from "components";
import useTrendingSection from "./useTrendingSection";

function TrendingSection() {

    const {trendData, endpointBuilder, setTrendPeriod} = useTrendingSection();

    return (
        <ContentStripe 
            endpointBuilder={endpointBuilder} controlOptions={trendData} 
            setDataState={setTrendPeriod} more/>
    );
}

export default TrendingSection;