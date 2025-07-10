import React from 'react';
import TimelineView from './TimelineView'; // Import the new component

const WorkExperience = ({ experience }) => (
  <section id="work-experience">
    <h2>Work Experience</h2>
    <TimelineView items={experience} type="experience" />
  </section>
);

export default WorkExperience;
