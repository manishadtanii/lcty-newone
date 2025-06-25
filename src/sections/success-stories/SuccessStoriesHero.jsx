import React from 'react'
import HeroCard from '../../components/HeroCard';

function SuccessStoriesHero() {
    const heroData = {
    title1: "Success",
    title2: "Stories",
    // btn1: {
    //   text: "Register now",
    //   link: "https://app.practiceperfectemr.com/onlinebooking/633/#/landing/littlechamps",
    // },
    // btn2: {
    //   text: "Start demo",
    //   link: "/",
    // },
  };
  return (
    <div className='success-hero'>
      <div className="container-fixed">
        <HeroCard
          imgSrc="/herocard.jpg"
          title1={heroData.title1}
          title2={heroData.title2}
          btn1={heroData.btn1}
          // btn2={heroData.btn2}
        />
      </div>
    </div>
  )
}

export default SuccessStoriesHero
