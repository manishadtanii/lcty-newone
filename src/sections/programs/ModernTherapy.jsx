import React from "react";
import ModernTherapySlider from "./old/ModernTherapySlider";
import Hero from "../../components/Hero";
import TestimonialsSliderNew from "./TestimonialsSliderNew";

function ModernTherapy() {
  const heading = {
    title: [
      { text: "Modern", class: "font-calvino" },
      { text: "therapy", class: "font-calvino-italic" },
    ],
    paragraphs: [
      {
        text: "Experience seamless solutions designed for today's dynamic world. Our modern services leverage cutting-edge technology and innovative approaches to deliver efficiency, convenience, and impactful results",
        class: "text-center",
      },
    ],
    textAlign:"text-center",
  };
  return (
    <div className="modern-therapy">
      <div className="container-fixed">
        <div className="max-w-7xl m-auto text-center secondary-text-1">
          <Hero data={heading} />
        </div>
      </div>
      <div className=" w-full overflow-hidden">
          <TestimonialsSliderNew />
          {/* <ModernTherapySlider /> */}
        </div>
    </div>
  );
}

export default ModernTherapy;
