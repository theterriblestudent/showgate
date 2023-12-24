'use client'
import { generateMediaCards } from "utils/cardbuilders";
import { ContentStripe } from "components";
import useTopRatedSection from "./useTopRatedSection";

function TopRatedSection() {

    const {topRatedType, urlBuilder, setTopRatedType, topRatedData} = useTopRatedSection();

    return (
        <ContentStripe urlBuilder={urlBuilder} controlOptions={topRatedData} 
                        setDataState={setTopRatedType} more dataState={topRatedType}
                        getContentCards={generateMediaCards}/>
    );
}

export default TopRatedSection;