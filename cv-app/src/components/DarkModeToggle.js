import React from 'react';
import './DarkModeToggle.css'; // To be created

const DarkModeToggle = ({ toggleTheme, isDarkMode }) => {
  return (
    <button onClick={toggleTheme} className="dark-mode-toggle">
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
