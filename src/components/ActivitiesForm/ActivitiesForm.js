import React, { useContext, useEffect, useState } from "react";
import { dataContext } from "../Context/DataContext";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";

const ActivitiesForm = () => {
  const initialStateValues = {
    name: "",
    description: "",
  };

  const { addOrEditActivitie, currentId } = useContext(dataContext);
  const [values, setValues] = useState(initialStateValues);

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrEditActivitie(values);
    setValues({ ...initialStateValues });
  };

  const getActivitieById = async (id) => {
    const docActivitieId = doc(db, "activities", id);
    const docActivitieData = await getDoc(docActivitieId);
    setValues({ ...docActivitieData.data() });
  };

  useEffect(() => {
    if (currentId === "") {
      setValues({ ...initialStateValues });
    } else {
      getActivitieById(currentId);
    }
  }, [currentId]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id='input'
          type='text'
          placeholder='Activitie name'
          name='name'
          value={values.name}
          onChange={handleValueChange}></input>
        <br />
        <textarea
          id='input'
          type='text'
          placeholder='Activitie description'
          rows={5}
          cols={25}
          name='description'
          value={values.description}
          onChange={handleValueChange}></textarea>
        <button>{currentId === "" ? "create" : "update"}</button>
      </form>
    </>
  );
};

export default ActivitiesForm;
