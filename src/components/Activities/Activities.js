import { useContext, useEffect, useState } from "react";
import ActivitiesForm from "../ActivitiesForm/ActivitiesForm";
import { dataContext } from "../Context/DataContext";

import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";

import "./Activities.css";

const Activities = () => {
  const { setCurrentId } = useContext(dataContext);
  const [activitie, setActivitie] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "activities"), (querySnapshot) => {
      const activitiesDocs = [];
      querySnapshot.forEach((doc) => {
        activitiesDocs.push({ ...doc.data(), id: doc.id });

        setActivitie(activitiesDocs);
      });
    });
  }, []);

  const deleteActivite = (id) => {
    const cleanActivitie = [...activitie];
    cleanActivitie.splice(id, 1);
    setActivitie(cleanActivitie);
    console.log(activitie);
    deleteDoc(doc(db, "activities", id));
  };
  return (
    <>
      <h1>Personal Organization</h1>
      <ActivitiesForm />
      <h1>{activitie.length === 0 ? "Your activities list is empty..." : " Your Activities"}</h1>
      <div className='activitiesContainer'>
        {activitie.map((act) => (
          <div className='activitiesItem' key={act.id}>
            <h2>{act.name}</h2>
            <h4>{act.description}</h4>
            <div className='activitiesItem-buttons'>
              <h3 onClick={() => deleteActivite(act.id)}>❌</h3>
              <h3 onClick={() => setCurrentId(act.id)}>✏️</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Activities;
