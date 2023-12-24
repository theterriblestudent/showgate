'use client';

function usePopularPeopleSection() {
    const peopleData = {title: "Popular People"}

    function urlBuilder() {
        return "https://api.themoviedb.org/3/person/popular?api_key=f4b38564562890f30d78269e51e393a2&language=en-US&page=1"
    }

    return {peopleData, urlBuilder}
}

export default usePopularPeopleSection;