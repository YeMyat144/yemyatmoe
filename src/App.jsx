import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Contact from './sections/Contact/Contact';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
