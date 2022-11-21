import { useEffect, useState } from "react";
import ActivitiesForm from "../ActivitiesForm/ActivitiesForm";

import { collection, DocumentSnapshot, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";

const Activities = () => {
  const [activitie, setActivitie] = useState([]);

  const getActivities = async () => {
    const activitiesDocs = [];
    const querySnapshot = await getDocs(collection(db, "activities"));
    querySnapshot.forEach((doc) => {
      activitiesDocs.push({ ...doc.data(), id: doc.id });
      console.log(activitiesDocs);
      setActivitie(activitiesDocs);
      console.log(activitie);
    });
  };

  useEffect(() => {
    getActivities();
  }, []);
  return (
    <>
      <ActivitiesForm />
      <h1>Activities</h1>
      <div>
        {activitie.map((act) => {
          return <h1>{act.name}</h1>;
        })}
      </div>
    </>
  );
};

export default Activities;
