'use client'
import React from "react"
import useMergedRef from "@react-hook/merged-ref";
import { useInView } from "react-intersection-observer";
import useFetch from "hooks/useFetch"

function useContentStripe(urlBuilder, passedData) {

    const {ref, inView, entry} = useInView({
        triggerOnce: true
    })

    const fetchedData = useFetch(urlBuilder ? urlBuilder() : "", inView);

    const contentData =  urlBuilder ? fetchedData : passedData;

    const scrollableContainer = React.useRef();

    const mergedRef = useMergedRef(ref, scrollableContainer);

    function handleChevronClick(scroll_direction) {
        if(scroll_direction === 'LEFT')
            scrollableContainer.current.scrollLeft -= 650;
        else
            scrollableContainer.current.scrollLeft += 650;

    }

    return {contentData, mergedRef, inView, handleChevronClick, scrollableContainer};
    
}

export default useContentStripe;