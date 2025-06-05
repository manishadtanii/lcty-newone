import React, { useEffect, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Slider() {
  const sliderData = [
    {
      title: [
        { text: "Music ", class: "font-calvino" },
        { text: " Therapy   ", class: "font-calvino-italic" },
      ],
      paragraphs: [
        "Music therapy, through the dynamic interplay of movement, captivating melodies and inherent rhythm, serves as a powerful medium for fostering emotional expression, enhancing communication abilities and nurturing meaningful social interaction. ",
        "It provides a unique and engaging environment where individuals can explore and connect with their inner world and with others in a supportive and pleasurable manner.",
      ],
      button: {
        text: "Take me to the program",
        iconClass: "fal fa-arrow-right",
        link: "/programs/modern-therapy",
      },
      image: {
        src: "modern-1.png",
        alt: "Therapy 1",
      },
    },
    {
      title: [
        { text: "Music ", class: "font-calvino" },
        { text: " Therapy   ", class: "font-calvino-italic" },
      ],
      paragraphs: [
        "Music therapy, through the dynamic interplay of movement, captivating melodies and inherent rhythm, serves as a powerful medium for fostering emotional expression, enhancing communication abilities and nurturing meaningful social interaction. ",
        "It provides a unique and engaging environment where individuals can explore and connect with their inner world and with others in a supportive and pleasurable manner.",
      ],
      button: {
        text: "Take me to the program",
        iconClass: "fal fa-arrow-right",
        link: "/programs/modern-therapy",
      },
      image: {
        src: "modern-1.png",
        alt: "Therapy 1",
      },
    },
    {
      title: [
        { text: "Music ", class: "font-calvino" },
        { text: " Therapy   ", class: "font-calvino-italic" },
      ],
      paragraphs: [
        "Music therapy, through the dynamic interplay of movement, captivating melodies and inherent rhythm, serves as a powerful medium for fostering emotional expression, enhancing communication abilities and nurturing meaningful social interaction. ",
        "It provides a unique and engaging environment where individuals can explore and connect with their inner world and with others in a supportive and pleasurable manner.",
      ],
      button: {
        text: "Take me to the program",
        iconClass: "fal fa-arrow-right",
        link: "/programs/modern-therapy",
      },
      image: {
        src: "modern-1.png",
        alt: "Therapy 1",
      },
    },
  ];
  const swiperWrappedRef = useRef(null)
  function adjustMargin(){
    const screenWidth = window.innerWidth;
    if(swiperWrappedRef.current){
        swiperWrappedRef.current.style.marginLeft = 
        screenWidth <= 520 
        ? "0px" 
        : screenWidth <= 650 
        ? "-50px" 
        : screenWidth <= 800 
        ? "-100px" 
        : "-150px"; 
    }
  }

  useEffect(()=>{
    adjustMargin();
    window.addEventListener("resize", adjustMargin)
    return ()=>window.removeEventListener("resize", adjustMargin)
}, [])
  return (
    <main>
      <div className="container">
        <Swiper
          modules={[Pagination]}
          grabCursor
          initialSlide={2}
          centeredSlides
          slidesPerView="auto"
          speed={800}
          slideToClickedSlide
          pagination={{ clickable: true }}
          breakpoints={{
            320: { spaceBetween: 40 },
            650: { spaceBetween: 30 },
            1000: { spaceBetween: 20 },
          }}
          onSwiper={(swiper)=>{
            swiperWrappedRef.current = swiper.wrapperEl;
          }}
        >
          {sliderData.map((item, index) => (
            <SwiperSlide key={index}>
              <ModernCard data={item} className="w-full" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}

export default Slider;
