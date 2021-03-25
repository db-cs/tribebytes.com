import { useState, useEffect } from "react";
import HeroNav from "./HeroNav";

const Hero = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(1);

  //   useEffect(() => {
  //     setInterval(() => {
  //       // Deal with what happens when we reach the end of the slides
  //       setActiveSlide(activeSlide + 1);
  //     }, 1000);
  //   }, [activeSlide]);

  const handleChangeSlide = (slideId) => {
    // TODO Validate that slide with ID exisits then
    setActiveSlide(slideId);
  };

  return (
    <div className="">
      {slides.map((slide) => (
        <div
          key={slide.id}
          className={`w-full h-80 bg-cover py-20 ${
            slide.id != activeSlide && "hidden"
          }`}
          style={{ backgroundImage: `url(${slide.url})` }}
        >
          <p class="justify-start text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl md:text-xl">
            {slide.description}
          </p>
        </div>
      ))}
      <HeroNav
        slides={slides}
        activeSlide={activeSlide}
        handleChangeSlide={handleChangeSlide}
      />
    </div>
  );
};

export default Hero;
