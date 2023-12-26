'use client'

import styled from 'styled-components';

export const StyledBoxOfficeCard = styled.div`
    position: relative;

    margin-right: 35px;
    margin-top: 45px;

    flex-shrink: 0;

    width: clamp(180px, 13.5vw, 250px);
    height: clamp(290px, 18.75vw, 360px);

    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.7);

    &:first-child {margin-left: 40px;}

    img {
        width: 100%;
        height: 100%;

        object-fit: cover;
        object-position: top;

        position: absolute;
        top: 0;
        left: 0;

        border-radius: 3px;
        
        @media only screen and (max-width: 968px) {
            border-radius: 5px;

            box-shadow: 0 10px 10px rgba(0, 0, 0, 0.6);
        }
    }
    &:last-child {margin-right: 0;}

    @media only screen and (max-width: 968px) {
        box-shadow: none;

        margin-top: 27px;
        margin-right: 15px;

        &:first-child{
            margin-left: 30px;
        }
    }
`;

export const StyledPositionNumber = styled.div`
    transform: translate(-45%, -40%);

    position: absolute;
    top: 0;
    left: 0;

    width: clamp(65px, 4.8vw, 90px);
    height: clamp(65px, 4.8vw, 90px);

    border: 3px solid var(--accent-color);
    border-radius: 50%;

    background: var(--dark-background-color);
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: clamp(3rem, 3.2vw, 3.8rem);
        font-weight: 1000;
        font-family: var(--secondary-font);
        
        color: transparent;
        text-align: center;
        -webkit-text-stroke: 3px var(--accent-color);
    }
`;