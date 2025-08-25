import React, { useContext } from 'react';
import './Navbar.css';
import Toggle from '../Toggle/Toggle';
import { themeContext } from '../../Context';

const Navbar = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name" style={{color: darkMode ? 'white' : ''}}>Portfolio</div>
            <Toggle />
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none', color: darkMode ? 'white' : ''}}>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Projects</li>
                </ul>
            </div>
            <button className="button n-button">
                Contact
            </button>
        </div>
    </div>
  )
}

export default Navbar