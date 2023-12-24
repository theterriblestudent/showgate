'use client'
import { generateMediaCards } from "utils/cardbuilders";
import { ContentStripe } from "components";
import useNowShowingSection from "./useNowShowingSection"

function NowShowingSection() {

    const {nowShowingData, urlBuilder, setShowingType, showingType, contentStripeRef} = useNowShowingSection();

    return (
        <ContentStripe urlBuilder={urlBuilder} controlOptions={nowShowingData} 
                        setDataState={setShowingType} more dataState={showingType}
                        getContentCards={generateMediaCards} contentStripeRef={contentStripeRef}/>
    );
}

export default NowShowingSection;