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
            background: linear-gradient(180deg, rgba(0,0,0,0.9108018207282913) 0%, rgba(0,0,0,0.3113620448179272) 38%, rgba(0,0,0,0.5802696078431373) 65%, rgba(0,0,0,0.8715861344537815) 74%, rgba(0,0,0,0.9416141456582633) 82%, rgba(0,0,0,1) 100%);
        }
    `;

    return {showcaseMovie, overlay_styles};
}

export default useShowcase;