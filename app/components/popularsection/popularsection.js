'use client'
import { ContentStripe } from "components";
import { generateMediaCards } from "utils/cardbuilders";
import usePopularSection from "./usePopularSection"
import { StyledPopularSection } from "./popularsection.styled";

function PopularSection() {

    const {popularData, urlBuilder, setPopularType, popularType} = usePopularSection();

    return (
        <StyledPopularSection>
            <ContentStripe urlBuilder={urlBuilder} controlOptions={popularData} 
                            setDataState={setPopularType} more dataState={popularType}
                            getContentCards={generateMediaCards}/>
        </StyledPopularSection>
    );
}

export default PopularSection;