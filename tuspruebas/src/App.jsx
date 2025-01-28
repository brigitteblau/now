// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/routes";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { SchoolProvider } from "./context/SchoolContext";

function App() {
  return (
    <SchoolProvider>
      <Router>
        <Header />
        <div>
          <AppRoutes />
        </div>
        <Footer />
      </Router>
    </SchoolProvider>
  );
}

export default App;