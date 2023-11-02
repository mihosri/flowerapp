import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import slide_image from './assets/rose.jpg';
import axios from 'axios';

const API_URL = 'https://api.unsplash.com/search/photos';
const IMAGES_PER_PAGE = 1;
let imageURLValue = '';

function App() {
  console.log('key', import.meta.env.VITE_API_KEY);
  const [imageURL, setImageURL] = useState('');
  useEffect(() => {
    const getImages = async () => {
      try {
        const { data } = await axios.get(
          `${API_URL}?query=redrose&page=1&per_page=${IMAGES_PER_PAGE}&client_id=${
            import.meta.env.VITE_API_KEY
          }`
        );

        console.log('result', data);
        imageURLValue = data.results[0].urls.small;
        setImageURL(imageURLValue);
      } catch (error) {
        console.log(error);
      }
      
    };

    getImages();
  }, []);

  return (
    <>
      <div className="container">
        <div className="header">
          <p className="title">Petals and Prose</p>
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
            <img src={imageURL} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imageURL} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imageURL} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imageURL} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imageURL} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imageURL} alt="slide_image" />
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

        <div className="prose">
          <p className="flower">
            Red Rose: <span className="meaning">Love</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
