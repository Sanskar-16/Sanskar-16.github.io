import React, { useState } from 'react';
import './InteractiveProject.css'; // We'll create this CSS file next

const InteractiveProject = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`interactive-project ${isExpanded ? 'expanded' : ''}`}>
      <div className="project-header" onClick={toggleExpand}>
        <h3>{project.name}</h3>
        <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
          View Project
        </a>
        <span className="expand-icon">{isExpanded ? '-' : '+'}</span>
      </div>
      {isExpanded && (
        <div className="project-details">
          <p><strong>Description:</strong> {project.description || 'No description available.'}</p>
          <p><strong>Detailed Info:</strong> {project.details || 'More details coming soon...'}</p>
          {project.techStack && <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>}
          {project.languages && <p><strong>Languages:</strong> {project.languages}</p>}
          {project.algorithms && <p><strong>Algorithms:</strong> {project.algorithms}</p>}
          {project.images && project.images.length > 0 && (
            <div className="project-images">
              <h4>Screenshots/Images:</h4>
              {project.images.map((image, index) => (
                <img key={index} src={image} alt={`${project.name} screenshot ${index + 1}`} style={{ maxWidth: '200px', margin: '5px' }}/>
              ))}
            </div>
          )}
          <p><em>(Placeholder for more interactive elements or detailed content)</em></p>
        </div>
      )}
    </div>
  );
};

export default InteractiveProject;
