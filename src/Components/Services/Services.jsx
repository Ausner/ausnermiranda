import React, { useContext } from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './Resume.pdf';
import { themeContext } from '../../Context';

const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='Services'>
        {/* left side */}
        <div className="awesome">
          <span style={{color: darkMode ? 'white' : ''}}>My Awesome</span>
          <span>Services</span>
          <span>
            FreeLance works related to Web Development, App Development, Automate Scripts, <br/>Private Educational Classes, Tutorials and more...
          </span>
          <a href={Resume} download>
            <button className="button s-button">Download CV</button>
          </a>
          <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className="cards">
          <div style={{left: "14rem"}}>
            <Card emoji={HeartEmoji} heading={'Software Engineer'} detail={'Lead teams, Coach teammates, Documentation & Architectures, Active participation, SCRUM, KANBAN'}/>
          </div>

          <div style={{top: "12rem", left: "-4rem"}}>
            <Card emoji={Glasses} heading={'Developer'} detail={'Angular, React, NodeJS, NestJS, Python, Flask, FastAPI, HTML5, CSS3, JavaScript, Typescript'}/>
          </div>

          <div style={{top: "19rem", left: "12rem"}}>
            <Card emoji={Humble} heading={'Programming Tutor'} detail={'Private lessons, Coaching, Answer Questions, Test Preparation'}/>
          </div>
          <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services