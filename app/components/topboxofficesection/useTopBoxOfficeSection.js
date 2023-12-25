'use client';

function useTopBoxOfficeSection() {
    const boxOfficeData = {title: "Upcoming Movies"}

    function urlBuilder() {
        return "https://api.themoviedb.org/3/movie/upcoming?api_key=f4b38564562890f30d78269e51e393a2"
    }

    return {boxOfficeData, urlBuilder}
}

export default useTopBoxOfficeSection;