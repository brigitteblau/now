import React from "react";
import "../../css/pages/home.css"; 

function Home() {
  return (
    <div className="home">

      <header className="home-header">
      <div className="phrase">
  <h1>
    <span className="upper-text">no pidas más pruebas,</span><br />
    <b className="highlight-text">búscalas</b>
  </h1>
</div>

<div className="search-bar">
    <div className="input-wrapper">
      <input 
        type="text" 
        placeholder="Buscar materias, libros o temas" 
        aria-label="Buscar contenido educativo" 
        className="search-input"
      />
      <button className="search-button" onClick={() => handleSearch()} aria-label="Iniciar búsqueda">
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

 </header>

<hr/>
      <section className="counter-section">
        <h2>
          <span>1M alumnos salvados,</span> y sigue la cuenta
        </h2>
        <p>
          Cada día se añaden pruebas, trabajos prácticos por las comunidades más
          activas del mundo.
        </p>
        <div className="counters">
          <div className="counter">
            <h3>5000</h3>
            <p>Recursos para el estudio</p>
            <span className="badge purple">1 nuevo cada hora</span>
          </div>
          <div className="counter">
            <h3>1000</h3>
            <p>Usuarios</p>
            <span className="badge orange">Todos los meses</span>
          </div>
          <div className="counter">
            <h3>10</h3>
            <p>Instituciones</p>
            <span className="badge green"> De America Latina</span>
          </div>
        </div>
      </section>

    <hr/>
      <section className="donation-section">
        <p>
 <b> Trabajamos mucho para poder mantener este sitio web en pie!</b>
        </p>
        <div className="donation-buttons">
        
          <button>
            Colaborá con material de estudio
          </button>
          
          
          <button>
            <span>DONÁ</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
