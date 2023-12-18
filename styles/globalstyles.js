'use client'

import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`
    :root {
        //Color Scheme
       --accent-color: #c96d2a;
       --dark-background-color: #171717;
       --light-background-color: #202020;
       --light-foreground-color: #f4f4f4;
       --dark-foreground-color: #b8b8b8;

       //Breakpoints
       --tablet-breakpoint: 968px;
       --mobile-breakpoint: 480px;
    }
    * {
            //Resets
            padding: 0;
            margin: 0;
            box-sizing: border-box;

            flex-wrap: wrap;
    }
    
    //Scrollbar Styling
    body {
        background-color: var(--dark-background-color);
    }

    body::-webkit-scrollbar {
        width: .9rem;
        background-color: var(--light-background-color);
    }

    body::-webkit-scrollbar-thumb {
        background-color: var(--accent-color);
    }

    //Content Placement in the grind container
    .container-grid > :not(.full-width) {
        grid-column: content;
    }

    .container-grid > .full-width {
        grid-column: full-width;
    }

    //Exceptions
    
`;


export default GlobalStyles;