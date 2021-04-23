const HeroNav = ({ slides, activeSlide, handleChangeSlide }) => (
  <div className="justify-center hidden min-w-full py-4 sm:flex-1 sm:flex sm:items-center">
    <div>
      <nav
        className="relative z-0 inline-flex -space-x-px rounded-fullshadow-sm"
        aria-label="Pagination"
      >
        <a
          // href="#"
          onClick={() => {
            activeSlide == "0"
              ? handleChangeSlide(slides.length - 1)
              : handleChangeSlide(activeSlide - 1);
            console.log(activeSlide);
          }}
          className="relative inline-flex items-center px-2 py-2 m-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full hover:bg-gray-50"
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
              className="relative inline-flex items-center px-4 py-2 m-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-50"
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
            console.log(activeSlide);
          }}
          className="relative inline-flex items-center px-2 py-2 m-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full hover:bg-gray-50"
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
