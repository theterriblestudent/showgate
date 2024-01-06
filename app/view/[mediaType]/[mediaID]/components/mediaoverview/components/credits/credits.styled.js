'use client';
import styled from 'styled-components';
import { FlexContainer } from 'components';

export const StyledCredits = styled(FlexContainer).attrs({align_content: "center", gap:"10px"})`
    h4 {
        font-family: var(--primary-font);
        color: var(--accent-color);
        font-size: 1rem;
        font-size: clamp(1rem, 0.929rem + 0.223vw, 1.1rem);
        font-weight: bold;
    }

    p {
        font-family: var(--secondary-font);
        color: var(--light-foreground-color);
        font-size: 1rem;
        font-size: clamp(1rem, 0.929rem + 0.229vw, 1.1rem);
        margin-top: -3px;
    }
`;