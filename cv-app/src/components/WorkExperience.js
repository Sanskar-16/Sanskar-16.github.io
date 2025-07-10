import React from 'react';

const WorkExperience = ({ experience }) => (
  <section>
    <h2>Work experience</h2>
    {experience.map((job, index) => (
      <div key={index}>
        <h3>{job.role} ({job.dates})</h3>
        <p>{job.company}</p>
        {job.responsibilities && (
          <ul>
            {job.responsibilities.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </section>
);

export default WorkExperience;
