import React from "react";
import Contact from "pages/Contact";
import ResourceCenter from "pages/ResourceCenter";
import About from "pages/About";
import Pricing from "pages/Pricing";
import Homepage from "pages/Homepage";
import SignUp from "pages/SignUp";
import Login from "pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/resourcecenter" element={<ResourceCenter />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
