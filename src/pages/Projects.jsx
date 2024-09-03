import React from 'react';
import { Link } from 'react-router-dom';

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
    <div className="container mt-3">
      <div className="d-flex justify-content-center mb-4">  
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
</div>

      
      <h1 className="text-center mb-4">My Projects</h1>
      
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
