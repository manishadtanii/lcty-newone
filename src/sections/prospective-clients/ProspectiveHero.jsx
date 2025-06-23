import React from "react";
import HeroCard from "../../components/HeroCard";
import ButtonPrimary from "../../components/ButtonPrimary";

function ProspectiveHero() {
  const heroData = {
    title1: "Apply in now",
    title2: "for the best therapy",
    btn1: {
      text: "Register now",
      link: "https://app.practiceperfectemr.com/onlinebooking/633/#/landing/littlechamps",
    },
    btn2: {
      text: "Start demo",
      link: "/",
    },
  };
  return (
    <div className="prospective-hero">
      <div className="container-fixed">
        <div className="content flex flex-col gap-4 justify-start lg:flex-row items-end lg:justify-between pb-4 ">
          <h1 className="h1 secondary-text-1" data-aos="fade-left" data-aos-duration="1000">
            <span className="font-calvino">Little Champs</span>
            <span className="font-calvino-italic"> therapy & yoga</span>
          </h1>
          <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            We believe every child deserves a safe and supportive space to move,
            calm down and build healthy habits for life.
          </p>
          <div className="" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
            <ButtonPrimary
              text="Discover"
              link="/programs"
            />
          </div>
        </div>
        <div className="" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400"> 
          <HeroCard
          imgSrc="/herocard.jpg"
          title1={heroData.title1}
          title2={heroData.title2}
          btn1={heroData.btn1}
          // btn2={heroData.btn2}
        />
        </div>
      </div>
    </div>
  );
}

export default ProspectiveHero;
