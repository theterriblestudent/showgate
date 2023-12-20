'use client';
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import {GridContainer, FlexContainer} from "components"

const StyledNavbar = styled(GridContainer).attrs({className:"full-width nav-bar"})` 
    padding: 20px 0 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
    transition: background-color 0.5s;

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
    font-size: 1rem;
    font-size: clamp(1rem, 0.9348591549295775rem + 0.20845070422535217vw, 1.185rem);
    &:hover {
        color: var(--accent-color);
    }

    @media only screen and (max-width: 968px) {
        text-transform: uppercase;
    }
`;

const StyledImage = styled(Image)`
    width: clamp(150px, 10.42vw, 200px);
    height: auto;
    margin-right: 35px;
    cursor: pointer;

    @media only screen and (max-width: 967px) {
        width: 150px;
    }
`;

const BurgerButton = styled(FaBars)`
    color: var(--accent-color);
    font-size: 1.6rem;
    display: none;
    z-index: 3;
    @media only screen and (max-width: 968px) {
        display: block;
    }
`;

const MobielNav = styled(FlexContainer).attrs({className: "mobile-nav"})`
    position: fixed;
    top: 0;
    right: -60vw;
    height: 100vh;
    width: 60vw;
    background-color: var(--light-background-color);

    transition: right 0.5s;

    @media only screen and (min-width: 968px) {
        display: none;
    }
`;

export {StyledNavbar, StyledLink, StyledImage, BurgerButton, MobielNav};