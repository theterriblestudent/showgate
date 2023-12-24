'use client'
import React from "react"

import useFetch from "hooks/useFetch"

function useContentStripe(urlBuilder) {
    const data = useFetch(urlBuilder());

    const scrollableContainer = React.useRef();

    function handleChevronClick(scroll_direction) {
        if(scroll_direction === 'LEFT')
            scrollableContainer.current.scrollLeft -= 650;
        else
            scrollableContainer.current.scrollLeft += 650;

    }

    return {data, scrollableContainer, handleChevronClick};
    
}

export default useContentStripe;