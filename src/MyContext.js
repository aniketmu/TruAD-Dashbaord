import React, { createContext, useContext, useState } from 'react';

// Create a context
const MyContext = createContext();

// Create a provider component
export const MyContextProvider = ({ children }) => {
  const [value, setValue] = useState('initial value');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook to consume the context
export const useMyContext = () => useContext(MyContext);
