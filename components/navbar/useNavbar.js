import React from "react";
import Link from 'next/link';
import { Button } from "components";
import { colors } from "styles/colors";
import { StyledLink} from "./navbar.styled";

const useNavbar = function() {
   const [isMobileNavOpen, setMobileNavState] = React.useState(false);

   //Dimming the navbar when you scroll down
   React.useLayoutEffect(() => {
    const nav = document.querySelector('.nav-bar');

    document.addEventListener('scroll', () => {
        if (window.scrollY > 50) 
            nav.style.background = "black";
        else 
            nav.style.background="transparent"
    })
   }, []);

   function resetLinkStyles() {
    document.querySelector('.nav-bar').querySelector('.nav-links')
    .querySelectorAll('a').forEach(link => {
        link.style.color= colors.light_foreground;
    });
   }

   function handleNavLinkClick ({target}) {
    resetLinkStyles();

    target.style.color = colors.accent;
    if (isMobileNavOpen) {
        setMobileNavState(!isMobileNavOpen);
        toggleMobileNav();
    }
   }

   function toggleMobileNav() {
    document.querySelector('.mobile-nav')
    .style.right = isMobileNavOpen ? "-60vw" : "0";

    setMobileNavState(!isMobileNavOpen);
   }

   function handleBurgerButtonClick() {
    toggleMobileNav();
   }

   function handleSignupButtonClick() {
    resetLinkStyles()
   }

   function getNavLinks() {
    return (
        <React.Fragment>
            <StyledLink onClick={handleNavLinkClick} href="#">Browse</StyledLink>
            <StyledLink onClick={handleNavLinkClick} href="#">News</StyledLink>
            <StyledLink onClick={handleNavLinkClick} href="#">About</StyledLink>
            <Button onClick={handleSignupButtonClick} as={Link} href="#" button_type="accent">Sign Up</Button>
        </React.Fragment>
    );
   }

   return {getNavLinks, handleBurgerButtonClick};
}

export default useNavbar;