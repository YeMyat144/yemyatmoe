import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaKaggle, FaResearchgate } from 'react-icons/fa';
import myPicture from '../assets/hero-img.png'; 
import resumeFile from '../assets/cv.pdf'; 
import { Link } from 'react-router-dom';
function AboutMe() {
  return (
    <div className="text-center mt-3">
      <nav className="navbar navbar-expand-lg navbar-light mb-4">  
        <div className="navbar-collapse justify-content-center">  
          <ul className="navbar-nav">  
            <li className="nav-item">  
              <Link className="nav-link" to="/">Me</Link>  
            </li>  
            <li className="nav-item">  
              <Link className="nav-link" to="/projects">Projects</Link>  
            </li>  
            <li className="nav-item">  
              <Link className="nav-link" to="/contact">Contact</Link>  
            </li>  
          </ul>  
        </div>  
      </nav>
     <br />
     <br />

      <img src={myPicture} alt="My Picture" className="rounded-circle mb-4" style={{ width: '150px', height: '150px' }} />
      <h2 className="mb-2">Ye Myat Moe</h2>
      <h4 className="text-muted mb-4">Software Engineer</h4>
      <div className="d-flex justify-content-center mb-4">
        <a href="https://github.com/yemyat144" className="mx-3" aria-label="GitHub"><FaGithub size={28} /></a>
        <a href="https://linkedin.com" className="mx-3" aria-label="LinkedIn"><FaLinkedin size={29} /></a>
        <a href="https://instagram.com/dest_voyage_" className="mx-3" aria-label="Instagram"><FaInstagram size={30} /></a>
        <a href="https://www.researchgate.net/profile/Ye-Myat-Moe" className="mx-3" aria-label="Researchgate"><FaResearchgate size={28} /></a>
        <a href="https://www.kaggle.com/yemyatmoe" className="mx-3" aria-label="Kaggle"><FaKaggle size={23} /></a>
      </div>
      <a href={resumeFile} className="btn btn-primary" download>Resume</a>
    </div>
  );
}

export default AboutMe;
