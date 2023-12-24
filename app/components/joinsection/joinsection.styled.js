'use client';

import styled from 'styled-components';
import {FlexContainer} from "components"

export const StyledJoinSection = styled.section.attrs({className: "full-width"})`
    margin-top: 60px;
    width: 100%;
    position: relative;
    padding: 55px 0;
    @media only screen and (max-width: 968px) {
        margin-top: 0;
    }
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`;

export const BackgroundOverlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba( 43, 42, 42, 0.85);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`;

export const JoinSectionContainer = styled(FlexContainer).attrs({justify_content: "space-between", })`
    position: relative;
    width: 90%;
    max-width: 1250px;
    margin: 0 auto;
    text-shadow: 0px 10px 10px rgba(0, 0, 0, 0.6);
    font-size: clamp(1.05rem, 1vw, 1.2rem);
    line-height: 1.35;
    font-family: var(--secondary-font);
    @media only screen and (max-width: 968px) {
        flex-direction: column;
    }

    ul {
        align-self: center;
        max-width: 480px;
        @media only screen and (max-width: 968px) {
            display: flex;
            align-items: center;
            flex-direction: column;
            list-style: none;
            /* width: 80%; */
        }
        li {
            color: var(--light-foreground-color);
            font-weight: 400;
            text-shadow: 0px 10px 10px rgba(0, 0, 0, 0.85);
            margin-bottom: 3px;
            &:last-child {margin-bottom: 0;}
            @media only screen and (max-width: 968px) {
                text-align: center;
                margin-bottom: 10px;
                line-height: 1.2;
            }
        }
    }
`;

export const JoinText = styled(FlexContainer).attrs({
    flex_direction: "column",
    justify_content: "center",
    align_content: "start"
})`
    margin-bottom: 0px;
    margin-right: 35px;

    text-align: start;
    max-width: 620px;
    @media only screen and (max-width: 968px) {
        align-items: center;
        margin-bottom: 30px;
        margin-right: 0;
    }
    h1 {
        margin-bottom: 25px;
        font-size: clamp(2.6rem, 2.5vw, 3rem);
        font-family: var(--primary-font);
        color: var(--light-foreground-color);
        @media only screen and (max-width: 968px) {
            text-align: center;
        }
    }
    p {
        margin-bottom: 15px;
        font-weight: 400;
        font-family: var(--secondary-font);
        color: var(--light-foreground-color);
        @media only screen and (max-width: 968px) {
            text-align: center;
        }
    }
    a {
        padding-left: 35px;
        text-shadow: none;
        padding-right: 35px;
        font-family: var(--secondary-font);
    }
`;