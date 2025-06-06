import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "../../components/Hero";
import ButtonPrimary from "../../components/ButtonPrimary";

const images = [
  { src: "program-hero-1.png", alt: "Program image 1" },
  { src: "program-hero-2.png", alt: "Program image 2" },
  { src: "program-hero-3.png", alt: "Program image 3" },
];

function HeroProgram({ data }) {
  // console.log(data)
  const {title, image, link} = data
  // console.log(image)
  // console.log(data)
  // const data = {
  //   title: [
  //     { text: "Physical ", class: "font-calvino" },
  //     { text: " therapy", class: "font-calvino-italic" },
  //   ],
  //   paragraphs: [
  //     {
  //       text: "Helping your child improve and increase their strength and coordination so they can freely conduct their everyday activities.",
  //       class: "text-center",
  //     },
  //   ],
  //   btn: {
  //     text: "Register Now",
  //     link: "/apply",
  //   },
  //   textAlign: "text-center",
  //   spacing: "p-4",
  // };
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // 3 seconds between slides
  };

  return (
    <section className="w-full">
      <img src={image[0]} alt="" />
      {/* Desktop Images */}
      <div className="hidden md:grid grid-cols-3 ">
        {image.map((item, index) => (
          <img key={index} src={item}  className="w-full" />
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden">
        <Slider {...settings}>
          {image.map((img, index) => (
            <img
              key={index}
              src={img}
              className="w-full h-64 object-cover"
            />
          ))}
        </Slider>
      </div>
      <div className="bg-hero-gradient">
        <div className="container-fixed">
          {/* Text Section */}
          <div className="max-w-5xl m-auto">
            <h1 className="h1 text-white text-center">
              { 
              title.map((part, i) => (
                <span key={i} className={part.class}>
                  {" "}
                  {part.text}{" "}
                </span>
              ))}
            </h1>
            <p className="text-white text-center">{data.description}</p>
            <div className="flex justify-center mt-4">
              <ButtonPrimary link={link} text={"Register Now"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroProgram;
