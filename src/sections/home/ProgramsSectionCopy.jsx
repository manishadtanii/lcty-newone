import React, { useState } from 'react'
import Heading from '../../components/Heading';

function ProgramsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
    const data = {
        title: [
            { text: "Expanding your", class: "font-calvino" },
            { text: "Child’s potential", class: "font-calvino-italic" },
        ],
        textAlign: "md:text-end",
        spacing: "mb-4 lg:mb-10",
        fontSize: "h2 leading-tight",
        fontColor: "secondary-text-1",
    };
     const programs = [
    {
      number: "01.",
      title: "Music Therapy",
      description:
        "With movement, melody, and rhythm, music therapy promotes emotional expression, communication, and social interaction in a positive, enjoyable way.",
      image: "care-5.jpg",
      bg: "#F9D9E4",
      link:"/programs/music-therapy"
    },
    {
      number: "02.",
      title: "Yoga Therapy",
      description:
        "Synthesizing slow-moving exercise with conscious breathing, yoga therapy assists children in developing balance and concentration with a playful twist.",
      image: "care-6.jpg",
      bg: "#D4E9FF",
      link:"/programs/yoga-therapy"
    },
    {
      number: "03.",
      title: "Interactive Metronome",
      description:
        "This brain-targeted software enhances timing, attention and coordination through engaging, rhythm-based exercises to enhance concentration.",
      image: "care-7.jpg",
      bg: "#FFEFD4",
      link:"/programs/interactive-metronome"
    },
    {
      number: "04.",
      title: "Tutoring",
      description:
        "Personalized learning assistance based on your child's individual learning style by mastering the critical skills at their own pace.",
      image: "care-8.jpg",
      bg: "#E0FFE6",
      link:"/programs/tutoring"
    },
  ];
  return (
    <section className="program-scetion w-full " >
      <div className="container-fixed">
        {/* Heading */}
        <div className="max-w-[1000px] md:ms-auto"  data-aos="fade-up"> 
        <Heading data={data} className />
        </div>

        <p className="block lg:hidden body-t font-archivo mt-3 leading-[100%] body-t-color mb-10">
         We understand that every child is unique, with their own special way of learning and growing. That's why we offer a range of dedicated therapies and support services, delivered with a caring touch and tailored to nurture their individual potential.
        </p>

        {/* Mobile Image */}
        <img
          src={programs[activeIndex].image}
          alt="Program Image"
          className="rounded-lg w-full object-cover block lg:hidden mb-8"
        />

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Image Box - Desktop */}
          <div
            className="hidden lg:block rounded-lg transition-all duration-500 md:order-2"
            style={{
              backgroundColor: programs[activeIndex].bg,
            }}
          >
            <img
              src={programs[activeIndex].image}
              alt="Program"
              className="rounded-lg w-full object-cover transition duration-300"
            />
          </div>

          {/* Right Text & Boxes */}
          <div className='md:order-1'>
            <p className="body-t font-archivo mt-3 leading-[100%] body-t-color hidden lg:block ">
              We understand that every child is unique, with their own special way of learning and growing. That's why we offer a range of dedicated therapies and support services, delivered with a caring touch and tailored to nurture their individual potential.
            </p>

            <div className="space-y-4 mt-4">
              {programs.map((program, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`p-3 lg:p-6 flex items-end justify-between gap-4 cursor-pointer transition-colors duration-300 ${
                    activeIndex === index
                      ? "bg-[#AE93FF] text-white"
                      : "hover:bg-[#AE93FF] group"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <h3
                      className={` h2 font-archivo transition-colors ${
                        activeIndex === index
                          ? "text-white"
                          : "secondary-text-1"
                      }`}
                    >
                      {program.number}
                    </h3>
                    <div>
                      <h3
                        className={` h2 font-calvino transition-colors ${
                          activeIndex === index
                            ? "text-white"
                            : "secondary-text-1"
                        }`}
                      >
                        {program.title}
                      </h3>
                      <p
                        className={`body-t font-archivo mt-3 leading-5  transition-colors ${
                          activeIndex === index ? "text-white" : "body-t-color"
                        }`}
                      >
                        {program.description}
                      </p>
                    </div>
                  </div>
                  <i
                    className={`far fa-arrow-up h2 rotate-45 transition-colors ${
                      activeIndex === index ? "text-white" : "body-t-color"
                    }`}
                  ></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection
