'use client';
import React from "react";
import { FlexContainer } from "components";
import useTitle from "./useTitle";
import { StyledChev, StyledTitle, StyledTitleText } from "./title.styled";
import { ButtonsContainer, MobileButton } from "./title.styled";

function Title({controlOptions, more, setDataState, dataState, scrollableContainer}) {

    const {switchRef, handleTitleButtonClick, getMobileButtonText, handleMobileButtonClick} = useTitle(scrollableContainer);

    return (
        <StyledTitle>
            <FlexContainer gap="15px">
                <StyledTitleText >
                    {dataState.title}
                </StyledTitleText>
                {more &&<StyledChev />}
            </FlexContainer>
            {controlOptions &&
            <React.Fragment>
                    <ButtonsContainer>
                        <div ref={switchRef}/>
                        {<>
                            <button onClick={event => handleTitleButtonClick(0, controlOptions, setDataState)}>{controlOptions[0].button_text}</button>
                            <button onClick={event => handleTitleButtonClick(1, controlOptions, setDataState)}>{controlOptions[1].button_text}</button>
                        </>}
                    </ButtonsContainer>
                    <MobileButton onClick={e => handleMobileButtonClick(controlOptions, setDataState, dataState)} >
                        {getMobileButtonText(controlOptions, dataState)}
                    </MobileButton>
                </React.Fragment>
                }
        </StyledTitle>
    );
}

export default Title;