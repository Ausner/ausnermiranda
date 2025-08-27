import React, { useContext } from 'react';
import './Experience.css';
import { themeContext } from '../../Context';

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='Experience'>
        <div className="achievement">
            <div className="circle" style={{color: darkMode ? 'white' : '', background: darkMode ? '#454546' : ''}}>6+</div>
            <span style={{color: darkMode ? 'white' : ''}}>years </span>
            <span>Experience</span>
        </div>
        <div className="achievement">
            <div className="circle" style={{color: darkMode ? 'white' : '', background: darkMode ? '#454546' : ''}}>10+</div>
            <span style={{color: darkMode ? 'white' : ''}}>completed </span>
            <span>Projects</span>
        </div>
        <div className="achievement">
            <div className="circle" style={{color: darkMode ? 'white' : '', background: darkMode ? '#454546' : ''}}>5+</div>
            <span style={{color: darkMode ? 'white' : ''}}>companies </span>
            <span>work</span>
        </div>
    </div>
  )
}

export default Experience