'use client';
import React from "react";
import { colors } from "styles/colors";

function useTitle(scrollableContainer) {
    const switchRef = React.useRef();

    function changeContent(setDataState, dataState) {
        scrollableContainer.current.style.opacity =  0;

        window.setTimeout(() => {
            setDataState(dataState);
        }, 250);

        window.setTimeout(() => {
            scrollableContainer.current.style.opacity =  1;
        }, 600);
    }

    function handleTitleButtonClick(buttonIndex, controlOptions, setDataState) {
        const buttons = switchRef.current.parentElement.querySelectorAll("button");
        
        switchRef.current.style.left = `${buttonIndex * 50}%`;
        switchRef.current.style.width = "55%";

        window.setTimeout(() => {
            switchRef.current.style.width = "50%";
        }, 250);

        changeContent(setDataState, controlOptions[buttonIndex]);

        buttons[buttonIndex].style.color = colors.light_foreground;

        buttons.forEach((button, index) => {
            if (index != buttonIndex) {
                button.style.color = colors.dark_foreground;
            }
        });

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
                changeContent(setDataState, option);
        });
    }

    function handleDropDownClick() {
        const dropDownList = document.querySelector(".dropdown-list");
        const opacityValue = dropDownList.style.opacity;

        if (opacityValue == 1) {
            dropDownList.style.opacity = 0;
            dropDownList.style.transform = "translateY(-15px)";
        } else {
            dropDownList.style.opacity = 1;
            dropDownList.style.transform = "translateY(0px)";
        }
    }

    function handleDropdownOptionClick(setDataState, option) {
        setDataState(option);

        document.querySelector(".dropdown-title").innerHTML = option.button_text;
    }

    return {switchRef, handleTitleButtonClick, getMobileButtonText, handleMobileButtonClick, handleDropDownClick, handleDropdownOptionClick};
    
}

export default useTitle;