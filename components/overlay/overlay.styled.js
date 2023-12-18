'use client';

import styled from "styled-components";

const Overlay = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};

    position: absolute;
    top: 0;
    left: 0;

    ${props => props.styles};
`;

export default Overlay;