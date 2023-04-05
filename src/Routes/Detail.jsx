import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useEstadosGlobalesContext } from "../Components/utils/DentistContext";

const Detail = () => {
  const { dentists, theme } = useEstadosGlobalesContext();
  const { id } = useParams();

  const [dentist, setDentist] = useState(undefined);

  useEffect(() => {
    const o = dentists.find((dentist) => {
      return dentist.id == id;
    });
    setDentist(o);
  }, [dentists]);

  return (
    <div className={theme.color}>
      <h1>Detail Dentist id </h1>
      {dentist && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dentist.name}</td>
              <td>{dentist.email}</td>
              <td>{dentist.phone}</td>
              <td>{dentist.website}</td>
            </tr>
          </tbody>
        </table>
      )}
      {!dentist && <h1>Dentist Not Found</h1>}
    </div>
  );
};

export default Detail;
