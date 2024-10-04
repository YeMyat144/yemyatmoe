import React from 'react';  
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';  
import AboutMe from './pages/AboutMe';  
import Projects from './pages/Projects';  
import Contact from './pages/Contact';  
import theme from './pages/theme';

function App() {  
  return (  
    <Router>  
      <div style={{ height: '100vh', backgroundColor: theme.palette.text.main}}>  
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