'use client'
import { generatePosterCards } from "utils/cardbuilders";
import { ContentStripe } from "components";
import useRelatedMedia from "./useRelatedMedia";


function RelatedMedia({ media_type, media_id }) {

    const {urlBuilder, relatedData} = useRelatedMedia(media_type, media_id);

    return (
        <ContentStripe small urlBuilder={urlBuilder} more dataState={relatedData}
                       getContentCards={generatePosterCards}/>
    );
}

export default RelatedMedia;