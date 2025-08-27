import React, { useContext } from 'react';
import './Footer.css';
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';
import { themeContext } from '../../Context';


const Footer = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="footer">
        <img src={Wave} style={{width: '100%'}} draggable={false} alt="" />
        <div className="f-content">
            <span style={{color: darkMode ? 'black' : '', pointer: 'cursor'}}draggable={false}><a style={{textDecoration: 'none', color: darkMode ? 'black' : 'white'}} href='mailto:ausnermiranda@gmail.com'>ausnermiranda@gmail.com</a></span>
            <div className="f-icons">
                <span style={{color: darkMode ? 'black' : '' }}>All Rights Reserved {new Date().getFullYear()}</span>
            </div>
        </div>
    </div>
  )
}

export default Footer