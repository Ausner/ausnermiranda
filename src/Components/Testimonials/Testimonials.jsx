import React, { useContext } from 'react';
import './Testimonials.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';
import profilePic4 from '../../img/profile4.jpg';
import profilePic5 from '../../img/profile5.jpg';
import profilePic6 from '../../img/profile6.jpg';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import { themeContext } from '../../Context';


const Testimonials = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  const clients = [
    {
      img: profilePic1,
      review: "Excelente trabajo"
    },
    {
      img: profilePic2,
      review: "Excelente trabajo"
    },
    {
      img: profilePic3,
      review: "Excelente trabajo"
    },
    {
      img: profilePic4,
      review: "Excelente trabajo"
    },
    {
      img: profilePic5,
      review: "Excelente trabajo"
    },
    {
      img: profilePic6,
      review: "Excelente trabajo"
    }
  ]


  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span style={{color: darkMode ? 'white' : ''}}>Clients always get </span>
        <span>Exceptional Work </span>
        <span style={{color: darkMode ? 'white' : ''}}>from me...</span>
        <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
        <div className="blur t-blur2" style={{background: "skyblue"}}></div>
      </div>

      {/** Slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable: true}}
      
      >
        {
          clients.map((client, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="testimonial">
                  <img src={client.img}/>
                  <span>{client.review}</span>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default Testimonials