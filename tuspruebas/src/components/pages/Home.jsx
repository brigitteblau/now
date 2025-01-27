import React, { useState } from "react";
import "../../css/pages/home.css";
import Donation from "../layout/Donation";
import All from "../importante/All";
import Search from "../layout/Search";
function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <div className="phrase">
          <h1>
            <span className="upper-text">no pidas más pruebas,</span>
            <br />
            <b className="highlight-text">búscalas</b>
          </h1>
        </div>
        <Search/>
      </header>
      <hr />
      <section className="school-section">
      <All />
</section>
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
            <span className="badge green">De América Latina</span>
          </div>
        </div>
      </section>
      <hr />
        <Donation/>
    </div>
  );
}

export default Home;
