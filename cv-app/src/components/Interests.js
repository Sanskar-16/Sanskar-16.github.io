import React from 'react';

const Interests = ({ interests }) => (
  <section>
    <h2>Interests and Activities</h2>
    <ul>
      {interests.map((interest, index) => (
        <li key={index}>{interest}</li>
      ))}
    </ul>
  </section>
);

export default Interests;
