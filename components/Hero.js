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
            <hr className="w-1/4 mb-8 ml-3 border-2 border-red-700" />
            <p className="p-5 bg-black bg-opacity-50 sm:mt-5 rounded-2xl sm:text-xl sm:max-w-xl md:text-xl">
              {slide.description}
            </p>

            <Link href={`${slide.link}`}>
              <p className="flex-shrink w-40 p-2 mt-5 font-bold transition duration-300 ease-in transform bg-red-700 bg-opacity-75 border-2 border-transparent rounded-md select-none bg-blend-difference sm:text-xl hover:bg-transparent hover:border-red-700">
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
            <hr className="w-1/6 mx-auto mb-5 border-2 border-red-700" />
          </article>
        </div>
      ))}
    </div>
  );
};

export default Hero;
