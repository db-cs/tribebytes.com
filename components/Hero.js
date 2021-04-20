import { useState, useEffect } from "react";
import HeroNav from "./HeroNav";
import Link from "next/link";

const Hero = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  // useEffect(() => {
  //   setInterval(() => {
  //     // Deal with what happens when we reach the end of the slides
  //     setActiveSlide(activeSlide + 1);
  //   }, 1000);
  // }, [activeSlide]);

  const handleChangeSlide = (slideId) => {
    // TODO Validate that slide with ID exisits then
    setActiveSlide(slideId);
  };

  return (
    <div className="">
      {slides.map((slide) => (
        <div
          key={slide.id}
          alt="Hero Img"
          className={`w-full bg-cover bg-center flex items-end ${
            slide.id != activeSlide && "hidden"
          }`}
          style={{ backgroundImage: `url(${slide.url})` }}
        >
          <article className="w-full pt-20 pb-5 pl-20 text-white bg-gradient-to-r from-red-900 via-transparent to-red-900">
            <p className="text-4xl font-bold uppercase">{slide.title}</p>
            <hr className="w-1/4 ml-3  mb-8 border-2 border-red-700" />
            <p className="sm:mt-5 sm:text-xl sm:max-w-xl md:text-xl">
              {slide.description}
            </p>

            <Link href={`${slide.link}`}>
              <p className="transition bg-opacity-75 bg-blend-difference duration-300 font-bold  sm:text-xl ease-in transform hover:bg-transparent hover:border-red-700 w-40 p-2 mt-5 flex-shrink  bg-red-700 border-transparent border-2 rounded-md">
                Learn More...
              </p>
            </Link>
            <div className="mx-auto mt-5">
              <HeroNav
                slides={slides}
                activeSlide={activeSlide}
                handleChangeSlide={handleChangeSlide}
              />
            </div>
            <hr className="w-1/6 mb-5 mx-auto border-2 border-red-700" />
          </article>
        </div>
      ))}
    </div>
  );
};

export default Hero;
