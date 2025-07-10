import React from 'react';

const Skills = ({ skills }) => (
  <section>
    <h2>Technical Skills</h2>
    <ul>
      {skills.technical.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
    <h2>Languages</h2>
    <ul>
      {skills.languages.map((lang, index) => (
        <li key={index}>{lang}</li>
      ))}
    </ul>
  </section>
);

export default Skills;
