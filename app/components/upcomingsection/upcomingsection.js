'use client'
import { generateMediaCards } from "utils/cardbuilders";
import { ContentStripe } from "components";
import useUpcomingSection from "./useUpcomingSection";

function UpcomingSection() {

    const {urlBuilder, upcomingData} = useUpcomingSection();

    return (
        <ContentStripe urlBuilder={urlBuilder} more dataState={upcomingData}
                       getContentCards={generateMediaCards}/>
    );
}

export default UpcomingSection;