import React from 'react';

const Education = ({ education }) => (
  <section>
    <h2>Education</h2>
    {education.map((edu, index) => (
      <div key={index}>
        <h3>{edu.degree} - {edu.university} ({edu.years})</h3>
        {edu.modules && (
          <>
            <h4>Modules:</h4>
            <ul>
              {edu.modules.map((module, i) => (
                <li key={i}>{module}</li>
              ))}
            </ul>
          </>
        )}
        <p>Grade Received - {edu.grade}</p>
      </div>
    ))}
  </section>
);

export default Education;
