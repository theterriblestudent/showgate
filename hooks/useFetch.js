'use client';

import React from "react";

function useFetch(url, inView=true) {
    const [fetchedData, setFetchedData] = React.useState(null);

    React.useEffect(() => {
        if (inView) {
            fetch(url)
            .then((response) => response.json())
            .then(data => setFetchedData(data))
            .catch(error => console.log(error));
        }
    }, [url, inView]);

    return fetchedData;
}

export default useFetch;