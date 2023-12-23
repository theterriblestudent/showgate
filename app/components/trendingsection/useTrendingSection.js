'use client'

import React from "react";

function useTrendingSection() {
    const trendData = [
         {
            title: "Trending Today",
            endpoint: "all/day",
            button_text: "Today",
        },
        {
            title: "Trending All Week",
            endpoint: "all/week",
            button_text: "All Week"
        }
    ];

    const [trendPeriod, setTrendPeriod] = React.useState(trendData[0]);

    const {REACT_APP_API_KEY_TMDB: API_KEY_TMDB} = process.env;

    function urlBuilder() {
        const endpoint = `https://api.themoviedb.org/3/trending/${trendPeriod.endpoint}?api_key=f4b38564562890f30d78269e51e393a2`;
        return endpoint;
    }

    return {urlBuilder, trendData, setTrendPeriod, trendPeriod};

}

export default useTrendingSection;