import React from 'react';

const Header = ({ personalInfo }) => (
  <header>
    <h1>{personalInfo.name}</h1>
    <p>T: {personalInfo.phone} | <a href={`mailto:${personalInfo.email}`}>Gmail</a> | <a href={personalInfo.linkedin}>LinkedIn</a> | <a href={personalInfo.github}>Github</a> | <a href={personalInfo.kaggle}>Kaggle</a> | <a href={personalInfo.twitter}>Twitter</a></p>
  </header>
);

export default Header;
