import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function TestimonialsSliderNew() {
  const data = [
    {
      id: 1,
      title: [
        { text: "Music ", class: "font-calvino" },
        { text: " Therapy   ", class: "font-calvino-italic" },
      ],
      position: "~Glocal Edits",
      text1:
        "Music therapy, through the dynamic interplay of movement, captivating melodies and inherent rhythm, serves as a powerful medium for fostering emotional expression, enhancing communication abilities and nurturing meaningful social interaction.",
      text2:
        "It provides a unique and engaging environment where individuals can explore and connect with their inner world and with others in a supportive and pleasurable manner.",
      img: "testimonial/1.png",
      btnLink: "/programs/modern-therapy",
      isCenter: false,
    },
    {
      id: 2,
      title: [
        { text: "Music ", class: "font-calvino" },
        { text: " Therapy   ", class: "font-calvino-italic" },
      ],
      position: "~Head Field Solutions",
      text1:
        "Music therapy, through the dynamic interplay of movement, captivating melodies and inherent rhythm, serves as a powerful medium for fostering emotional expression, enhancing communication abilities and nurturing meaningful social interaction.",
      text2:
        "It provides a unique and engaging environment where individuals can explore and connect with their inner world and with others in a supportive and pleasurable manner.",
      img: "testimonial/2.png",
      btnLink: "/programs/modern-therapy",
      isCenter: false,
    },
    {
      id: 3,
      title: [
        { text: "Music ", class: "font-calvino" },
        { text: " Therapy   ", class: "font-calvino-italic" },
      ],
      position: "~Taste & Beyond",
      text1:
        "Music therapy, through the dynamic interplay of movement, captivating melodies and inherent rhythm, serves as a powerful medium for fostering emotional expression, enhancing communication abilities and nurturing meaningful social interaction.",
      text2:
        "It provides a unique and engaging environment where individuals can explore and connect with their inner world and with others in a supportive and pleasurable manner.",
      img: "testimonial/3.png",
      btnLink: "/programs/modern-therapy",
      isCenter: false,
    },
    {
      id: 4,
      title: [
        { text: "Music ", class: "font-calvino" },
        { text: " Therapy   ", class: "font-calvino-italic" },
      ],
      position: "~ArtifiQ",
      text1:
        "Music therapy, through the dynamic interplay of movement, captivating melodies and inherent rhythm, serves as a powerful medium for fostering emotional expression, enhancing communication abilities and nurturing meaningful social interaction.",
      text2:
        "It provides a unique and engaging environment where individuals can explore and connect with their inner world and with others in a supportive and pleasurable manner.",
      img: "testimonial/4.png",
      btnLink: "/programs/modern-therapy",
      isCenter: false,
    },
    {
      id: 5,
      title: [
        { text: "Music ", class: "font-calvino" },
        { text: " Therapy   ", class: "font-calvino-italic" },
      ],
      position: "~Glocal BPO",
      text1:
        "Music therapy, through the dynamic interplay of movement, captivating melodies and inherent rhythm, serves as a powerful medium for fostering emotional expression, enhancing communication abilities and nurturing meaningful social interaction.",
      text2:
        "It provides a unique and engaging environment where individuals can explore and connect with their inner world and with others in a supportive and pleasurable manner.",
      img: "testimonial/5.png",
      btnLink: "/programs/modern-therapy",
      isCenter: false,
    },
  ];
  const sliderData = [
    {
      title: [
        { text: "Music ", class: "font-calvino" },
        { text: " Therapy   ", class: "font-calvino-italic" },
      ],
      paragraphs: [
        "Music therapy, through the dynamic interplay of movement, captivating melodies and inherent rhythm, serves as a powerful medium for fostering emotional expression, enhancing communication abilities and nurturing meaningful social interaction. ",
        "It provides a unique and engaging environment where individuals can explore and connect with their inner world and with others in a supportive and pleasurable manner.",
      ],
      button: {
        text: "Take me to the program",
        iconClass: "fal fa-arrow-right",
        link: "/programs/modern-therapy",
      },
      image: {
        src: "modern-1.png",
        alt: "Therapy 1",
      },
    },
    {
      title: [
        { text: "Music ", class: "font-calvino" },
        { text: " Therapy   ", class: "font-calvino-italic" },
      ],
      paragraphs: [
        "Music therapy, through the dynamic interplay of movement, captivating melodies and inherent rhythm, serves as a powerful medium for fostering emotional expression, enhancing communication abilities and nurturing meaningful social interaction. ",
        "It provides a unique and engaging environment where individuals can explore and connect with their inner world and with others in a supportive and pleasurable manner.",
      ],
      button: {
        text: "Take me to the program",
        iconClass: "fal fa-arrow-right",
        link: "/programs/modern-therapy",
      },
      image: {
        src: "modern-1.png",
        alt: "Therapy 1",
      },
    },
    {
      title: [
        { text: "Music ", class: "font-calvino" },
        { text: " Therapy   ", class: "font-calvino-italic" },
      ],
      paragraphs: [
        "Music therapy, through the dynamic interplay of movement, captivating melodies and inherent rhythm, serves as a powerful medium for fostering emotional expression, enhancing communication abilities and nurturing meaningful social interaction. ",
        "It provides a unique and engaging environment where individuals can explore and connect with their inner world and with others in a supportive and pleasurable manner.",
      ],
      button: {
        text: "Take me to the program",
        iconClass: "fal fa-arrow-right",
        link: "/programs/modern-therapy",
      },
      image: {
        src: "modern-1.png",
        alt: "Therapy 1",
      },
    },
  ];
  const settings = {
    // className: "center",
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    // autoplay: true,
    // autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="py-10">
      {data.map((d, i) => (
        <div key={d.id} className="rounded-2xl  cursor-grab px-3">
          <div className="relative overflow-hidden">
            <img
              src={d.img}
              className="parallax-img  w-full rounded-2xl object-cover transition-transform grayscale transition"
              alt={d.name}
            />
            <div className="px-2"></div>
            <div className="testimonial-text cursor-pointer rounded-lg absolute  bg-[#20202053] backdrop-blur-sm p-5">
              <h3 className="h2 text-white leading-none mb-3">
                {d.title.map((part, i) => (
                  <span key={i} className={part.class}>
                    {" "}
                    {part.text}{" "}
                  </span>
                ))}
              </h3>
              <div className="font-archivo text-white  mb-3">{d.text1}</div>
              <div className="font-archivo text-white hidden md:block">{d.text2}</div>
              {/*  */}
              <Link to={d.btnLink}>
                <button className=" font-calvino-italic text-white mt-3">
                  <i className="fal fa-arrow-right"></i> Take me to the program
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
