'use client'

import styled from "styled-components";

export const Button = styled.a`
    text-decoration: none;
    font-size: 0.9375rem;
    font-size: clamp(0.9375rem, 0.91rem + 0.14vw, 1.0625rem);
    font-weight: 600;
    font-family: var(--secondary-font);

    padding: 10px 22px;
    padding: clamp(0.5rem, 0.47rem + 0.138vw, 0.625rem) clamp(1.1875rem, 1.14rem + 0.207vw, 1.375rem);
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