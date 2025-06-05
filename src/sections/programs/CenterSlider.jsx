import React from "react";
import ModernCard from "../../components/ModernCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function CenterSlider() {
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
  return (
    <div>
      <Slider />
    </div>
  );
}

export default CenterSlider;
