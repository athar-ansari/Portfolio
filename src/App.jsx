import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Education from "./Components/Education/Education";
import Skill from "./Components/Skill/Skill";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/skill" element={<Skill />} />
          <Route exact path="/project" element={<Project />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
