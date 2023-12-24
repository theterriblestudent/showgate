'use client'
import { generateMediaCards } from "utils/cardbuilders";
import { ContentStripe } from "components";
import usePopularSection from "./usePopularSection"

function PopularSection() {

    const {popularData, urlBuilder, setPopularType, popularType} = usePopularSection();

    return (
        <ContentStripe urlBuilder={urlBuilder} controlOptions={popularData} 
                        setDataState={setPopularType} more dataState={popularType}
                        getContentCards={generateMediaCards}/>
    );
}

export default PopularSection;