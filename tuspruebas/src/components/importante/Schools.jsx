//src/components/importante/Schools
import React, { useState, useEffect } from "react";
import { getSchools } from "../../data/api";
import Loader from "../shared/Loader";
import "../../css/importante/buttons.css";
import { useSchool } from "../../context/SchoolContext";

const Schools = ({ onSchoolSelect }) => {
  const [schools, setSchools] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { selectedSchoolId, handleSchoolSelect } = useSchool();

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
        });
      }
    };
    fetchSchools();
  }, []);

  const handleSchoolClick = (school) => {
    handleSchoolSelect(school.id, school.name);
    onSchoolSelect(school.id);
  };

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
            checked={selectedSchoolId === school.id}
            onChange={() => handleSchoolClick(school)}
          />
          <span className="name">{school.name}</span>
        </label>
      ))}
    </div>
  );
};

export default Schools;