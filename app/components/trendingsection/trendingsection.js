'use client'
import { generateMediaCards } from "utils/mediaCardBuilder";
import { ContentStripe } from "components";
import useTrendingSection from "./useTrendingSection";

function TrendingSection() {

    const {trendData, urlBuilder, setTrendPeriod, trendPeriod} = useTrendingSection();

    return (
        <ContentStripe 
            urlBuilder={urlBuilder} controlOptions={trendData} 
            setDataState={setTrendPeriod} more dataState={trendPeriod}
            getContentCards={generateMediaCards}/>
    );
}

export default TrendingSection;