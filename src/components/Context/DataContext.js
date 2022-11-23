import React, { createContext, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [currentId, setCurrentId] = useState("");

  const addOrEditActivitie = async (activitieObject) => {
    await addDoc(collection(db, "activities"), activitieObject);
  };

  return (
    <dataContext.Provider value={{ addOrEditActivitie, currentId, setCurrentId }}>{children}</dataContext.Provider>
  );
};

export default DataProvider;
