'use client'

import React from "react";

function useTrendingSection() {
    const trendData = {
        today: {
            title: "Trending Today",
            endpoint: "all/day",
            button_text: "Today",
        },
        all_week: {
            title: "Trending All Week",
            endpoint: "all/week",
            button_text: "All Week"
        }
    }

    const [trendPeriod, setTrendPeriod] = React.useState(trendData.today);

    const {REACT_APP_API_KEY_TMDB: API_KEY_TMDB} = process.env;

    function endpointBuilder() {
        const endpoint = `https://api.themoviedb.org/3/trending/${trendPeriod.endpoint}?api_key=${API_KEY_TMDB}`;
        return endpoint;
    }

    return {endpointBuilder, trendData, setTrendPeriod}

}

export default useTrendingSection;