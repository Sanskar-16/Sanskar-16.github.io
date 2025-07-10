import React from 'react';
import './TimelineItem.css'; // To be created

const TimelineItem = ({ item, type }) => {
  // Type can be 'education' or 'experience' to slightly alter display if needed
  const title = type === 'education' ? item.degree : item.role;
  const subtitle = type === 'education' ? item.university : item.company;

  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <span className="timeline-item-dates">{item.years || item.dates}</span>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        {item.responsibilities && (
          <ul>
            {item.responsibilities.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        )}
        {item.modules && type === 'education' && (
          <>
            <p><strong>Key Modules:</strong> {item.modules.slice(0, 3).join(', ')}...</p>
          </>
        )}
        <p className="timeline-details-placeholder">
          <em>{item.details || '(More details will appear here in the final version)'}</em>
        </p>
        <span className="timeline-item-circle"></span>
      </div>
    </div>
  );
};

export default TimelineItem;
