'use client';

function useUpcomingSection() {
    const upcomingData = {title: "Upcoming Movies"}

    function urlBuilder() {
        return "https://api.themoviedb.org/3/movie/upcoming?api_key=f4b38564562890f30d78269e51e393a2"
    }

    return {upcomingData, urlBuilder}
}

export default useUpcomingSection;