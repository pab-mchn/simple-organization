import { useContext, useEffect, useState } from "react";
import ActivitiesForm from "../ActivitiesForm/ActivitiesForm";
import { dataContext } from "../Context/DataContext";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";

import "./Activities.css";

const Activities = () => {
  const { setCurrentId, openOrCloseModal } = useContext(dataContext);
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

  const EditActivitie = (id) => {
    setCurrentId(id);
    openOrCloseModal();
  };
  return (
    <>
      <ActivitiesForm />
      <div className='title-container'>
        <h1>{activitie.length === 0 ? "Your activities list is empty" : " Your Activities"}</h1>
        <img
          src='https://imgs.search.brave.com/PielncwEr_ZqEcGO241yQBvd7CEIK3AwfK6H2NwCJic/rs:fit:493:481:1/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/aW1hZ2VzLzdkMjEx/NDBkOTQ5YTNlYTcx/MWQ5Njg2NmE4MzNi/MzFiL3Rlbm9yLmdp/Zg.gif'
          alt=''
        />
      </div>
      <div className='activitie-button-container'>
        <button class='activitie-button' onClick={openOrCloseModal}>
          +
        </button>
      </div>
      <div className='activitiesContainer'>
        {activitie.map((act) => (
          <div className='activitiesItem' key={act.id}>
            <h2>{act.name}</h2>
            <h4>{act.description}</h4>
            <div className='activitiesItem-buttons'>
              <h3 onClick={() => deleteActivite(act.id)}>❌</h3>
              <h3 onClick={() => EditActivitie(act.id)}>✏️</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Activities;
