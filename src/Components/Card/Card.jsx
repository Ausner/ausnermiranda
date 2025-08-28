import React, { useContext } from 'react';
import './Card.css';
import { themeContext } from '../../Context';
import { Link } from 'react-scroll';

const Card = ({emoji, heading, detail}) => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span style={{color: darkMode ? 'white' : ''}}>{heading}</span>
        <span>{detail}</span>
        <Link spy={true} to={'Contact'} smooth={true}>
            <button className="button c-button" style={{color: darkMode ? 'white' : '', background: darkMode ? '#454546' : ''}}>LEARN MORE</button>
        </Link>
    </div>
  )
}

export default Card