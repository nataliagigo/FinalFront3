import React from "react";
import Form from "../Components/Form";
import { useEstadosGlobalesContext } from "../Components/utils/DentistContext";

const Contact = () => {
  const { theme } = useEstadosGlobalesContext();

  return (
    <div className={theme.color}>
      <h1>Contact Us</h1>
      <p className="centered">Send us your name and email</p>
      <Form />
    </div>
  );
};

export default Contact;
