'use client';

import React from "react";

function useSearchForm() {
    const [searchQuery, setSearchQuery] = React.useState("");
    const [isFormOpen, setFormState] = React.useState(false);

    function handleSearch(event) {
        setSearchQuery(event.target.value);
    }

    function handleSearchButtonClick() {
        const clientWidth = document.querySelector("body").clientWidth;
        const searchForm = document.querySelector(".search-form");
        const brandingContainer = document.querySelector(".branding-container");
        const navbarContent = document.querySelector(".navbar-content");


        if (clientWidth < 968 ) {
            if (!isFormOpen) {
                setFormState(!isFormOpen);

                brandingContainer.style.shrink = "1";
                brandingContainer.style.transform = "translateX(-250px)";

                window.setTimeout(() => {
                    brandingContainer.style.display = "none";
                    
                    navbarContent.style.justifyContent = "flex-end";

                    searchForm.style.width = "250px";
                    searchForm.style.justifyContent = "flex-end";
                    searchForm.querySelector("input").style.display = "block";
            }, 400)

                window.setTimeout(() => {
                    searchForm.querySelector("input").style.opacity = 1;
                }, 910);
            }

            if (isFormOpen) {
                setFormState(!isFormOpen);
    
                searchForm.querySelector("input").style.opacity = 0;
    
                window.setTimeout(() => {
                    searchForm.querySelector("input").style.display = "none";
                    searchForm.style.width = "30px";
                }, 250)
    
                window.setTimeout(() => {
                    brandingContainer.style.display = "block";
                }, 750)

                window.setTimeout(() => {
                    brandingContainer.style.transform = "translateX(0)";
                    searchForm.style.justifyContent = "center";
                    navbarContent.style.justifyContent = "space-between";
                }, 770)
            }

        }
    }

    return {searchQuery, handleSearch, handleSearchButtonClick};
}

export default useSearchForm;