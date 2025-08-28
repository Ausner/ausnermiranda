import React, { useContext } from 'react';
import './Works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Pillar from '../../img/3pillar-logo.svg';
import AKC from '../../img/akc-logo.png';
import arche from '../../img/arche.png';
import { themeContext } from '../../Context';
import { Link } from 'react-scroll';
import { motion } from "framer-motion";

const Works = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


      // transition
    const transition = {
      duration: 1.5,
      type: "spring",
    };


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
          <br/>Arche Software
        </span>
        <Link spy={true} to={'Contact'} smooth={true}>
          <button className="button s-button">Hire me</button>
        </Link>
        
        <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
      </div>

      {/* Right side */}
      <motion.div className="w-right"
      initial={{ rotate: 45 }}
      whileInView={{ rotate: 0 }}
      viewport={{ margin: "-40px" }}
      transition={transition}
      
      >
        <div className="w-mainCircle" style={{background: darkMode ? "#666666" : ''}}>
          <div className="w-secCircle" style={{background: darkMode ? "#666666" : ''}}>
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle" style={{background: darkMode ? "#666666" : ''}}>
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle" style={{background: darkMode ? "#666666" : 'black'}}>
            <img src={Pillar} alt="" />
          </div>
          <div className="w-secCircle" style={{background: darkMode ? "#666666" : ''}}>
            <img src={AKC} alt="" />
          </div>
          <div className="w-secCircle" style={{background: darkMode ? "#666666" : ''}}>
            <img src={arche} width={150} alt="" />
          </div>
        </div>
        {/* Background circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </motion.div>
    </div>
  )
}

export default Works