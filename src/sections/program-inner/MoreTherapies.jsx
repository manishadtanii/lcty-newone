import React from "react";
import Heading from "../../components/Heading";
import Card from "../../components/Card";

function MoreTherapies({data}) {
  const heading = {
    title: [
      { text: "More ", class: "font-calvino" },
      { text: " therapies", class: "font-calvino-italic" },
    ],
    textAlign: "text-center",
    color: "text-white",
    fontSize: "h1",
  };
  const slides = [
    {
      title: "Physical Therapy",
      image: "yoga-therapy.png",
      redirectUrl: "/yoga-therapy",
      bgColor: "primary-bg-2",
      btnBg: "bg-white",
      btnText: "primary-text-1",
      animationDelay: "100",
    },
    {
      title: "Occupational Therapy",
      image: "yoga-therapy.png",
      redirectUrl: "/yoga-therapy",
      bgColor: "primary-bg-2",
      btnBg: "bg-white",
      btnText: "primary-text-1",
      animationDelay: "100",
    },
    {
      title: "Yoga Therapy",
      image: "yoga-therapy.png",
      redirectUrl: "/yoga-therapy",
      bgColor: "primary-bg-2",
      btnBg: "bg-white",
      btnText: "primary-text-1",
      animationDelay: "100",
    },
    {
      title: "LCTY Tutor Therapy",
      image: "yoga-therapy.png",
      redirectUrl: "/yoga-therapy",
      bgColor: "primary-bg-2",
      btnBg: "bg-white",
      btnText: "primary-text-1",
      animationDelay: "100",
    },
    {
      title: "ABA",
      image: "yoga-therapy.png",
      redirectUrl: "/yoga-therapy",
      bgColor: "primary-bg-2",
      btnBg: "bg-white",
      btnText: "primary-text-1",
      animationDelay: "100",
    },
  ];
  return (
    <div className="more-therapies bg-hero-gradient">
      <div className="container-fixed ">
        <Heading data={heading} />
        <div className="more-therapies-cards py-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.slides.map((item, index) => (
              <Card data={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreTherapies;
