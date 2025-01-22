import React, { useState, useEffect } from "react";
import { getSchools } from "../../data/api"; 
import Loader from "../shared/Loader";
import "../../css/importante/buttons.css";

const Schools = ({ onSchoolSelect }) => {
  const [schools, setSchools] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Añadir estado de carga

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const data = await getSchools();
        setSchools(data);
      } catch (err) {
        setError("Error al obtener las escuelas");
        console.error(err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1); // Retraso de 2 segundos (ajústalo como desees)
      }
    };

    fetchSchools();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="radio-inputs">
      {schools.map((school) => (
        <label key={school.id} className="radio">
          <input
            type="radio"
            name="radio"
            onClick={() => onSchoolSelect(school.id)} // Notifica al padre la escuela seleccionada
          />
          <span className="name">{school.name}</span>
        </label>
      ))}
    </div>
  );
};

export default Schools;
