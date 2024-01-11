'use client';
import React from "react";
import { FlexContainer } from "components";
import useTitle from "./useTitle";
import { StyledChev, StyledTitle, StyledTitleText, StyledChevDown } from "./title.styled";
import { ButtonsContainer, MobileButton, StyledDropDown, DropDownList } from "./title.styled";

function Title({controlOptions, more, setDataState, dataState, scrollableContainer, dd_test}) {

    const {
            switchRef, handleTitleButtonClick,
            getMobileButtonText, handleMobileButtonClick,
            handleDropDownClick, handleDropdownOptionClick
        } = useTitle(scrollableContainer);

    return (
        <StyledTitle>
            <FlexContainer gap="15px">
                <StyledTitleText >
                    {dataState.title}
                </StyledTitleText>
                {more &&<StyledChev />}
            </FlexContainer>
            {controlOptions && controlOptions.length < 3 &&
            <React.Fragment>
                <ButtonsContainer>
                    <div ref={switchRef}/>
                    {
                        <>
                            {controlOptions.map((option, index) => {
                                return (
                                    <button onClick={event => handleTitleButtonClick(index, controlOptions, setDataState)}>
                                        {option.button_text}
                                    </button>
                                )
                            })}
                        </>
                    }
                </ButtonsContainer>
                <MobileButton onClick={e => handleMobileButtonClick(controlOptions, setDataState, dataState)} >
                    {getMobileButtonText(controlOptions, dataState)}
                </MobileButton>
            </React.Fragment>
            }
            {controlOptions && controlOptions.length > 2 &&
                <StyledDropDown>
                    <a className="dropdown-title" onClick={event => handleDropDownClick(event)}>S01</a>
                    <StyledChevDown />
                    <DropDownList>
                        {
                            controlOptions.map(option => {
                                return (
                                    <p onClick={event => handleDropdownOptionClick(setDataState, option)}>{option.button_text}</p>
                                )
                            })
                        }
                    </DropDownList>
                </StyledDropDown>
            }
        </StyledTitle>
    );
}

export default Title;