import ButtonPrimary from "../../components/ButtonPrimary";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

// const imageUrl = "Yoga3.png";

const CultureProgram = ({ data }) => {
  const { description, image = [], link } = data;
  const containerRef = useRef();
  const contentRef = useRef();

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: contentRef.current,
    });
  });
  const settings = {
    // centerMode: true,
    // centerPadding: "60px", // optional: adjust padding around centered slide
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // default (large screen)
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    // dots: true,
    responsive: [
      {
        breakpoint: 1280, // < 1280px
        settings: {
          slidesToShow: 3,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 1024, // < 1024px
        settings: {
          slidesToShow: 2,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 640, // < 640px (mobile)
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };
  return (
    <section className="bg-white" ref={containerRef}>
      <div className="container-fixed">
        <h2 className="h1 mb-4 secondary-text-1 px-5 text-center block lg:hidden">
        <span className="font-calvino">Love, </span>
        <span className="font-calvino-italic"> Strength </span>
        <span className="font-calvino"> & Warmth</span>
      </h2>
      <div className="block lg:hidden mb-5 w-full overflow-x-hidden">
        <Slider {...settings}>
          {image.map((img, index) => (
            <div className="px-1">
              <img
                src={`/${img.src}`}
                alt="Kids Yoga"
                key={index}
                className=" w-full mb-5"
              />
            </div>
          ))}
          <div className="px-1">
            {/* <img src={imageUrl} alt="Kids Yoga" className=" w-full mb-5" /> */}
          </div>
          <div className="px-1">
            {/* <img src={imageUrl} alt="Kids Yoga" className=" w-full mb-5" /> */}
          </div>
          <div className="px-1">
            {/* <img src={imageUrl} alt="Kids Yoga" className=" w-full mb-5" /> */}
          </div>
        </Slider>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Text Content */}
          <div className="" ref={contentRef}>
            <h2 className="h1 mb-4 secondary-text-1 hidden lg:block">
              <span className="font-calvino">Our Culture: </span>
              <span className="font-calvino-italic"> Yours is Ours </span>
            </h2>

            <p className="body-t mb-6 body-t-color lg:mt-10 md:mt-0">
              Our dedicated approach focuses on helping your child develop and
              refine their strength and coordination enabling them to
              confidently and effortlessly participate in their daily routines
              and activities. We understand the importance of physical
              capabilities in a child's overall well-being and our programs are
              designed to foster significant improvements in these key areas.
            </p>
            <p className="body-t mb-6 body-t-color lg:mt-10 md:mt-0">
              During assessments, we observe various aspects of a child’s
              movements, such as pace and gait during early walking stages,
              balance and coordination skills, regaining range of motion after
              injuries or birth difficulties and pressure exertion during play.
              Our Physical Therapists are dedicated to helping children achieve
              their full developmental potential, improving their range of
              motion and enhancing overall quality of life.
            </p>

            {/* <ul className="space-y-3 mb-8">
              {[...Array(5)].map((_, i) => (
                <li
                  key={i}
                  className="flex items-start space-x-3 body-t body-t-color"
                >
                  <span className="mt-1 w-3 h-3 rounded-full bg-pink-400 inline-block"></span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </span>
                </li>
              ))}
            </ul> */}

            <ButtonPrimary link="discover" text="Register Now" />
          </div>
          {/* Image */}
          <div className="hidden lg:block">
            {image.map((img, index) => (
              <img
                src={`/${img.src}`}
                alt="Kids Yoga"
                key={index}
                className=" w-full mb-5"
              />
            ))}
            {/* <img src={imageUrl} alt="Kids Yoga" className=" w-full mb-5" /> */}
            {/* <img src={imageUrl} alt="Kids Yoga" className=" w-full mb-5" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureProgram;
