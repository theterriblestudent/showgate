'use client';

import styled from "styled-components"
import {GridContainer, FlexContainer} from 'components';

export const StyledContentStripe = styled(GridContainer).attrs({className: "full-width container-grid"})`
    padding: 50px 0 50px 0;
`;

export const ScrollableContainer = styled(FlexContainer).attrs("full-width")`
    flex-wrap: nowrap;
    overflow-x: scroll;
`;
