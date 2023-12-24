'use client'

import React from "react";

function usePopularSection() {
    const popularData = [
         {
            title: "Popular Movies",
            endpoint: "movie/popular",
            button_text: "Movies",
        },
        {
            title: "Popular TV Shows",
            endpoint: "tv/popular",
            button_text: "TV Shows"
        }
    ];

    const [popularType, setPopularType] = React.useState(popularData[0]);

    const {REACT_APP_API_KEY_TMDB: API_KEY_TMDB} = process.env;

    function urlBuilder() {
        const endpoint = `https://api.themoviedb.org/3/${popularType.endpoint}?api_key=f4b38564562890f30d78269e51e393a2`;
        return endpoint;
    }

    return {urlBuilder, popularData, setPopularType, popularType};

}

export default usePopularSection;