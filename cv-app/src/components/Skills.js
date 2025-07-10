import React from 'react';
import SkillVisualization from './SkillVisualization'; // Import the new component

const Skills = ({ skills }) => (
  <section id="skills">
    <h2>Skills</h2>
    <SkillVisualization skills={skills} />
  </section>
);

export default Skills;
