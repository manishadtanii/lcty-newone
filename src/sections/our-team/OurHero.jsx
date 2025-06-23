import React from "react";
import HeroCard from "../../components/HeroCard";
import AboutSlider from "../../components/AboutSlider";

function OurHero() {
  const heroData = {
    title1: "Our ",
    title2: " Team",
    btn1: {
      text: "Discover",
      link: "/",
    },
    btn2: {
      text: "Start demo",
      link: "/",
    },
  };
  const imgData = [
    { src: "/vision-1.jpg", alt: "Therapy session 1" },
    { src: "/vision-2.jpg", alt: "Therapy session 2" },
    { src: "/vision-3.jpg", alt: "Therapy session 3" },
  ];
  return (
    <div className="our-hero bg-hero-gradient py-[4vw]">
      <div className="container-xxl">
        <div className="mb-10" data-aos="fade-up" data-aos-duration="1000">
          <HeroCard
            imgSrc="/herocard.jpg"
            title1={heroData.title1}
            title2={heroData.title2}
            // btn1={heroData.btn1}
            // btn2={heroData.btn2}
          />
        </div>
      </div>
      {/* Images */}
      <div className="" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
        <AboutSlider imgData={imgData} />
      </div>
    </div>
  );
}

export default OurHero;
