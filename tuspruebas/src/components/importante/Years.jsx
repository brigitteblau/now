//src/components/importante/Years.jsx
import React, { useState, useEffect } from "react";
import { getYears } from "../../data/api";
import Subjects from "./Subjects";  
import "../../css/importante/years.css";

const Years = ({ schoolId, onYearSelect, onSubjectSelect }) => {
  const [years, setYears] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedYearId, setSelectedYearId] = useState(null);

  useEffect(() => {
    const fetchYears = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getYears(schoolId);
        setYears(data);
      } catch (err) {
        setError("Error al obtener los años");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (schoolId) {
      fetchYears();
    } else {
      setYears([]);
    }
  }, [schoolId]);

  const toggleYear = (yearId) => {
    // Si el año ya está seleccionado, se cierra. De lo contrario, se selecciona.
    setSelectedYearId((prevId) => (prevId === yearId ? null : yearId));
    if (selectedYearId !== yearId) {
      onYearSelect(yearId);
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (loading) {
    return <p>Cargando años...</p>;
  }

  return (
    <div className="years-container">
      <div className="years-content">
        {years.length === 0 ? (
          <p className="no-years">
            Disculpa, todavia no tenemos información :( <br />
            Cuando puedas mandanos tus documentos y los subimos!
          </p>
        ) : (
          years.map((year) => (
            <div key={year.id} className="year-wrapper">
              <button
                className={`year-button ${selectedYearId === year.id ? "active" : ""}`}
                onClick={() => toggleYear(year.id)}
              >
                <span className="year-text">{year.name}</span>
                <span className="arrow">
                  {selectedYearId === year.id ? "▲" : "▼"}
                </span>
              </button>
              {selectedYearId === year.id && (
                <div className="subjects-container">
                  <Subjects
                    schoolId={schoolId}
                    yearId={year.id}
                    onSubjectSelect={onSubjectSelect}
                  />
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Years;
