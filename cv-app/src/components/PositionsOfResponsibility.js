import React from 'react';

const PositionsOfResponsibility = ({ positions }) => (
  <section>
    <h2>Positions of responsibility</h2>
    {positions.map((position, index) => (
      <div key={index}>
        <h3>{position.role} ({position.dates})</h3>
        <p>{position.organization}</p>
        {position.responsibilities && (
          <ul>
            {position.responsibilities.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </section>
);

export default PositionsOfResponsibility;
