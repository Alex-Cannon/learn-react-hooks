import React, { useContext, useState, useEffect } from 'react';

// Use a yucky interface for TypeScript in order to use [] notation
interface VanillaObject {
  [key: string]: any
}

// Initial State for Context
const button: VanillaObject = {
  light: {
    background: "#fff",
    color: "#202020"
  },
  dark: {
    background: "#202020",
    color: "#fff"
  }
};

// Initialize Context
const ButtonContext = React.createContext(button.light);

export default () => {
  useEffect(() => {
    return 
  }, []);

  // Use YourContext.Provider to allow descendants to
  // optionally re-render when Provider state changes.
  return (
    <ButtonContext.Provider value={button.dark}>
      Hi
    </ButtonContext.Provider>
  );
}

const ThemeDisplay = () => {
  const buttonStyle = useContext(ButtonContext);

  return (
    <>
      <p>The ButtonContext is:</p>
      <p>{JSON.stringify(buttonStyle)}</p>
    </>
  );
}
/*
type ThemeButtonProps = {
  toggleButtonType: Function
}*/

// Example of how context could be used with button styles
// It can also be used with useReducer to replace redux
const ThemeButton = () => {
  const buttonStyle = useContext(ButtonContext);

  return (
    <button style={{ background: buttonStyle.background, color: buttonStyle.color}}>
      Toggle Button Context
    </button>
  );
}