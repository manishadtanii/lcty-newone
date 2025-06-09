import React, { useState } from "react";
import Heading from "../../components/Heading";

function ProgramsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = {
    title: [
      { text: "Caring for Your Child,", class: "font-calvino" },
      { text: "Covered by You", class: "font-calvino-italic" },

    ],
    textAlign: "text-left",
    spacing: "mb-4 lg:mb-10",
    fontSize: "h2 leading-tight",
    fontColor: "secondary-text-1",
  };
  const programs = [
    {
      number: "01.",
      title: "Physical Therapy",
      description:
        "Helping your child improve and increase their strength and coordination so they can freely conduct their everyday activities.",
      image: "care-1.jpg",
      bg: "#F9D9E4",
      link:"/programs/physical-therapy"
    },
    {
      number: "02.",
      title: "Occupational Therapy",
      description:
        "Supporting your child to help and give ease in their day-to-day task like dressing, feeding and building independence through new and playful activities. ",
      image: "care-2.jpg",
      bg: "#D4E9FF",
      link:"/programs/occupational-therapy"
    },
    {
      number: "03.",
      title: "Speech Therapy",
      description:
        "It assists in promoting clearer communication by aiding them with speech, language, and social skills, whereby they are able to speak confidently in public place.",
      image: "care-3.jpg",
      bg: "#FFEFD4",
      link:"/programs/speech-therapy"
    },
    {
      number: "04.",
      title: "Applied Behavior Analysis (ABA)",
      description:
        "A well-maintained evidence-based approach that helps children develop positive behaviour, social skills, and learning routines through meaningful reinforcement.",
      image: "care-4.jpg",
      bg: "#E0FFE6",
      link:"/programs/applied-behavior-analysis"
    },
  ];
  return (
    <section className="program-section w-full ">
      <div className="container-fixed">
        {/* Heading */}
        <div className="max-w-[1000px]" data-aos="fade-up">
          <div className=""  >
            <Heading data={data} />
          </div>
        </div>

        <p className="block lg:hidden body-t font-archivo mt-3 leading-[100%] body-t-color mb-10">
         Ready to spark your child's imagination and unlock a world of discovery? At Little champs, we offer enriching programs designed to ignite their curiosity and foster growth at every stage. Register through our secure online portal to embark on this exciting adventure with us.
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
            className="hidden lg:block rounded-lg transition-all duration-500"
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
          <div>
            <p className="body-t font-archivo mt-3 leading-[100%] body-t-color hidden lg:block ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              accumsan eros non fringilla faucibus. Sed scelerisque ultrices
              dui, vitae bibendum lorem bibendum ac. Duis eu nisi non orci
              fermentum commodo.
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

export default ProgramsSection;
