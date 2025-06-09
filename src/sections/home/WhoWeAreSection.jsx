import ButtonSecondary from "../../components/ButtonSecondary";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/all";

const backgroundImage = "who-we-are.jpg";
// Register plugins
gsap.registerPlugin(ScrollTrigger);
const WhoWeAreSection = () => {
  const containerRef = useRef();
  const headingRefWho = useRef();

  useGSAP(() => {
    const split = new SplitType(headingRefWho.current, {
      type: "chars, words",
    });

    gsap.from(split.words, {
      opacity: 0.2,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 50%",
        end: "top 10%",
        // scrub: true,
      },
    });

    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [containerRef.current, headingRefWho.current]);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat  flex items-center w-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      ref={containerRef}
    >
      <div className="container-fixed">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Content container */}
        <div className="relative z-10  grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 text-white">
          {/* Left side: Heading */}
          <div className="flex items-center justify-start  md:text-left">
            <h1 className="h1">
              <span className="font-calvino">Who</span>{" "}
              <span className="font-calvino-italic">we</span>{" "}
              <span className="font-calvino">are</span>
            </h1>
          </div>

          {/* Right side: Text + Button */}
          <div className="flex flex-col justify-center space-y-6 font-medium leading-tight">
            <div className="" ref={headingRefWho}>
              <p className="h2 text-white">
              At Little Champs Therapy & Yoga, we're a team of therapists specializing in speech, occupational, physical and yoga therapy. We create unique programs designed just for your child to help them develop skills, build confidence and find calm. Our approach is warm and family-friendly mixing our clinical expertise with fun, goal-oriented activities. Whether it's parent-child yoga or ideas for practicing at home, we're with you every step celebrating each achievement and making therapy a positive experience.
              </p>
            </div>
            <ButtonSecondary text="Discover" link="discover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
