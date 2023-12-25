'use client'
import React from "react"
import useMergedRef from "@react-hook/merged-ref";
import { useInView } from "react-intersection-observer";
import useFetch from "hooks/useFetch"

function useContentStripe(urlBuilder) {

    const {ref, inView, entry} = useInView({
        triggerOnce: true
    })

    const data = useFetch(urlBuilder(), inView);

    const scrollableContainer = React.useRef();

    const mergedRef = useMergedRef(ref, scrollableContainer);

    function handleChevronClick(scroll_direction) {
        if(scroll_direction === 'LEFT')
            scrollableContainer.current.scrollLeft -= 650;
        else
            scrollableContainer.current.scrollLeft += 650;

    }

    return {data, mergedRef, inView, handleChevronClick};
    
}

export default useContentStripe;