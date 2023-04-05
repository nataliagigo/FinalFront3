import React from "react";
import styles from '../Components/Styles/Footer.module.css'
import { useEstadosGlobalesContext } from "./utils/DentistContext";

const Footer = () => {
  const { theme } = useEstadosGlobalesContext();
  return (
    <>
      <div className={styles.bar}>

      </div>

      <footer text={theme.color} className={styles.footer}>
        <p className={styles.pFooter}>Powered by</p>
        <img src="../images/DH.png" alt="DH-logo" className={styles.img} />
      </footer >
      <section>
        <nav>
          <a href=""></a>
        </nav>

      </section>
    </>
  );
};

export default Footer;
