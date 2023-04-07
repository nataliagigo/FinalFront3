import axios from "axios";
import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useEstadosGlobalesContext } from "../Components/utils/DentistContext";

const Home = () => {
  const { theme, dentists, setOdontologos } = useEstadosGlobalesContext();

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users').then((res) => {
      setOdontologos(res.data);
    });
  }, []);

  return (
    <main className={theme.color}>
      <h1>Home</h1>
      <div className="card-grid">
        {dentists.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
