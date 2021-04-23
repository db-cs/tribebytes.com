const HeroNav = ({ slides, activeSlide, handleChangeSlide }) => (
  <div className="justify-center hidden min-w-full py-4 sm:flex-1 sm:flex sm:items-center">
    <div>
      <nav
        className="relative z-0 inline-flex  rounded-fullshadow-sm"
        aria-label="Pagination"
      >
        <a
          // href="#"
          onClick={() => {
            activeSlide == "0"
              ? handleChangeSlide(slides.length - 1)
              : handleChangeSlide(activeSlide - 1);
          }}
          className="bg-opacity-75 cursor-pointer relative inline-flex items-center px-2 py-1 mx-1 font-bold text-sm font-medium text-black bg-white rounded-full hover:text-white hover:bg-opacity-25 transition ease-in duration-300"
        >
          <span className="sr-only">Previous</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>

        {slides.map((slide, index) => {
          return (
            <a
              key={slide.id}
              onClick={() => handleChangeSlide(index)}
              className="bg-opacity-75 cursor-pointer relative inline-flex items-center px-4 py-2 font-bold text-sm font-medium text-black bg-white  rounded-full hover:text-white hover:bg-opacity-25 transition ease-in duration-300"
            >
              {slide.id + 1}
            </a>
          );
        })}

        <a
          onClick={() => {
            activeSlide == slides.length - 1
              ? handleChangeSlide(0)
              : handleChangeSlide(activeSlide + 1);
          }}
          className="bg-opacity-75 relative cursor-pointer inline-flex items-center px-2 py-1 mx-1 font-bold text-sm font-medium text-black bg-white rounded-full hover:bg-opacity-25 hover:text-white transition ease-in duration-300"
        >
          <span className="sr-only">Next</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </nav>
    </div>
  </div>
);
export default HeroNav;
