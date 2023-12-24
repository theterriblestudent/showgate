'use client'
import { generatePeoplesCards } from "utils/cardbuilders";
import { ContentStripe } from "components";
import usePopularPeopleSection from "./usePopularPeopleSection";


function PopularPeopleSection() {

    const {urlBuilder, peopleData} = usePopularPeopleSection();

    return (
        <ContentStripe urlBuilder={urlBuilder} more dataState={peopleData}
                       getContentCards={generatePeoplesCards}/>
    );
}

export default PopularPeopleSection;