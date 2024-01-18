'use client';
import styled from 'styled-components';

export const StyledCastCard = styled.div`
    width: 160px;

    border: 2px solid #3d3d3d;
    border-radius: 8px;

    padding-bottom: 15px;

    flex-shrink: 0;

    margin-right: -5px;

    @media only screen and (max-width: 968px) {
        width: 125px;
    }

    div {padding: 0 10px 0 10px;}

    img {
        width: 100%;
        height: 150px;

        object-fit: cover;
        object-position: top;

        border-radius: 8px 8px 0 0;

        margin-bottom: 8px;

        @media only screen and (max-width: 968px) {
        height: 135px;
        }
    }

    h4 {
        font-family: var(--primary-font);
        color: var(--light-foreground-color);
        font-size: 0.9375rem;
        font-size: clamp(0.9375rem, 0.8482142857142857rem + 0.2857142857142857vw, 1.0625rem);
        text-align: start;
        font-weight: 400;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: start;

        margin-bottom: 5px;

    }
    p {
        font-family: var(--secondary-font);
        color: var(--dark-foreground-color);
        font-size: 0.875rem;
        font-size: clamp(0.875rem, 0.7857142857142857rem + 0.2857142857142857vw, 1rem);
        
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: start;
    }
`;