import React from 'react';

function Projects() {
  const projectData = [
    { name: 'Vitrual Keyboard', description: 'A virtual keyboard controlled hand gesture controls using Python', repoLink: 'https://github.com/YeMyat144/virtual_keyboard' },
    { name: 'Face Landmark Detection', description: 'A real-time facial landmark detection system using TensorFlow.js', repoLink: 'https://github.com/YeMyat144/facemesh' },
    { name: 'Gallery', description: 'Use Electron to build a gallery cross-platform application', repoLink: 'https://github.com/YeMyat144/Electron_Gallery' },
    { name: 'ToDo List', description: 'Pracice Vue with a task list website', repoLink: 'https://github.com/YeMyat144/todo-list' },
    { name: 'Yolo', description: 'An ecommerce website ', repoLink: 'https://github.com/yourusername/project-three' },
    { name: 'HangMan Game', description: 'A finding word game using typescript', repoLink: 'https://github.com/YeMyat144/Typescript' },
    { name: 'Yolo', description: 'An ecommerce website browsing products, a shopping cart for managing selections', repoLink: 'https://github.com/yourusername/project-three' },
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
