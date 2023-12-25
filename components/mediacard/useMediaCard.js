'use client';
import React from "react";
import { useInView } from "react-intersection-observer";
import useFetch from "hooks/useFetch";

function useMediaCard(media_info) {
    const {ref, inView, entry} = useInView({
        triggerOnce: true
    })

    function getMediaType() {
        return media_info.release_date ? "movie" : "tv";
    }

    function releaseDateHelper() {
        return (
            getMediaType() === "movie" ? media_info.release_date : media_info.first_air_date
        );
    }

    const data = useFetch(`https://api.themoviedb.org/3/${getMediaType()}/${media_info.id}?api_key=f4b38564562890f30d78269e51e393a2&language=en-US`);

    function getGenres() {
        if (!data) return <p>Getting Genres...</p>;
        return (
            data.genres.slice(0, 2).map((genre, index) => {
                if (index === data.genres.slice(0, 2).length - 1)
                    return <p>{genre.name}</p>
                else return (
                    <React.Fragment>
                        <p>{genre.name}</p>
                        <div/>
                    </React.Fragment>
                )
            })
        );
    };

    return {getGenres, releaseDateHelper};
}

export default useMediaCard;
