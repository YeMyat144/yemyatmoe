import React from 'react';  
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';  
import AboutMe from './pages/AboutMe';  
import Projects from './pages/Projects';  
import Contact from './pages/Contact';  

function App() {  
  return (  
    <Router>  
      <div className="container">  
        <Routes>  
          <Route path="/" element={<AboutMe />} />  
          <Route path="/projects" element={<Projects />} />  
          <Route path="/contact" element={<Contact />} />  
        </Routes>  
      </div>  
    </Router>  
  );  
}  

export default App;