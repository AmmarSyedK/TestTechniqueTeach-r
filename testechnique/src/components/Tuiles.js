import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Tuiles.css"

// import required modules
import { Pagination } from "swiper";

const matiere = "Anglais";

function Tuiles() {
    return (
        <>
      <Swiper
      effect={"coverflow"}
        slidesPerView={4}
        spaceBetween={0}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
      </Swiper>
    </>
    )
}

export default Tuiles