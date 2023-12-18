'use client';

import React from "react";
import { css } from "styled-components";
import {movies} from "utils";

function useShowcase() {
    const [showcaseMovie, setShowcaseMovie] = React.useState(null);

    React.useEffect(() => {
        setShowcaseMovie(movies[Math.floor(Math.random() * (movies.length))]);
    }, []);

    const overlay_styles = css`
        background: rgb(0, 0, 0);
        background: linear-gradient(90deg, rgba(0,0,0,0.958) 0%, rgba(0,0,0,0.816) 37%, rgba(0,0,0,0.141) 100%);
        @media only screen and (max-width: 968px) {
          background: rgb(0,0,0);
          background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.852) 28%, rgba(0,0,0,0.530) 44%, rgba(0,0,0,0) 59%, rgba(0,0,0,0) 100%);
        }
    `;

    return {showcaseMovie, overlay_styles};
}

export default useShowcase;