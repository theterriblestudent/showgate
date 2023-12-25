'use client';

import useTitle from "./useTitle";
import {StyledChev, StyledTitle, StyledTitleText} from "./title.styled";
import {ButtonsContainer} from "./title.styled";

function Title({controlOptions, more, setDataState, dataState}) {

    const {switchRef, handleTitleButtonClick} = useTitle();

    return (
        <StyledTitle>
            <StyledTitleText >
                {dataState.title}
            </StyledTitleText>

            {more &&<StyledChev />}

            {controlOptions &&
                <ButtonsContainer>
                    <div ref={switchRef}/>
                    {<>
                        <button onClick={event => handleTitleButtonClick(0, controlOptions, setDataState)}>{controlOptions[0].button_text}</button>
                        <button onClick={event => handleTitleButtonClick(1, controlOptions, setDataState)}>{controlOptions[1].button_text}</button>
                    </>}
                </ButtonsContainer>}
        </StyledTitle>
    );
}

export default Title;