import React, { createContext, useState } from "react";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [currentId, setCurrentId] = useState("");
  const [modal, setModal] = useState(false);

  const openOrCloseModal = () => {
    setModal(!modal);
  };

  const addOrEditActivitie = async (activitieObject) => {
    if (currentId === "") {
      await addDoc(collection(db, "activities"), activitieObject);
      openOrCloseModal();
    } else {
      await updateDoc(doc(db, "activities", currentId), activitieObject);
      setCurrentId("");
      openOrCloseModal();
    }
  };

  return (
    <dataContext.Provider value={{ addOrEditActivitie, currentId, setCurrentId, modal, openOrCloseModal }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
