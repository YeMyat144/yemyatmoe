import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Projects() {
  const projectData = [
    { name: 'Virtual Keyboard', description: 'A virtual keyboard controlled by hand gesture controls using Python', repoLink: 'https://github.com/YeMyat144/virtual_keyboard' },
    { name: 'Face Landmark Detection', description: 'A real-time facial landmark detection system using TensorFlow.js', repoLink: 'https://github.com/YeMyat144/facemesh' },
    { name: 'Gallery', description: 'Use Electron to build a gallery cross-platform application', repoLink: 'https://github.com/YeMyat144/Electron_Gallery' },
    { name: 'ToDo List', description: 'Practice Vue with a task list website', repoLink: 'https://github.com/YeMyat144/todo-list' },
    { name: 'Yolo', description: 'An e-commerce website', repoLink: 'https://github.com/yourusername/project-three' },
    { name: 'HangMan Game', description: 'A word-finding game using TypeScript', repoLink: 'https://github.com/YeMyat144/Typescript' },
    { name: 'Ganja', description: 'A shopping website for ganja using JavaScript', repoLink: 'https://github.com/YeMyat144/Menu_Page_javascript' },
  ];

  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-light mb-4 text-center">
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
                <Link className="nav-link text-primary"  to="/">Me</Link>
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
      
      <h2 className="text-center mb-4">My Projects</h2>
      
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Project Name</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">Repository</th>
          </tr>
        </thead>
        <tbody>
          {projectData.map((project, index) => (
            <tr key={index}>
              <td>{project.name}</td>
              <td>{project.description}</td>
              <td className="text-center">
                <a href={project.repoLink} className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">Link</a>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="text-center text-muted">Coming soon...</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Projects;
