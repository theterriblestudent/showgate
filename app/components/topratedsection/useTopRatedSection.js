'use client'

import React from "react";

function useTopRatedSection() {
    const topRatedData = [
         {
            title: "Top Rated Movies",
            endpoint: "movie/top_rated",
            button_text: "Movies",
        },
        {
            title: "Top Rated Shows",
            endpoint: "tv/top_rated",
            button_text: "TV Shows"
        }
    ];

    const [topRatedType, setTopRatedType] = React.useState(topRatedData[0]);

    const {REACT_APP_API_KEY_TMDB: API_KEY_TMDB} = process.env;

    function urlBuilder() {
        const endpoint = `https://api.themoviedb.org/3/${topRatedType.endpoint}?api_key=f4b38564562890f30d78269e51e393a2`;
        return endpoint;
    }

    return {urlBuilder, topRatedData, setTopRatedType, topRatedType};

}

export default useTopRatedSection;