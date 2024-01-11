import useFetch from "hooks/useFetch";
import React from "react";

function useEpisodesSection(media_info) {
    const [season, setSeason] = React.useState({title: "Episodes", endpoint: `/1`, button_text: "S01"})
    const data = useFetch(urlBuilder());

    const seasonData = media_info.seasons.filter(season => season.name !== "Specials").map(season => {
        return ({
            title: "Episodes",
            endpoint: `/${season.season_number}`,
            button_text: (season.season_number > 9) ? `S${season.season_number}` : `S0${season.season_number}`
        })
    })

    console.log(seasonData);


    function urlBuilder() {
        return `https://api.themoviedb.org/3/tv/${media_info.id}/season${season.endpoint}?api_key=f4b38564562890f30d78269e51e393a2`;
    }

    return {seasonData, setSeason, season, data};
}

export default useEpisodesSection;