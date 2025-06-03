import React from 'react'
import HeroSlider from '../../components/HeroSlider'
import ButtonPrimary from '../../components/ButtonPrimary'

function Prospective() {
    const data = {
    title: [
      { text: "Welcome", class: "font-calvino" },
      { text: "to the Little Champs", class: "font-calvino-italic" },
      { text: "Family", class: "font-calvino" },
    ],
    paragraphs: [
      {
        text: "From the very beginning, we treat your child as if they were our own, providing them with love, tolerance and a customized approach that values and acknowledges each small victory. Whether you need assistance with speech, mobility, sensory needs or emotional development, we are here to listen, support and walk with you.",
        class: "text-center",
      },
    ],
    btn:{
      text: "Register Now",
      link: "/apply",
    },
    slides: [
      {
        title: "Physical Therapy",
        image: "yoga-therapy.png",
        redirectUrl: "/yoga-therapy",
        bgColor: "primary-bg-2",
        btnBg: "secondary-bg-1",
        btnText: "text-white",
      },
      {
        title: "Occupational Therapy",
        image: "yoga-therapy.png",
        redirectUrl: "/yoga-therapy",
        bgColor: "primary-bg-2",
        btnBg: "secondary-bg-1",
        btnText: "text-white",
      },
      {
        title: "Yoga Therapy",
        image: "yoga-therapy.png",
        redirectUrl: "/yoga-therapy",
        bgColor: "primary-bg-2",
        btnBg: "secondary-bg-1",
        btnText: "text-white",
      },
      {
        title: "LCTY Tutor Therapy",
        image: "yoga-therapy.png",
        redirectUrl: "/yoga-therapy",
        bgColor: "primary-bg-2",
        btnBg: "secondary-bg-1",
        btnText: "text-white",
      },
      {
        title: "ABA",
        image: "yoga-therapy.png",
        redirectUrl: "/yoga-therapy",
        bgColor: "primary-bg-2",
        btnBg: "secondary-bg-1",
        btnText: "text-white",
      },
    ],
    textAlign:"text-center",
    spacing:"p-4"
  };
  return (
    <section className="pb-20">
      <div className="container-xxl">
        <div className="p-4 m-auto flex flex-col items-center justify-center gap-5 md:gap-8">
          <h1 className="h1 secondary-text-1 text-center overflow-hidden" data-aos="fade-up" data-aos-delay="">
            <span className="font-calvino">Little Champs </span>
            <span className="font-calvino-italic">therapy & yoga</span>
          </h1>
          <p className="max-w-[1100px] font-archivo body-t text-center  body-t-color overflow-hidden" data-aos="fade-up" data-aos-delay="100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan
            eros non fringilla faucibus. Sed scelerisque ultrices dui, vitae
            bibendum lorem bibendum ac. Duis eu nisi non orci fermentum commodo.{" "}
          </p>
          <div className="" data-aos="fade-up" data-aos-delay="200">
          <ButtonPrimary text="Register  Now" />
          </div>
        </div>
      </div>
      <div className="" data-aos="fade-up" data-aos-delay="300">
      <HeroSlider slides={data.slides}/>
      </div>
    </section>
  )
}

export default Prospective
