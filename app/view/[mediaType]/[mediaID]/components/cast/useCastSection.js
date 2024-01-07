'use client';

function useCastSection() {
    const castData = {title: "Top Cast"}

    function urlBuilder() {
        return "https://api.themoviedb.org/3/person/popular?api_key=f4b38564562890f30d78269e51e393a2&language=en-US&page=1"
    }

    return {castData, urlBuilder}
}

export default useCastSection;