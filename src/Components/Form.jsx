import { useState } from "react";
import styles from './Styles/Form.module.css'

const Form = () => {
  const [ newUser, setNewUser ] = useState({
    nombre: "",
    email: "",
  });

  const [ errors, setErrors ] = useState({});

  const handleInputChange = (event) => {
    setNewUser({
      ...newUser,
      [ event.target.name ]: event.target.value,
    });
  };

  const validate = (newUser) => {
    const emailRegex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    const error = { nombreError: '', emailError: '' };

    if (!newUser.nombre || newUser.nombre.length < 5) {
      error.nombreError =
        ' Minimum of 5 characters';
    }

    if (!newUser.email || !emailRegex.test(newUser.email)) {
      error.emailError = 'Invalid email';
    }

    if (error.nombreError || error.emailError) {
      setErrors(error);
      return false;
    }

    setErrors({});
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate(newUser);

    if (!isValid) {
      return;
    }
    alert(`Thank you ${newUser.nombre}, we will send an email`);
  };

  return (
    <div>
      <form className={styles.form}>
        <input
          className={errors.nombreError ? 'inputError' : ""}
          name='nombre'
          type='text'
          placeholder='Name'
          onChange={handleInputChange}
        />
        {errors.nombreError && <label> {errors.nombreError}</label>}
        <input
          className={errors.emailError ? 'inputError' : ''}
          name='email'
          type='email'
          placeholder='Email'
          onChange={handleInputChange}
        />
        {errors.emailError && <label> {errors.emailError}</label>}
        <button onClick={handleSubmit}>Send</button>
      </form>
    </div>
  );
};

export default Form;
