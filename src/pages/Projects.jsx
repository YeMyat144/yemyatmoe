import React from 'react';

function Projects() {
  const projectData = [
    { name: 'Project One', description: 'Description of Project One', repoLink: 'https://github.com/yourusername/project-one' },
    { name: 'Project Two', description: 'Description of Project Two', repoLink: 'https://github.com/yourusername/project-two' },
    { name: 'Project Three', description: 'Description of Project Three', repoLink: 'https://github.com/yourusername/project-three' },
    // Add more projects as needed
  ];

  return (
    <div className="container mt-5">
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
      </table>
    </div>
  );
}

export default Projects;
