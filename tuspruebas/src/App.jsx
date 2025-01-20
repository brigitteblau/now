import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/routes";
import Footer from "./components/layout/Footer" ;
import Header from "./components/layout/Header";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <AppRoutes />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
