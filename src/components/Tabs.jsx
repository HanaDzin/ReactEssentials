import React from "react";

//this component now has 2 JSX slots - one for data that goes between menu tags
//and children for content between opening and closing tags of this element
const Tabs = ({ children, buttons, ButtonsContainer = "menu" }) => {
  //const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
};

export default Tabs;
