'use client';

import React from "react";

function useFetch(url) {
    const [fetchedData, setFetchedData] = React.useState(null);

    React.useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then(data => setFetchedData(data))
        .catch(error => console.log(error));
    }, [url]);

    return fetchedData;
}

export default useFetch;