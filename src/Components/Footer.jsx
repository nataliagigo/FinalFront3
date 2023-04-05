import React from "react";
import { useEstadosGlobalesContext } from "./utils/DentistContext";

const Footer = () => {
  const { theme } = useEstadosGlobalesContext();
  return (
    <footer className={theme.color}>
      <p>Powered by</p>
      <img src="../images/DH.png" alt="DH-logo" />
    </footer>
  );
};

export default Footer;
