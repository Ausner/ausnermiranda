import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import me from '../../img/me.png';
import flag from '../../img/flag.png'

import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimgoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { motion } from 'framer-motion';
import { themeContext } from "../../Context";
import { useContext } from "react";

const Intro = () => {
    const transition = {duration: 2,type: 'spring'};
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span     style={{
      color: darkMode ? 'white' : ''
    }}>Hey! I Am</span>
                <span>Ausner Miranda</span>
                <span>High experienced Software Engineer from Costa Rica. Full Stack Developer With high lever of experience in web development,<br/>
                    producting the Quality work.
                </span>
            </div>
            <button className="button i-button">Hire me</button>

            <div className="i-icons">
                <a href='http://cr.linkedin.com/in/ausner-miranda' target='blank'>
                    <img src={LinkedIn} draggable={false} alt="" />
                </a>
                <a href='https://github.com/Ausner' target='blank'>
                    <img src={Github} draggable={false} alt="" />
                </a>
            </div>

        </div>
        <div className="i-right">
            <img src={Vector1} draggable={false} alt="" />
            <img src={Vector2} draggable={false} alt="" />
            <img src={flag} draggable={false} alt="" />
            <motion.img
            initial={{left:'-36%'}}
            whileInView={{left:'-24%'}}
            transition={transition}

            alt="" 
            src={glassesimgoji}/>
            <div style={{top: '-4%', left: '68%'}} className='floating-div'>
                <FloatingDiv image={crown} txt1="Full Stack" txt2="Developer"/>
            </div>
            <div style={{top: '18rem', left: '0rem'}} className='floating-div'>
                <FloatingDiv image={thumbup} txt1="Experienced" txt2="Software Enginner"/>
            </div>

            <div className='blur' style={{background: "rgb(230 210 255)"}}></div>
            <div className='blur' style={{background:'#C1F5FF', top: '17rem', width: '21rem', height:'11rem', left: '-9rem'}}></div>
        </div>
    </div>
  )
}

export default Intro