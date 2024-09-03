import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaKaggle, FaResearchgate } from 'react-icons/fa';
import myPicture from '../assets/hero-img.png'; 
import resumeFile from '../assets/cv.pdf'; 

function AboutMe() {
  return (
    <div className="text-center mt-5">
      <img src={myPicture} alt="My Picture" className="rounded-circle mb-4" style={{ width: '150px', height: '150px' }} />
      <h1 className="mb-3">Ye Myat Moe</h1>
      <h3 className="text-muted mb-4">Software Engineer</h3>
      <p className="lead mb-4">I am a passionate learner and always seeking new challenges to grow.</p>
      <div className="d-flex justify-content-center mb-4">
        <a href="https://github.com/yemyat144" className="mx-3" aria-label="GitHub"><FaGithub size={28} /></a>
        <a href="https://instagram.com/dest_voyage_" className="mx-3" aria-label="Instagram"><FaInstagram size={30} /></a>
        <a href="https://linkedin.com" className="mx-3" aria-label="LinkedIn"><FaLinkedin size={30} /></a>
        <a href="https://www.kaggle.com/yemyatmoe" className="mx-3" aria-label="Kaggle"><FaKaggle size={23} /></a>
        <a href="https://www.researchgate.net/profile/Ye-Myat-Moe" className="mx-3" aria-label="Researchgate"><FaResearchgate size={28} /></a>
      </div>
      <a href={resumeFile} className="btn btn-primary" download>Resume</a>
    </div>
  );
}

export default AboutMe;
