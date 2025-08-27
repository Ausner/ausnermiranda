import React, { useContext } from 'react';
import './Navbar.css';
import Toggle from '../Toggle/Toggle';
import { themeContext } from '../../Context';
import { Link } from 'react-scroll';

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
                    <Link spy={true} to={'Navbar'} smooth={true} activeClass='activeClass'>
                        <li>Home</li>
                    </Link>
                    <Link spy={true} to={'Services'} smooth={true}>
                        <li>Services</li>
                    </Link>

                    <Link spy={true} to={'Experience'} smooth={true} >
                        <li>Experience</li>
                    </Link>
                    
                    <Link spy={true} to={'Projects'} smooth={true} >
                        <li>Projects</li>
                    </Link>
                    
                </ul>
            </div>
            <Link spy={true} to={'Contact'} smooth={true} >
                <button className="button n-button">
                    Contact
                </button>
            </Link>

        </div>
    </div>
  )
}

export default Navbar