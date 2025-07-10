import React from 'react';
import TimelineView from './TimelineView'; // Import the new component

const Education = ({ education }) => (
  <section id="education">
    <h2>Education</h2>
    <TimelineView items={education} type="education" />
  </section>
);

export default Education;
