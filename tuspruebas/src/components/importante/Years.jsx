//src/components/importante/Years.jsx
import React, { useState, useEffect } from "react";
import { getYears } from "../../data/api";
import Subjects from "./Subjects";
import { useSchool } from "../../context/SchoolContext";
import "../../css/importante/years.css";

const Years = ({ onYearSelect, onSubjectSelect }) => {
  const { selectedSchoolId } = useSchool();
  const [years, setYears] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedYearId, setSelectedYearId] = useState(null);

  // Reset selected year when school changes
  useEffect(() => {
    setSelectedYearId(null);
  }, [selectedSchoolId]);

  useEffect(() => {
    const fetchYears = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getYears(selectedSchoolId);
        setYears(data);
      } catch (err) {
        setError("Error al obtener los años");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (selectedSchoolId) {
      fetchYears();
    } else {
      setYears([]);
    }
  }, [selectedSchoolId]);

  const toggleYear = (yearId) => {
    setSelectedYearId((prevId) => {
      const newId = prevId === yearId ? null : yearId;
      if (newId !== null) {
        onYearSelect(newId);
      }
      return newId;
    });
  };

  if (loading) {
    return (
      <div className="years-container">
        <div className="years-content">
          <p className="loading-text">Cargando años...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="years-container">
        <div className="years-content">
          <p className="error-text">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="years-container">
      <div className="years-content">
        {years.length === 0 ? (
          <p className="no-years">
            Disculpa, todavía no tenemos información :( <br />
            ¡Cuando puedas mandanos tus documentos y los subimos!
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
                    schoolId={selectedSchoolId}
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