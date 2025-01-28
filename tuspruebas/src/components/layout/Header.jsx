// src/components/layout/Header.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/layout/header.css";
import { getSchools } from "../../data/api";
import { useSchool } from "../../context/SchoolContext";

const Header = () => {
  const [schools, setSchools] = useState([]);
  const [isSticky, setIsSticky] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();
  const { selectedSchoolName, handleSchoolSelect } = useSchool();

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const data = await getSchools();
        setSchools(data);
      } catch (err) {
        console.error("Error al obtener las escuelas:", err);
      }
    };
    fetchSchools();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest('.custom-select')) {
        setShowOptions(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (school) => {
    handleSchoolSelect(school.id, school.name);
    setShowOptions(false);
    
    // Navegar a Home si no estamos ahí
    navigate('/');
    
    // Usar setTimeout para asegurar que la navegación se complete
    setTimeout(() => {
      const schoolsSection = document.querySelector('.school-section');
      if (schoolsSection) {
        schoolsSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  return (
    <div className={`header ${isSticky ? "sticky" : ""}`}>
      <div className="header-content">
        <img src="/logo.png" alt="logo a++" />
        <h1 className="titulo">TUS PRUEBAS</h1>
        <div className="selects">
          <div className={`custom-select ${showOptions ? 'active' : ''}`}>
            <div
              className="selected-option"
              onClick={(e) => {
                e.stopPropagation();
                setShowOptions(!showOptions);
              }}
              aria-expanded={showOptions}
            >
              {selectedSchoolName}
            </div>
            <div className={`options ${showOptions ? 'show' : ''}`}>
              {schools.length === 0 ? (
                <div className="option">Cargando...</div>
              ) : (
                schools.map((school) => (
                  <div
                    key={school.id}
                    className="option"
                    onClick={() => handleOptionClick(school)}
                  >
                    {school.name}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="header-icons">
        <div className="heart-icon" title="Favorito">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.624 4.42399C3.965 5.18199 2.75 6.98599..."
              fill="#F24822"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;