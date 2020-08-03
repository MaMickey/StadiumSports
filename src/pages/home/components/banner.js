import React, { Component } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderImg } from '../style';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide><SliderImg className="Img1"/></SwiperSlide>
      <SwiperSlide><SliderImg className="Img2"/></SwiperSlide>
      <SwiperSlide><SliderImg className="Img3"/></SwiperSlide>
      <SwiperSlide><SliderImg className="Img4"/></SwiperSlide>
    </Swiper>
  );
};