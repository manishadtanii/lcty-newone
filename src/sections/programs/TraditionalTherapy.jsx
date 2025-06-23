import React from "react";
import { Link } from "react-router-dom";
import Heading from "../../components/Heading";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
function TraditionalTherapy() {
  const data = {
    title: [
      { text: "Traditional", class: "font-calvino" },
      { text: "therapy", class: "font-calvino-italic" },
    ],
    textAlign: "text-center",
    fontSize: "h1",
  };

  const testimonials = [
    {
      image: "testmonial-1.png",
      alt: "presentation",
      title: [
        { text: "Music   ", class: "font-calvino" },
        { text: " Therapy", class: "font-calvino-italic" },
      ],
      text: "Music therapy, through the dynamic interplay of movement, captivating melodies and inherent rhythm, serves as a powerful medium for fostering emotional expression, enhancing communication abilities and nurturing meaningful social interaction. It provides a unique and engaging environment where individuals can explore and connect with their inner world and with others in a supportive and pleasurable manner.",
      button: {
        text: "Take me to the program",
        iconClass: "fal fa-arrow-right",
        link: "/programs/music-therapy",
      },
    },
    {
      image: "testmonial-2.png",
      alt: "presentation",
      title: [
        { text: "Yoga  ", class: "font-calvino" },
        { text: " Therapy", class: "font-calvino-italic" },
      ],
      text: "Yoga therapy offers a holistic approach to child development by thoughtfully integrating gentle, deliberate movements with mindful breathing techniques. This unique combination empowers children to cultivate balance, enhance their concentration skills and foster a deeper understanding of their own bodies, all within a fun and engaging framework. Through imaginative poses and playful activities, yoga therapy makes the journey of self-discovery an enjoyable experience for young learners.",
      button: {
        text: "Take me to the program",
        iconClass: "fal fa-arrow-right",
        link: "/programs/yoga-therapy",
      },
    },
    {
      image: "testmonial-3.png",
      alt: "presentation",
      title: [
        { text: "Interactive  ", class: "font-calvino" },
        { text: " Metronome", class: "font-calvino-italic" },
      ],
      text: "This innovative brain-targeted software utilizes engaging, rhythm-based exercises to significantly enhance crucial cognitive functions including timing, attention and coordination. By participating in these interactive activities, users can experience notable improvements in their ability to concentrate and effectively plan their motor movements.",
      button: {
        text: "Take me to the program",
        iconClass: "fal fa-arrow-right",
        link: "/programs/interactive-metronome",
      },
    },
    {
      image: "testmonial-3.png",
      alt: "presentation",
      title: [
        { text: "Tutoring  ", class: "font-calvino" },
        // { text: " Therapy", class: "font-calvino-italic" },
      ],
      text: "Our tutoring services offer personalized learning assistance meticulously tailored to your child's unique learning style. This individualized approach fosters a supportive environment where students can confidently reinforce and achieve mastery of critical academic skills at a pace that suits their individual needs. We believe in nurturing not only academic success but also a strong sense of self-efficacy in our students.",
      button: {
        text: "Take me to the program",
        iconClass: "fal fa-arrow-right",
        link: "/programs/tutoring",
      },
    },
  ];
  return (
    <div className="traditional-therapy">
      <div className="container-fixed">
        <div className="max-w-7xl m-auto text-center secondary-text-1 ">
          <Heading data={data} />
          <p>
            Rooted deep in proven methods and principles of our traditional
            services offered by our trusted and reliable foundation. We try to
            blend and give a personal touch to our professional services to
            provide dependable solutions built on experience and a commitment to
            enduring quality
          </p>
        </div>

        <div className="testimonial-container max-w-7xl m-auto mt-10 ">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-item rounded-3xl p-6 md:p-10 mb-10 sticky top-10`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                className="w-[150px] m-auto mb-14"
              />
              <div className="testimonial-text text-center mt-5">
                <h2 className="h2 text-center text-white max-w-4xl m-auto">
                  {testimonial.title.map((text, i) => (
                    <span key={i} className={text.class}>
                      {" "}
                      {text.text}{" "}
                    </span>
                  ))}
                </h2>
                <p className="text-white mt-4 body-t mb-10">{testimonial.text}</p>
                <Link to={testimonial.button.link}>
                  <button className="body-t font-calvino-italic text-white mt-5">
                    <i className={testimonial.button.iconClass}></i>{" "}
                    {testimonial.button.text}
                  </button>
                </Link>
              </div>
            </div>
          ))}
          {/* <div className="testimonial-item bg-[url('/testimonial-bg.png')]">
                <img src="testmonial-1.png" alt="presentation" className="w-full" />
                <div className="testimonial-text">
                <h3>Testimonial 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className="testimonial-item">
                <img src="testmonial-1.png" alt="building" className="w-full" />
                <div className="testimonial-text">
                <h3>Testimonial 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className="testimonial-item">
                <img src="testmonial-1.png" alt="meditation" className="w-full" />
                <div className="testimonial-text">
                <h3>Testimonial 3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default TraditionalTherapy;
