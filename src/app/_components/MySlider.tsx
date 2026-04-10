"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';

import "swiper/swiper.css"
import "swiper/css/navigation"
import "swiper/css/pagination"

 interface mySliderProps {
    listOfImages : string[];
    spaceBetween? : number;
    slidesPerView?: number;
 }



export default function mySlider( {listOfImages , spaceBetween =100, slidesPerView =3}: mySliderProps){
  return (
    <Swiper
      loop
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination,Autoplay]}
      autoplay={{ delay: 3000 }}
    >
      {listOfImages.map((imgSrc) => (
        <SwiperSlide>
          <img className="w-full object-cover h-100" src={imgSrc} alt="image"/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};