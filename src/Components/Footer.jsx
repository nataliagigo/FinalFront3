import React from "react";
import styles from '../Components/Styles/Footer.module.css'
import { useEstadosGlobalesContext } from "./utils/DentistContext";


const Footer = () => {
  const { theme } = useEstadosGlobalesContext();
  return (
    <>
      <div className={styles.bar}>
        <img
          src='../images/ico-facebook.png'
          alt='iconFacebook'
          className={styles.socialneticon}
        />
        <img
          src='../images/ico-instagram.png'
          alt='iconInsta'
          className={styles.socialneticon} />

        <img
          src='../images/ico-whatsapp.png'
          alt='iconWhatsapp'
          className={styles.socialneticon}
        />


      </div>

      <footer text={theme.color} className={styles.footer}>
        <p className={styles.pFooter}>Powered by</p>
        <img src="../images/DH.png" alt="DH-logo" className={styles.img} />
      </footer >


    </>
  );
};

export default Footer;
