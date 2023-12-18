'use client'

import styled from "styled-components";

export const Button = styled.a`
    text-decoration: none;
    font-size: 17px;
    font-weight: 600;
    font-family: var(--secondary-font);
    padding: 10px 22px;
    border-radius: 50px;
    transition: transform 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    background-color: ${props => props.button_type==="accent" ? "var(--accent-color)" : "var(--light-background-color)"};
    color: var(--light-foreground-color);

    &:hover {
        transform: scale(0.95);
    }
`;