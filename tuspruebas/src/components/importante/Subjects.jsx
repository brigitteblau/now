//src/components/importante/Subjects
import React, { useState, useEffect } from "react";
import Topics from "./Topics";
import "../../css/importante/subjects.css";
import { getSubjects } from "../../data/api";

const Subjects = ({ schoolId, yearId, onSubjectSelect, onTopicSelect }) => {
  const [subjects, setSubjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [expandedSubject, setExpandedSubject] = useState(null);

  useEffect(() => {
    const fetchSubjects = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getSubjects(schoolId, yearId);
        setSubjects(data);
        setExpandedSubject(null);
      } catch (err) {
        setError("Error al obtener las materias");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (schoolId && yearId) {
      fetchSubjects();
    } else {
      setSubjects([]);
    }
  }, [schoolId, yearId]);

  const handleSubjectClick = (subjectId) => {
    onSubjectSelect(subjectId);
    setExpandedSubject(expandedSubject === subjectId ? null : subjectId);
  };

  if (loading) {
    return <p>Cargando materias...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="subjects">
      {subjects.length === 0 ? (
        <p>No hay materias disponibles.</p>
      ) : (
        subjects.map((subject) => (
          <div key={subject.id} className="subject-container">
            <button
              className={`subject-button ${expandedSubject === subject.id ? 'expanded' : ''}`}
              onClick={() => handleSubjectClick(subject.id)}
            >
              {subject.name}
            </button>
            
            {expandedSubject === subject.id && (
              <div className="topics-container">
                <Topics
                  schoolId={schoolId}
                  yearId={yearId}
                  subjectId={subject.id}
                  onTopicSelect={onTopicSelect}
                />
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Subjects;