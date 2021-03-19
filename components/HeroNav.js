const HeroNav = ({ slides, activeSlide, handleChangeSlide }) => (
  <div class="hidden sm:flex-1 sm:flex sm:items-center absolute">
    <div>
      <nav
        class="relative z-0 inline-flex rounded-fullshadow-sm -space-x-px"
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
          class="relative inline-flex m-1 items-center px-2 py-2 border rounded-full border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <span class="sr-only">Previous</span>
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            ariaHidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>

        {slides.map((slide, index) => {
          return (
            <a
              onClick={() => handleChangeSlide(index)}
              class="relative m-1 inline-flex items-center px-4 py-2 border rounded-full border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              {slide.id + 1}
            </a>
          );
        })}

        <a
          // onClick={() => handleChangeSlide(activeSlide + 1)}
          // class="relative inline-flex m-1 items-center px-2 py-2 border rounded-full border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          onClick={() => {
            activeSlide == slides.length - 1
              ? handleChangeSlide(0)
              : handleChangeSlide(activeSlide + 1);
            console.log(activeSlide);
          }}
          class="relative inline-flex m-1 items-center px-2 py-2 border rounded-full border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <span class="sr-only">Next</span>
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </nav>
    </div>
  </div>
);
export default HeroNav;
