import React, { useContext } from 'react';
import './Portfolio.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Pizza from '../../img/pizza.png';
import Ecommerce from '../../img/e-commerce.png';
import Ubuntu from '../../img/ubuntu.png';
import PortolioPng from '../../img/portfolio.png';
import { themeContext } from '../../Context';



const Portfolio = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id='Projects'>
        {/* Heading */}
        <span  style={{color: darkMode ? 'white' : ''}}>Recent Projects</span>
        <span>Portfolio</span>

        {/* Slider */}
        <Swiper 
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className='portfolio-slider'
        >
            <SwiperSlide>
                <a href='https://all-pizza.vercel.app/' target='blank'>
                    <img src={Pizza} alt="" />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href='https://official-am-store.vercel.app/' target='blank'>
                    <img src={Ecommerce} alt="" />
                </a>

            </SwiperSlide>
            <SwiperSlide>
                <a href='https://ausnermiranda.com' target='blank'>
                    <img src={PortolioPng} alt="" />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href='https://ubuntu-portfolio.netlify.app/' target='blank'>
                    <img src={Ubuntu} alt="" />
                </a>
            </SwiperSlide>
        </Swiper>
    </div>
)
}

export default Portfolio