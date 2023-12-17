'use client'
import styled from "styled-components";

const GridContainer = styled.div.attrs({className:"container-grid"})`
    --padding-inline: 5%;
    --max-content: 1700px;

    width: 100%;
    display: grid;
    grid-template-columns: [full-width-start] minmax(var(--padding-inline), 1fr) [content-start] min(100% - (var(--padding-inline) * 2), var(--max-content)) [content-end] minmax(var(--padding-inline), 1fr) [full-width-end];
`;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.flex_direction || "row"};
    justify-content: ${props => props.justify_content || "start"};
    align-content: ${props => props.align_content || "center"};
    gap: ${props => props.gap || "0px"};
    flex: ${props => props.flex || "unset"};

`;

export  {GridContainer, FlexContainer};