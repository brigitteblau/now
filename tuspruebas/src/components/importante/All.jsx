// src/components/importante/All.jsx
import React, { useState } from "react";
import Schools from "./Schools";
import Years from "./Years";
import Topics from "./Topics";
import Images from "./Images";
import "../../css/importante/all.css";

const All = () => {
  const [selectedSchoolId, setSelectedSchoolId] = useState(null);
  const [selectedYearId, setSelectedYearId] = useState(null);
  const [selectedSubjectId, setSelectedSubjectId] = useState(null);
  const [selectedTopicId, setSelectedTopicId] = useState(null);

  const handleSchoolSelect = (schoolId) => {
    setSelectedSchoolId(schoolId);
    setSelectedYearId(null);
    setSelectedSubjectId(null);
    setSelectedTopicId(null);
  };

  const handleYearSelect = (yearId) => {
    setSelectedYearId(yearId);
    setSelectedSubjectId(null);
    setSelectedTopicId(null);
  };

  const handleSubjectSelect = (subjectId) => {
    setSelectedSubjectId(subjectId);
    setSelectedTopicId(null);
  };

  const handleTopicSelect = (topicId) => {
    setSelectedTopicId(topicId);
  };

  return (
    <div className="container-all">
      <div className="titulo-div">
        <h1>Solo lo mejor para los mejores</h1>
        <span>Encuentra pruebas, tp y resumenes para avanzar en tu educación.</span>
      </div>
      
      <Schools onSchoolSelect={handleSchoolSelect} />
      
      {selectedSchoolId && (
        <Years
          schoolId={selectedSchoolId}
          onYearSelect={handleYearSelect}
          onSubjectSelect={handleSubjectSelect}
        />
      )}
      
      {selectedSchoolId && selectedYearId && selectedSubjectId && selectedTopicId && (
        <Images
          schoolId={selectedSchoolId}
          yearId={selectedYearId}
          subjectId={selectedSubjectId}
          topicId={selectedTopicId}
        />
      )}
    </div>
  );
};

export default All;