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

// Choix du nombre de TeacherCard affiché dans la page
const nombre_card = 8;
// Array keys nous permettant de générer plusieurs mêmes TeacherCard
const keys = [...Array(nombre_card).keys()];

function Tuiles() {
    return (
        <>
      {/* Utilisation de Swiper pour faire défiler les TeacherCard */}
      <Swiper
      effect={"coverflow"}
        slidesPerView={4}
        spaceBetween={0}
        modules={[Pagination]}
        className="mySwiper"
      > 
        {/* Utilisation de map pour répéter plusieurs fois le composant TeacherCard et sauvegarder chaque itération (0,1,2,3,...) dans item */}
        {keys.map((item) => (
          <SwiperSlide><TeacherCard text={item} /></SwiperSlide>
        ))}
        
        {/* Ajout d'une slide vide pour améliorer l'apparence du défilement des tuiles */}
        <SwiperSlide></SwiperSlide>

      </Swiper>
    </>
    )
}

export default Tuiles