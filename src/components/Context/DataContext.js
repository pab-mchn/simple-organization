import React, { createContext } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const addOrEditActivitie = async (activitieObject) => {
    addDoc(collection(db, "activities"), activitieObject);
    console.log(activitieObject);
  };

  return <dataContext.Provider value={{ addOrEditActivitie }}>{children}</dataContext.Provider>;
};

export default DataProvider;
