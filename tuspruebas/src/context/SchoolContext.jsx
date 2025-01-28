// src/context/SchoolContext.js
import React, { createContext, useState, useContext } from 'react';

const SchoolContext = createContext();

export const SchoolProvider = ({ children }) => {
  const [selectedSchoolId, setSelectedSchoolId] = useState(null);
  const [selectedSchoolName, setSelectedSchoolName] = useState("Descubrí");

  const handleSchoolSelect = (schoolId, schoolName) => {
    setSelectedSchoolId(schoolId);
    setSelectedSchoolName(schoolName);
  };

  return (
    <SchoolContext.Provider 
      value={{ 
        selectedSchoolId, 
        selectedSchoolName,
        handleSchoolSelect 
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
};

export const useSchool = () => {
  const context = useContext(SchoolContext);
  if (!context) {
    throw new Error('useSchool must be used within a SchoolProvider');
  }
  return context;
};