import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import slide_image from './assets/rose.jpg';
import logo from './assets/logo.png';

function App() {
  return (
    <>
      <div className="container">
        <div className="header">
          <p className="slogan">Where every bloom tells a story!</p>
        </div>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverfloweffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={slide_image} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image} alt="slide_image" />
          </SwiperSlide>
          
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>

        <div className='prose'>
          <p className='flower'>Red Rose: <span className='meaning'>Love</span></p>
        </div>
      </div>
    </>
  );
}

export default App;
