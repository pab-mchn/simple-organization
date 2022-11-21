import { useEffect, useState } from "react";
import ActivitiesForm from "../ActivitiesForm/ActivitiesForm";

import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";

const Activities = () => {
  const [activitie, setActivitie] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "activities"), (querySnapshot) => {
      const activitiesDocs = [];
      querySnapshot.forEach((doc) => {
        activitiesDocs.push({ ...doc.data(), id: doc.id });
        console.log(activitiesDocs);
        setActivitie(activitiesDocs);
        console.log(activitie);
      });
    });
  }, []);
  return (
    <>
      <ActivitiesForm />
      <h1>Activities</h1>
      <div>
        {activitie.map((act) => (
          <div key={act.id}>
            <h2>{act.name}</h2>
            <h4>{act.description}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default Activities;
