'use client'
import styled from "styled-components";

const GridContainer = styled.div.attrs({className:"container-grid"})`
    --padding-inline: 5%;
    --max-content: ${props => props.small ? "1200px" : "1800px"};
    --breakout-max-width: 1400px;
    --breakout-size: calc((var(--breakout-max-width) - var(--max-content)) / 2);

    width: 100%;
    display: grid;
    grid-template-columns: [full-width-start] minmax(var(--padding-inline), 1fr) [breakout-start] minmax(0, var(--breakout-size)) [content-start] min(100% - (var(--padding-inline) * 2), var(--max-content)) [content-end] minmax(0, var(--breakout-size)) [breakout-end] minmax(var(--padding-inline), 1fr) [full-width-end];
`; 

const FlexContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.flex_direction || "row"};
    justify-content: ${props => props.justify_content || "start"};
    align-items: ${props => props.align_content || "center"};
    gap: ${props => props.gap || "0px"};
    flex: ${props => props.flex || "unset"};
    flex-wrap: ${props => props.flex_wrap || "nowrap"};

`;

export  {GridContainer, FlexContainer};