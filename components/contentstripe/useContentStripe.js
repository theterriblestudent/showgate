'use client'

import useFetch from "hooks/useFetch"

function useContentStripe(urlBuilder) {
    const data = useFetch(urlBuilder());

    return data;
    
}

export default useContentStripe;