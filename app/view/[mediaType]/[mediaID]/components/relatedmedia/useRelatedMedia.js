'use client';

function useRelatedMedia(mediaType, mediaID) {
    const relatedData = {title: "Related"}

    function urlBuilder() {
        return `https://api.themoviedb.org/3/${mediaType}/${mediaID}/similar?api_key=f4b38564562890f30d78269e51e393a2&language=en-US&page=1`
    }

    return {relatedData, urlBuilder}
}

export default useRelatedMedia;