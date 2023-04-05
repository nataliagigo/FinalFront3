import { useEstadosGlobalesContext } from "../../Components/utils/DentistContext";
import "./style.css";

const NotFound = () => {
  const { theme } = useEstadosGlobalesContext();
  return (
    <section className={`error ${theme.color}`}>
      <h1>Page Not Found</h1>
    </section>
  );
};

export default NotFound;
