'use client'
import { generateMediaCards } from "utils/mediaCardBuilder";
import { ContentStripe } from "components";
import useTrendingSection from "./useTrendingSection";

function TrendingSection() {

    const {trendData, urlBuilder, setTrendPeriod, trendPeriod} = useTrendingSection();

    return (
        <div className="full-width" style={{marginTop: "-160px"}}>
            <ContentStripe urlBuilder={urlBuilder} controlOptions={trendData} 
                           setDataState={setTrendPeriod} more dataState={trendPeriod}
                           getContentCards={generateMediaCards}/>
        </div>
    );
}

export default TrendingSection;