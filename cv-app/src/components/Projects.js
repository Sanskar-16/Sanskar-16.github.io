import React from 'react';

const Projects = ({ projects }) => (
  <section>
    <h2>Projects worked on</h2>
    {projects.map((project, index) => (
      <div key={index}>
        <h3>{index + 1}. <a href={project.link}>{project.name}</a></h3>
        {project.description && <p>{project.description}</p>}
        {project.languages && <p>Languages used - {project.languages}</p>}
        {project.algorithms && <p>Algorithms used - {project.algorithms}</p>}
      </div>
    ))}
  </section>
);

export default Projects;
