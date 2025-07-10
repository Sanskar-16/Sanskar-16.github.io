import React from 'react';
import TimelineItem from './TimelineItem';
import './TimelineView.css'; // To be created

const TimelineView = ({ items, type }) => {
  if (!items || items.length === 0) {
    return <p>No items to display in timeline.</p>;
  }

  return (
    <div className="timeline-view">
      {items.map((item, index) => (
        <TimelineItem key={index} item={item} type={type} />
      ))}
    </div>
  );
};

export default TimelineView;
