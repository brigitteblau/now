import React from "react";
import "../../css/layout/search.css"; 
      
const Search = () => {
  return (
      <div className="search-bar">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Buscar materias, libros o temas"
              aria-label="Buscar contenido educativo"
              className="search-input"
            />
            <button
              className="search-button"
              onClick={() => handleSearch()}
              aria-label="Iniciar búsqueda"
            >
              <svg
                className="search-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                role="img"
                aria-hidden="true"
              >
                <path
                  d="M10.76 13.4852C8.42 11.1019 8.42 7.23149 10.76 4.83798C13.1 2.45464 16.9 2.45464 19.25 4.83798C21.59 7.22131 21.59 11.0917 19.25 13.4852C16.91 15.8685 13.11 15.8685 10.76 13.4852Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5 13.75L3 21.3889"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div> 
  );
};

export default Search;
