import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BrandsWrapper, SliderBrand } from '../style';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default () => {
  return (
    <BrandsWrapper>
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide><SliderBrand className="Img1"/></SwiperSlide>
      <SwiperSlide><SliderBrand className="Img2"/></SwiperSlide>
      <SwiperSlide><SliderBrand className="Img3"/></SwiperSlide>
      <SwiperSlide><SliderBrand className="Img4"/></SwiperSlide>
      <SwiperSlide><SliderBrand className="Img5"/></SwiperSlide>
      <SwiperSlide><SliderBrand className="Img6"/></SwiperSlide>
      <SwiperSlide><SliderBrand className="Img7"/></SwiperSlide>
      <SwiperSlide><SliderBrand className="Img8"/></SwiperSlide>
    </Swiper>
    </BrandsWrapper>
  );
};