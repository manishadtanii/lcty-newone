import React from "react";
import Card from "../../components/Card";

function DayCare() {
  const slides = [
    {
      title: "Physical Therapy",
      image: "yoga-therapy.png",
      redirectUrl: "/yoga-therapy",
      bgColor: "secondary-bg-1",
      btnBg: "bg-white",
      btnText: "primary-text-1",
      animationDelay:"100"
    },
    {
      title: "Occupational Therapy",
      image: "yoga-therapy.png",
      redirectUrl: "/yoga-therapy",
      bgColor: "secondary-bg-1",
      btnBg: "bg-white",
      btnText: "primary-text-1",
      animationDelay:"200"
    },
    {
      title: "Yoga Therapy",
      image: "yoga-therapy.png",
      redirectUrl: "/yoga-therapy",
      bgColor: "secondary-bg-1",
      btnBg: "bg-white",
      btnText: "primary-text-1",
      animationDelay:"300"
    },
    {
      title: "LCTY Tutor Therapy",
      image: "yoga-therapy.png",
      redirectUrl: "/yoga-therapy",
      bgColor: "secondary-bg-1",
      btnBg: "bg-white",
      btnText: "primary-text-1",
      animationDelay:"400"
    },
    {
      title: "ABA",
      image: "yoga-therapy.png",
      redirectUrl: "/yoga-therapy",
      bgColor: "secondary-bg-1",
      btnBg: "bg-white",
      btnText: "primary-text-1",
      animationDelay:"500"
    },
    {
      title: "Yoga Therapy",
      image: "yoga-therapy.png",
      redirectUrl: "/yoga-therapy",
      bgColor: "secondary-bg-1",
      btnBg: "bg-white",
      btnText: "primary-text-1",
      animationDelay:"600"
    },
    {
      title: "LCTY Tutor Therapy",
      image: "yoga-therapy.png",
      redirectUrl: "/yoga-therapy",
      bgColor: "secondary-bg-1",
      btnBg: "bg-white",
      btnText: "primary-text-1",
      animationDelay:"700"
    },
    {
      title: "ABA",
      image: "yoga-therapy.png",
      redirectUrl: "/yoga-therapy",
      bgColor: "secondary-bg-1",
      btnBg: "bg-white",
      btnText: "primary-text-1",
      animationDelay:"800"
    },
  ];
  return (
    <section className="day-care primary-bg-2">
      <div className="container-fixed">
        <h2 className="h1 font-bold text-white text-center mb-10" data-aos="fade-up">
          <span className="font-calvino">Lorem</span>
          <span className="font-calvino-italic"> dolor sit </span>
        </h2>
        <div className="day-care-container">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {slides.map((src, index) => (
              <Card key={index} data={src} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DayCare;
