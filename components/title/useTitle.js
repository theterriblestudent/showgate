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

    return {switchRef, handleTitleButtonClick};
    
}

export default useTitle;