import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

function Tuiles() {
    return (
        <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
    )
}

export default Tuiles