import React from "react";
import { useEstadosGlobalesContext } from "./utils/DentistContext";
import { Link } from "react-router-dom";
import { Paths } from "./utils/Paths";
import DarkModeButton from "./DarkModeButton/DarkModeButton";

const Navbar = () => {
  const { theme, dispatchTheme } = useEstadosGlobalesContext();
  const { home, contact, favs } = Paths;

  const handleTheme = () => {
    dispatchTheme({ type: theme.color === "light" ? "SET_DARK" : "SET_LIGHT" });
  };

  return (
    <nav className={theme.color}>
      
      <Link to={home.path}>{home.name}</Link>
      <Link to={contact.path}>{contact.name}</Link>
      <Link to={favs.path}>{favs.name}</Link>
      <DarkModeButton onClick={handleTheme} />
    </nav>
  );
};

export default Navbar;
