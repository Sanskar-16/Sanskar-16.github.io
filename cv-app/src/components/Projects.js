import React from 'react';
import InteractiveProject from './InteractiveProject'; // Import the new component

const Projects = ({ projects }) => (
  <section id="projects">
    <h2>Projects worked on</h2>
    {projects.map((project, index) => (
      <InteractiveProject key={index} project={project} />
    ))}
  </section>
);

export default Projects;
