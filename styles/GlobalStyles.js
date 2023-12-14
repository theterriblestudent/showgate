'use client'


import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        --dark-background-color: #171717;
    }
    body {
        background-color: var(--dark-background-color);
    }
`;


export default GlobalStyles;