import React from "react";
import Card from "../../components/Card";

function DayCare() {
  const slides = [
    {
      title: "Lorem Ipsum",
      image: "yoga-therapy.png",
      redirectUrl: "/lorem-ipsum",
      bgColor: "secondary-bg-1",
      btnBg: "bg-white",
      btnText: "primary-text-1",
      animationDelay:"100"
    },
    {
      title: "Lorem Ipsum",
      image: "yoga-therapy.png",
      redirectUrl: "/lorem-ipsum",
      bgColor: "secondary-bg-1",
      btnBg: "bg-white",
      btnText: "primary-text-1",
      animationDelay:"200"
    },
    {
      title: "Lorem Ipsum",
      image: "yoga-therapy.png",
      redirectUrl: "/lorem-ipsum",
      bgColor: "secondary-bg-1",
      btnBg: "bg-white",
      btnText: "primary-text-1",
      animationDelay:"300"
    },
    {
      title: "Lorem Ipsum",
      image: "yoga-therapy.png",
      redirectUrl: "/lorem-ipsum",
      bgColor: "secondary-bg-1",
      btnBg: "bg-white",
      btnText: "primary-text-1",
      animationDelay:"400"
    },
    {
      title: "Lorem Ipsum",
      image: "yoga-therapy.png",
      redirectUrl: "/lorem-ipsum",
      bgColor: "secondary-bg-1",
      btnBg: "bg-white",
      btnText: "primary-text-1",
      animationDelay:"500"
    },
    {
      title: "Lorem Ipsum",
      image: "yoga-therapy.png",
      redirectUrl: "/lorem-ipsum",
      bgColor: "secondary-bg-1",
      btnBg: "bg-white",
      btnText: "primary-text-1",
      animationDelay:"600"
    },
    {
      title: "Lorem Ipsum",
      image: "yoga-therapy.png",
      redirectUrl: "/lorem-ipsum",
      bgColor: "secondary-bg-1",
      btnBg: "bg-white",
      btnText: "primary-text-1",
      animationDelay:"700"
    },
    {
      title: "Lorem Ipsum",
      image: "yoga-therapy.png",
      redirectUrl: "/lorem-ipsum",
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
          <span className="font-calvino">Daycare </span>
          <span className="font-calvino-italic"> centre  </span>
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
