'use client';
import React from "react";
import { css } from "styled-components";

import useFetch from "hooks/useFetch";

function useMediaOverview(mediaType, mediaID, credits) {
    const [ageRating, setAgeRating] = React.useState("NR");

    const ratingsInfo = useFetch(getRatingsUrl());
    const countryCode = useFetch("https://extreme-ip-lookup.com/json/?key=1lJK3nb07ilkdyWbd2ki", true, {countryCode: "US"});

    React.useEffect(() => {
        let regionData;

        if(ratingsInfo && countryCode) {
            if (ratingsInfo.results.length > 0) {
                regionData = ratingsInfo.results.find(e => e.iso_3166_1 === countryCode.countryCode) ||
                    ratingsInfo.results.find(e => e.iso_3166_1 === 'US') ||
                    ratingsInfo.results[0];
            
            if (mediaType === 'movie') {
                if (regionData.release_dates.length > 0) {
                    setAgeRating(regionData.release_dates[0].certification || 'NR');
                }
            } else if (mediaType === 'tv') {
                    setAgeRating(regionData.rating || 'NR');
                }
            }
        }


    }, [ratingsInfo, countryCode]);


    function getRatingsUrl() {
        return `https://api.themoviedb.org/3/${mediaType}/${mediaID}/${mediaType === 'tv' ? 'content_ratings' : 'release_dates'}?api_key=f4b38564562890f30d78269e51e393a2`;
    }
    
    function getDepartmentMembers(department) {
        let departmentMembers;

        if (credits) {
            departmentMembers = Array.from(new Set(
                credits.crew.filter(unit => unit.known_for_department === department)
                .map(member => member.name)));
            
                return (departmentMembers.length > 0) ? departmentMembers.slice(0, 2) : ["N/A"];
        }

        return ["Loading..."];
    }

    const overlayStyles = css`
        background-color: rgba(0, 0, 0, 0.95);
    `;
    

    return { overlayStyles, ageRating, getDepartmentMembers };
}

export default useMediaOverview;