import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaKaggle, FaResearchgate } from 'react-icons/fa';
import myPicture from '../assets/hero-img.png'; 
import resumeFile from '../assets/cv.pdf'; 
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function AboutMe() {
  return (
    <div className="container text-center mt-4">
      <nav className="navbar navbar-expand-lg navbar-light mb-5">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-primary" to="/">Me</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-primary" to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-primary" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <img src={myPicture} alt="My Picture" className="rounded-circle mb-4" style={{ width: '150px', height: '150px' }} />
      <h2 className="text-muted mb-2">Ye Myat Moe</h2>
      <h5 className="text-muted mb-4">Web Developer</h5>
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
