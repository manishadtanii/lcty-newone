import React from "react";
import Number from "../../components/Number";
import JourneyCard from "../../components/JourneyCard";

const steps = [
  {
    year: "2019",
    title: "Lorem",
    italic: "dolor sit",
    bold: "adipiscing",
    text: "Starting providing services to clients in the community setting",
    image: "journey-1.jpg",
  },
  {
    year: "2020",
    title: "Lorem",
    italic: "dolor sit",
    bold: "adipiscing",
    text: "Open Boca Raton office",
    image: "journey-2.jpg",
  },
  {
    year: "2021",
    title: "Lorem",
    italic: "dolor sit",
    bold: "adipiscing",
    text: "Open west palm office",
    image: "journey-3.jpg",
  },
  {
    year: "2022",
    title: "Lorem",
    italic: "dolor sit",
    bold: "adipiscing",
    text: "Open Delray office",
    image: "journey-3.jpg",
  },
  {
    year: "2023",
    title: "Lorem",
    italic: "dolor sit",
    bold: "adipiscing",
    text: "Open Coral Springs office",
    image: "journey-3.jpg",
  },
  {
    year: "2023",
    title: "Lorem",
    italic: "dolor sit",
    bold: "adipiscing",
    text: "Integrated ABA into our program",
    image: "journey-3.jpg",
  },
  {
    year: "2024",
    title: "Lorem",
    italic: "dolor sit",
    bold: "adipiscing",
    text: "Integrated Music IM and Yoga therapy",
    image: "journey-3.jpg",
  },
];

export default function OurJourney() {
  return (
    <section className="py-16 ">
      {/* Title */}
      <h2
        className="h1 secondary-text-1 leading-none text-center mb-16"
        data-aos="fade-up"
      >
        <span className="font-calvino">Our </span>
        <span className="font-calvino-italic">journey</span>
      </h2>

      {/* Journey Cards Container*/}
      <div className="journey-container relative overflow-hidden md:px-12 mb-10 md:mb-0">
        <div className="container-xxl m-auto pt-0">
          <div className="number mb-3 md:mb-0" data-aos="fade-up"  >
            <Number number="1" />
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-between md:items-center md:gap-5">
            <div className="md:w-[40%]" data-aos="fade-right">
              <JourneyCard data={steps[0]} />
            </div>
            <div className="journey-img md:w-[40%]">
              <img src="journey-1.jpg" alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      {/* Journey Cards Container*/}
      <div className="journey-container relative overflow-hidden md:px-12 mb-10 md:mb-0">
        <div className="container-xxl m-auto pt-0">
          <div className="number mb-3 md:mb-0" data-aos="fade-up" data-aos-delay="100"> 
            <Number number="2" />
          </div>
          <div className="flex flex-col md:flex-row justify-between md:items-center md:gap-5">
            <div className="journey-img md:w-[40%]">
              <img src="journey-2.jpg" alt="" className="w-full" />
            </div>
            <div className="md:w-[40%]" data-aos="fade-left">
              <JourneyCard data={steps[1]} />
            </div>
          </div>
        </div>
      </div>
      {/* Journey Cards Container*/}
      <div className="journey-container relative overflow-hidden md:px-12 mb-10 md:mb-0">
        <div className="container-xxl m-auto pt-0">
          <div className="number mb-3 md:mb-0" data-aos="fade-up" data-aos-delay="200"> 
            <Number number="3" />
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-between md:items-center md:gap-5">
            <div className="md:w-[40%]" data-aos="fade-right">
              <JourneyCard data={steps[2]} />
            </div>
            <div className="journey-img md:w-[40%]">
              <img src="journey-3.jpg" alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      {/* Journey Cards Container*/}
      <div className="journey-container relative overflow-hidden md:px-12 mb-10 md:mb-0">
        <div className="container-xxl m-auto pt-0">
          <div className="number mb-3 md:mb-0" data-aos="fade-up" data-aos-delay="300"> 
            <Number number="4" />
          </div>
          <div className="flex flex-col md:flex-row justify-between md:items-center md:gap-5">
            <div className="journey-img md:w-[40%]">
              <img src="journey-2.jpg" alt="" className="w-full" />
            </div>
            <div className="md:w-[40%]" data-aos="fade-left">
              <JourneyCard data={steps[3]} />
            </div>
          </div>
        </div>
      </div>
      {/* Journey Cards Container*/}
      <div className="journey-container relative overflow-hidden md:px-12 mb-10 md:mb-0">
        <div className="container-xxl m-auto pt-0">
          <div className="number mb-3 md:mb-0" data-aos="fade-up" data-aos-delay="400"> 
            <Number number="5" />
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-between md:items-center md:gap-5">
            <div className="md:w-[40%]" data-aos="fade-right">
              <JourneyCard data={steps[4]} />
            </div>
            <div className="journey-img md:w-[40%]">
              <img src="journey-3.jpg" alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      {/* Journey Cards Container*/}
      <div className="journey-container relative overflow-hidden md:px-12 mb-10 md:mb-0">
        <div className="container-xxl m-auto pt-0">
          <div className="number mb-3 md:mb-0" data-aos="fade-up" data-aos-delay="500"> 
            <Number number="6" />
          </div>
          <div className="flex flex-col md:flex-row justify-between md:items-center md:gap-5">
            <div className="journey-img md:w-[40%]">
              <img src="journey-2.jpg" alt="" className="w-full" />
            </div>
            <div className="md:w-[40%]" data-aos="fade-left">
              <JourneyCard data={steps[5]} />
            </div>
          </div>
        </div>
      </div>
      {/* Journey Cards Container*/}
      <div className="journey-container relative overflow-hidden md:px-12 mb-10 md:mb-0">
        <div className="container-xxl m-auto pt-0">
          <div className="number mb-3 md:mb-0" data-aos="fade-up" data-aos-delay="600">  
            <Number number="7" />
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-between md:items-center md:gap-5">
            <div className="md:w-[40%]" data-aos="fade-right">
              <JourneyCard data={steps[6]} />
            </div>
            <div className="journey-img img-last md:w-[40%]">
              <img src="journey-3.jpg" alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
 
    </section>
  );
}
