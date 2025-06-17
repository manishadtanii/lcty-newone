import React from "react";
import Card from "../../components/Card";
import Hero from "../../components/Hero";
import ButtonPrimary from "../../components/ButtonPrimary";

function SuccessStories() {
  const story = [
    {
      id: 1,
      title: "Story 1",
      link: "/story-1",
      image: "Story-1.png",
      bgColor: "primary-bg-2",
      btnBg: "secondary-bg-1",
      btnText: "text-white",
    },
    {
      id: 2,
      title: "Story 2",
      link: "/story-2",
      image: "Story-2.png",
      bgColor: "primary-bg-2",
      btnBg: "secondary-bg-1",
      btnText: "text-white",
    },
    {
      id: 3,
      title: "Story 3",
      link: "/story-3",
      image: "Story-3.png",
      bgColor: "primary-bg-2",
      btnBg: "secondary-bg-1",
      btnText: "text-white",
    },
  ];
  const data = {
    title: [
      { text: "Success ", class: "font-calvino" },
      { text: "Stories", class: "font-calvino-italic" },
    ],
    paragraphs: [
      {
        text: "Every child's journey is unique, and we're so lucky to be a part of it. These inspiring success stories come from real families who've seen amazing transformations. Imagine brighter smiles, stronger skills and a new sense of confidence – all thanks to Little Champs Therapy & Yoga. We truly hope they uplift and encourage you as much as they do us!",
        class: "text-center",
      },
    ],

    textAlign: "text-center",
    spacing: "p-4",
  };
  return (
    <section className="success-stories">
      <div className="container-fixed">
        <Hero data={data} />
        <div className="relative flex justify-center mt-5 md:mt-10">
          <div className="absolute top-[-100%] left-0 w-full text-center" data-aos="fade-up" data-aos-delay="100">
            <ButtonPrimary link="/register" text="Explore More" className="" />
          </div>
        </div>
        <div className="story-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20 lg:mt-0 sm:gap-5 lg:gap-20  md:pb-[100px]">
          <div data-aos="fade-right" data-aos-delay="300">
            <Card data={story[0]} />
          </div>
          <div className="relative sm:translate-y-[70%]">
            <Card data={story[1]} />
          </div>
          <div data-aos="fade-left" data-aos-delay="400">
            <Card data={story[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;
