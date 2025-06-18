import React from "react";
import HeroCard from "../../components/HeroCard";

function BlogHero() {
  const heroData = {
    title1: "Our ",
    title2: " Blog",
    p: "Our team of experts brings together passionate individuals to provide personalized and effective therapy services.",
  };
  return (
    <div className="our-blog  py-[4vw]">
      <div className="container-xxl">
        <div className="mb-10" data-aos="fade-up" data-aos-duration="1000">
          <HeroCard
            imgSrc="/herocard.jpg"
            title1={heroData.title1}
            title2={heroData.title2}
            p={heroData.p}
          />
        </div>
      </div>
    </div>
  );
}

export default BlogHero;
