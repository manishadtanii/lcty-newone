import React from "react";
import Slider from "react-slick";

export default function TestimonialsSliderNew() {
  const data = [
    {
      id: 1,
      name: "John Doe",
      position: "~Glocal Edits",
      text: "Digicots knows how to strike a balance among knowledge, humor & relatability. They really know how to keep our viewers engaged.",
      img: "testimonial/1.png",
      isCenter: false,
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "~Head Field Solutions",
      text: "It feels like having a team that can flawlessly harmonize with our vision, mission and values. They thoroughly understand how we want the world to see us; and they make it happen.",
      img: "testimonial/2.png",
      isCenter: false,
    },
    {
      id: 3,
      name: "Ashwary Sinha",
      position: "~Taste & Beyond",
      text: "The design sense perfectly aligns with the vision we have. Having Digicots is like having a therapist who gets you.",
      img: "testimonial/3.png",
      isCenter: false,
    },
    {
      id: 4,
      name: "Ashwary Sinha",
      position: "~ArtifiQ",
      text: "They are data-driven and that is where our visions align. Their ability to blend data, tech & creativity is truly exceptional.",
      img: "testimonial/4.png",
      isCenter: false,
    },
    {
      id: 5,
      name: "Ashwary Sinha",
      position: "~Glocal BPO",
      text: "It is phenomenal how easily they dive into details and grab the gap. They really do know when, where and how to strike.",
      img: "testimonial/5.png",
      isCenter: false,
    },
  ]
  const settings = {
    // className: "center",
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
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
        <div
          key={d.id}
          className="rounded-2xl  cursor-grab px-3"
        >
          <div className="relative overflow-hidden">
            <img
              src={d.img}
              className="parallax-img  w-full rounded-2xl object-cover transition-transform grayscale transition"
              alt={d.name}
            />
            <div className="px-2">
                
            </div>
            <div className="testimonial-text cursor-pointer rounded-lg absolute  bg-[#20202053] backdrop-blur-sm p-5">
              
              <p className="font-inter text-white text-[3vw] md:text-[.7vw] mb-3 raleway">
                {d.text}
              </p>
              <div>
                <div className="position font-inter font-bold text-white text-[3.5vw] md:text-[.8vw] raleway">
                  {d.position}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
