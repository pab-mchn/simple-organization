import React, { useContext, useState } from "react";
import { dataContext } from "../Context/DataContext";
const ActivitiesForm = () => {
  const initialStateValues = {
    name: "",
    description: "",
  };

  const [values, setValues] = useState(initialStateValues);
  const { addOrEditActivitie } = useContext(dataContext);

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrEditActivitie(values);
    console.log(values);
    setValues({ ...initialStateValues });
  };
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
        <button>Save Activitie</button>
      </form>
    </>
  );
};

export default ActivitiesForm;
