import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-center mb-4">
        <nav className="navbar navbar-expand-lg navbar-light">  
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
      </div>

      <h1 className="text-center mb-4">Contact Me</h1>
      
      <form className="mx-auto" style={{ maxWidth: '600px' }}>
        <div className="form-group mb-3">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Your Name" required />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Your Email" required />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" rows="5" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
