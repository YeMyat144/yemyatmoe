import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-light mb-4">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
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
        </div>
      </nav>

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