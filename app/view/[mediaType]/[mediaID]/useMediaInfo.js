'use client';

import useFetch from "hooks/useFetch";

function useMediaInfo(route_params) {
    const credits = useFetch(`https://api.themoviedb.org/3/${route_params.mediaType}/${route_params.mediaID}/credits?api_key=f4b38564562890f30d78269e51e393a2&language=en-US`);
    const mediaInfo = useFetch(`https://api.themoviedb.org/3/${route_params.mediaType}/${route_params.mediaID}?api_key=f4b38564562890f30d78269e51e393a2&language=en-US`)

    return {credits, mediaInfo};
}

export default useMediaInfo;