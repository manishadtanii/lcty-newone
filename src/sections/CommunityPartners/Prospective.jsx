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
      link: "https://app.practiceperfectemr.com/onlinebooking/633/#/landing/littlechamps",
    },
    slides: [
      {
        title: "Lorem Ipsum",
        image: "com-p-1.jpg",
        redirectUrl: "/yoga-therapy",
        bgColor: "primary-bg-2",
        btnBg: "secondary-bg-1",
        btnText: "text-white",
      },
      {
        title: "Lorem Ipsum",
        image: "com-p-2.jpg",
        redirectUrl: "/yoga-therapy",
        bgColor: "primary-bg-2",
        btnBg: "secondary-bg-1",
        btnText: "text-white",
      },
      {
        title: "Lorem Ipsum",
        image: "com-p-3.jpg",
        redirectUrl: "/yoga-therapy",
        bgColor: "primary-bg-2",
        btnBg: "secondary-bg-1",
        btnText: "text-white",
      },
      {
        title: "Lorem Ipsum",
        image: "com-p-4.jpg",
        redirectUrl: "/yoga-therapy",
        bgColor: "primary-bg-2",
        btnBg: "secondary-bg-1",
        btnText: "text-white",
      },
      {
        title: "Lorem Ipsum",
        image: "com-p-5.jpg",
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
            <span className="font-calvino">Welcome  </span>
            <span className="font-calvino-italic">to the Little Champs </span>
            <span className="font-calvino">Family   </span>
          </h1>
          <p className="max-w-[1100px] font-archivo body-t text-center  body-t-color overflow-hidden" data-aos="fade-up" data-aos-delay="100">
            From the very beginning, we treat your child as if they were our own, providing them with love, tolerance and a customized approach that values and acknowledges each small victory. Whether you need assistance with speech, mobility, sensory needs or emotional development, we are here to listen, support and walk with you.
          </p>
          <div className="" data-aos="fade-up" data-aos-delay="200">
          <ButtonPrimary text="Register Now" link={"https://app.practiceperfectemr.com/onlinebooking/633/#/landing/littlechamps"} />
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
