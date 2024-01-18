'use client';

import React from "react";
import {branding} from 'assets'
import useNavbar from "./useNavbar";
import {StyledNavbar, StyledImage, BurgerButton, MobielNav, StyledImageContainer} from "./navbar.styled";
import {FlexContainer, SearchForm } from "components"

const NavBar = function() {
    const {getNavLinks, handleBurgerButtonClick} = useNavbar();
    
    return (
        <StyledNavbar>
            <FlexContainer className="navbar-content" gap="20px" justify_content="space-between" style={{position: "relative"}}>
                <StyledImageContainer>
                    <StyledImage src={branding} alt="Website Logo" />
                </StyledImageContainer>
                <FlexContainer gap="32px" className="nav-links" flex={1}>
                    {getNavLinks()}
                </FlexContainer>
                <SearchForm />
                <BurgerButton onClick={handleBurgerButtonClick} />
            </FlexContainer>
            <MobielNav justify_content="center" gap="25px" flex_direction="column">
                {getNavLinks()}
            </MobielNav>
        </StyledNavbar>
    )
};

export default NavBar;