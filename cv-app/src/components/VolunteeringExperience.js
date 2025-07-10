import React from 'react';

const VolunteeringExperience = ({ volunteering }) => (
  <section>
    <h2>Volunteering experience</h2>
    {volunteering.map((exp, index) => (
      <div key={index}>
        <h3>{exp.role} ({exp.dates})</h3>
        <p>{exp.organization}</p>
        {exp.responsibilities && (
          <ul>
            {exp.responsibilities.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </section>
);

export default VolunteeringExperience;
