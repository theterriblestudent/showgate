'use client'

import React from "react";

function useNowShowingSection() {

    const contentStripeRef = React.useRef();

    React.useLayoutEffect(() => {
        contentStripeRef.current.style.background = "red";
    }, [])

    const nowShowingData = [
         {
            title: "In Theaters",
            endpoint: "movie/now_playing",
            button_text: "Theaters",
        },
        {
            title: "Airing on TV",
            endpoint: "tv/on_the_air",
            button_text: "Airing"
        }
    ];

    const [showingType, setShowingType] = React.useState(nowShowingData[0]);

    function urlBuilder() {
        const endpoint = `https://api.themoviedb.org/3/${showingType.endpoint}?api_key=f4b38564562890f30d78269e51e393a2`;
        return endpoint;
    }

    return {urlBuilder, nowShowingData, setShowingType, showingType, contentStripeRef};

}

export default useNowShowingSection;