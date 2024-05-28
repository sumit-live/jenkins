// src/App.js
import React from 'react';
import Navbar from './Components/Navbar';
import Introduction from './Components/intro';
import Education from './Components/education';
import ProfessionalExperience  from './Components/experience'
import Projects from './Components/projects';
import Internships from './Components/internship';
import Contact from './Components/contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <Education />
      <ProfessionalExperience />
      <Projects />
      <Internships />
      <Contact />
    </div>
  );
}

export default App;
