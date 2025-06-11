import React from "react";
import ButtomPrimary from "./ButtonPrimary";
import HeroSlider from "./HeroSlider";


function Hero({ data }) {
  const { title, paragraphs, btn, slides, textAlign, spacing } = data;

  return  <section className="hero w-full" >
      {/* Hero Section */}
      <div className="container-xxl">
        <div className={`${spacing} m-auto flex flex-col   ${textAlign}`} >
          {/* {console.log(title)} */}
          <h1 className={`h1 secondary-text-1  ${textAlign}`} data-aos="fade-up">
            {title.map((part, i) => (
              <span key={i} className={part.class}>
                {" "}
                {part.text}{" "}
              </span>
            ))}
          </h1>
          {paragraphs && paragraphs.map((p, i) => (
            <div key={i} className={`max-w-[1100px] font-archivo body-t m-auto mb-16 mt-14 body-t-color  ${textAlign} ${p.class} `} data-aos="fade-up" data-aos-delay="200">
              <p>{p.text}</p>
            </div>
          ))}
          {btn &&
          <div className="" data-aos="fade-up" data-aos-delay="300">
            <ButtomPrimary text={btn.text} link={btn.link} />
          </div>
          }
          {/* If slides are provided, render the HeroSlider */}
        </div>
      </div>
     <div data-aos="fade-up" data-aos-delay="400">
       {slides && <HeroSlider slides={slides} />}
     </div>
    </section>;
}

export default Hero;
