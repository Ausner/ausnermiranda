import React, { useContext } from 'react';
import './Works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Pillar from '../../img/3pillar-logo.svg';
import AKC from '../../img/akc-logo.png';
import github from '../../img/github.png';
import { themeContext } from '../../Context';


const Works = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works">
      {/* left side */}
      <div className="awesome">
        <span style={{color: darkMode ? 'white' : ''}}>Works for All these</span>
        <span>Brands & Clients</span>
        <span>
          UpToWork, Freelancer,
          <br/>Fiverr, Personal Projects,
          <br/>3pillar Global, USA Clients, 
          <br/>American Kennel Club Contractor,
          <br/>Coach for Programming
        </span>
        <button className="button s-button">Hire me</button>
        <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
      </div>

      {/* Right side */}
      <div className="w-right">
        <div className="w-mainCircle" style={{background: darkMode ? "#666666" : ''}}>
          <div className="w-secCircle" style={{background: darkMode ? "#666666" : ''}}>
            <img src={Upwork}/>
          </div>
          <div className="w-secCircle" style={{background: darkMode ? "#666666" : ''}}>
            <img src={Fiverr}/>
          </div>
          <div className="w-secCircle" style={{background: darkMode ? "#666666" : ''}}>
            <img src={Pillar}/>
          </div>
          <div className="w-secCircle" style={{background: darkMode ? "#666666" : ''}}>
            <img src={AKC}/>
          </div>
          <div className="w-secCircle" style={{background: darkMode ? "#666666" : ''}}>
            <img src={github}/>
          </div>
        </div>
        {/* Background circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  )
}

export default Works