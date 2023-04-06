import { useEstadosGlobalesContext } from "../Components/utils/DentistContext";
import styles from '../Components/Styles/NotFound.module.css';

const NotFound = () => {
  const { theme } = useEstadosGlobalesContext();
  return (
    <section className={`${styles.error} ${theme.color}`}>
      <h1> 🦥  Page Not Found</h1>
    </section>
  );
};

export default NotFound;
