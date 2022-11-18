import React, { createContext } from "react";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const prueba = () => {
    console.log("probando");
  };

  return <dataContext.Provider value={{ prueba }}>{children}</dataContext.Provider>;
};

export default DataProvider;
