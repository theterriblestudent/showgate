'use client';
import styled from "styled-components";
import { GridContainer } from "components";

export const StyledCrewSection = styled(GridContainer).attrs({className: "full-width", small: true})`
    min-height: 450px;

    position: relative;
`;

export const CreditsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    margin-top: 30px;
    margin-bottom: 65px;

    @media only screen and (max-width: 968px) {
            grid-template-columns: 1fr 1fr;
        }
`;