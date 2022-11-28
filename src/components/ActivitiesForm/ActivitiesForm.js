import React, { useContext, useEffect, useState } from "react";
import { dataContext } from "../Context/DataContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";

import "./ActivitiesForm.css";

const ActivitiesForm = () => {
  const initialStateValues = {
    name: "",
    description: "",
  };

  const { addOrEditActivitie, currentId, modal, openOrCloseModal } = useContext(dataContext);
  const [values, setValues] = useState(initialStateValues);

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    values.name === "" ? alert("name missed") : addOrEditActivitie(values);

    setValues({ ...initialStateValues });
    console.log(values);
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
      {modal ? (
        <section className='modal__bg'>
          <div className='modal__align'>
            <div className='modal__content' modal={modal}>
              <h3 className='modal__close' arial-label='Close modal' onClick={openOrCloseModal}>
                ❌
              </h3>
              <div className='modal__photo-align'></div>
              <form onSubmit={handleSubmit}>
                <input
                  className='formName'
                  id='input'
                  type='text'
                  placeholder='Activitie name'
                  name='name'
                  value={values.name}
                  onChange={handleValueChange}></input>
                <br />
                <input
                  className='formDescription'
                  id='input'
                  type='text'
                  placeholder='Activitie description'
                  rows={5}
                  cols={25}
                  name='description'
                  value={values.description}
                  onChange={handleValueChange}></input>
                <button className='formButton'>{currentId === "" ? "Create" : "Update"}</button>
              </form>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default ActivitiesForm;
