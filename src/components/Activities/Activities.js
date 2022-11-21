import { useEffect, useState } from "react";
import ActivitiesForm from "../ActivitiesForm/ActivitiesForm";

import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";

const Activities = () => {
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
    deleteDoc(doc(db, "activities", id));
    const cleanActivitie = [...activitie];
    cleanActivitie.splice(id, 1);
    setActivitie(cleanActivitie);
    console.log(activitie);
  };
  return (
    <>
      <ActivitiesForm />
      <h1>Activities</h1>
      <div>
        {activitie.map((act) => (
          <div key={act.id}>
            <h2>{act.name}</h2>
            <h4>{act.description}</h4>
            <h3 onClick={() => deleteActivite(act.id)}>❌</h3>
            <h3>✏️</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Activities;
