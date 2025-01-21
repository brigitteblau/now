
    import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home" ;
const AppRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={<Home/>} />
      <Route path="/about" element={<div>About page</div>} />
      <Route path="/collaborate" element={<div>Collaborate page</div>} />
      <Route path="/join" element={<div>Join page</div>} />
      <Route path="/doing-good" element={<div>Doing Good page</div>} />
      <Route path="/faq" element={<div>FAQ page</div>} />
      <Route path="/contact" element={<div>Contact page</div>} />
      <Route path="/terms" element={<div>Terms page</div>} />
      <Route path="/privacy-policy" element={<div>Privacy Policy page</div>} />
      <Route path="/cookie-settings" element={<div>Cookie Settings page</div>} />
      <Route path="/cookie-declaration" element={<div>Cookie Declaration page</div>} />
    </Routes>
  );
};

export default AppRoutes;

