import React, { useState } from "react";
import "../../css/pages/home.css";
import Donation from "../layout/Donation";
import Modal from "../temporal/Modal";
import All from "../importante/All";
import Search from "../layout/Search";
import CounterSection from "../layout/CounterSection";
function Home() {
  


  return (
    <div className="home">
      <Modal/>
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
<CounterSection/>
<hr />
 <Donation/>
    </div>
  );
}

export default Home;
