import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import TeacherCard from "./TeacherCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Tuiles.css"

// import required modules
import { Pagination } from "swiper";

const nombre_card = 8;
const keys = [...Array(nombre_card).keys()];

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
      
        {keys.map((item) => (
          <SwiperSlide><TeacherCard text={item} /></SwiperSlide>
        ))}
        
        <SwiperSlide></SwiperSlide>

      </Swiper>
    </>
    )
}

export default Tuiles