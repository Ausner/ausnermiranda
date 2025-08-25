import React, { useContext } from 'react';
import './FloatingDiv.css';
import { themeContext } from '../../Context';

const FloatingDiv = ({image, txt1, txt2}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="floatingdiv" style={{color: darkMode ? 'white' : '', background: darkMode ? '#454546' : ''}}>
        <img src={image}/>
        <span >
            {txt1}
            <br/>
            {txt2}
        </span>
    </div>
  )
}

export default FloatingDiv