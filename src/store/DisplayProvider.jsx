import { createContext, useContext, useState } from "react";

const DisplayContext = createContext({
  displayCart: false,
  toggleDisplayCart: (e) => {},
  displayCheckOut: false,
  toggleDisplayCheckOut: () => {},
});

const DisplayProvider = ({ children }) => {
  const [displayCartState, setDisplayCartState] = useState(false);
  const [displayCheckOutState, setDisplayCheckOutState] = useState(false);

  const toggleDisplayCartState = (e) => {
    e.stopPropagation();
    setDisplayCartState((prevCartState) => !prevCartState);
  };

  const toggleDisplayCheckOutState = () => {
    setDisplayCheckOutState((prevCheckOutState) => !prevCheckOutState);
  };

  const displayContextState = {
    displayCart: displayCartState,
    displayCheckOut: displayCheckOutState,
    toggleDisplayCart: toggleDisplayCartState,
    toggleDisplayCheckOut: toggleDisplayCheckOutState,
  };
  return (
    <DisplayContext.Provider value={displayContextState}>
      {children}
    </DisplayContext.Provider>
  );
};

export const useDisplayContext = () => useContext(DisplayContext);

export default DisplayProvider;
