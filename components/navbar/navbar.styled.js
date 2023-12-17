'use client';
import Link from "next/link";
import styled, {css} from "styled-components";
import {GridContainer} from "components"

const StyledNavbar = styled(GridContainer).attrs({className:"full-width"})` 
    padding: 20px 0 20px 0;

    @media only screen and (max-width: 968px) {
        .nav-links {
            display: none;
        }
    }
`;

const StyledLink = styled(Link)`
    color: var(--light-foreground-color);
    font-family: var(--secondary-font);
    text-decoration: none;
    transition: color 0.5s;
    font-weight: 600;
    font-size: 1.1875rem;
    &:hover {
        color: var(--accent-color);
    }

    @media only screen and (max-width: 968px) {
        text-transform: uppercase;
    }
`;


export {StyledNavbar, StyledLink};