import React, { createContext, useState, useEffect } from "react";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return <dataContext.Provider value={{}}>{children}</dataContext.Provider>;
};

export default DataProvider;
