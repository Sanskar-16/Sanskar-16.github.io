import React from 'react';
import './SkillVisualization.css'; // We'll create this CSS file next

const SkillBar = ({ skillName, level }) => {
  // Basic mapping of level to a percentage for the bar width
  // This can be made more sophisticated later
  const proficiencyMap = {
    'Beginner': '30%',
    'Intermediate': '60%',
    'Advanced': '90%',
    'Fluent': '100%' // For languages
  };

  const barWidth = proficiencyMap[level] || '50%'; // Default if level undefined

  return (
    <div className="skill-bar-container">
      <div className="skill-name">{skillName}</div>
      <div className="skill-bar-bg">
        <div className="skill-bar-fill" style={{ width: barWidth }}>
          {level}
        </div>
      </div>
    </div>
  );
};

const SkillVisualization = ({ skills }) => {
  if (!skills || (!skills.technical?.length && !skills.languages?.length)) {
    return <p>No skills data provided.</p>;
  }

  return (
    <div className="skill-visualization">
      <h4>Technical Skills</h4>
      {skills.technical && skills.technical.length > 0 ? (
        skills.technical.map((skill, index) => (
          <SkillBar key={`tech-${index}`} skillName={skill.name} level={skill.level} />
        ))
      ) : (
        <p>No technical skills listed.</p>
      )}

      <h4>Languages</h4>
      {skills.languages && skills.languages.length > 0 ? (
        skills.languages.map((lang, index) => (
          <SkillBar key={`lang-${index}`} skillName={lang.name} level={lang.level} />
        ))
      ) : (
        <p>No languages listed.</p>
      )}
      <p style={{textAlign: 'center', marginTop: '15px'}}>
        <em>(Placeholder for more advanced skill visualization e.g. radar chart, tag cloud)</em>
      </p>
    </div>
  );
};

export default SkillVisualization;
