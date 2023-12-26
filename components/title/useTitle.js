'use client';
import React from "react";
import { colors } from "styles/colors";

function useTitle() {
    const switchRef = React.useRef();

    function handleTitleButtonClick(buttonIndex, controlOptions, setDataState) {
        const buttons = switchRef.current.parentElement.querySelectorAll("button");
        
        switchRef.current.style.left = `${buttonIndex * 50}%`;

        buttons[buttonIndex].style.color = colors.light_foreground;

        buttons.forEach((button, index) => {
            if (index != buttonIndex) {
                button.style.color = colors.dark_foreground;
            }
        });

        setDataState(controlOptions[buttonIndex]);
    }

    function getMobileButtonText(controlOptions, dataState) {
         let buttonText;

         controlOptions.forEach(option => {
            if (option.title !== dataState.title)
                buttonText = option.button_text
         })

         return buttonText;
    }

    function handleMobileButtonClick(controlOptions, setDataState, dataState) {
        controlOptions.forEach(option => {
            if (option.title !== dataState.title) 
                setDataState(option);
        });
    }

    return {switchRef, handleTitleButtonClick, getMobileButtonText, handleMobileButtonClick};
    
}

export default useTitle;