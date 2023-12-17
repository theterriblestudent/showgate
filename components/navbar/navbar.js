'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {StyledNavbar, StyledLink} from "./navbar.styled";
import {branding} from 'assets'
import {FlexContainer} from "components"

const NavBar = function({}) {
    return (
        <StyledNavbar>
                <FlexContainer gap="20px">
                    <Image src={branding} />
                    <FlexContainer gap="32px" className="nav-links" flex={1}>
                        <StyledLink href="#">Browse</StyledLink>
                        <StyledLink href="#">News</StyledLink>
                        <StyledLink href="#">About/Disclaimer</StyledLink>
                        <StyledLink href="#">Signup</StyledLink>
                    </FlexContainer>
                    <form>

                    </form>
                </FlexContainer>
        </StyledNavbar>
    )
};

export default NavBar;