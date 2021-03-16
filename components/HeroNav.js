const HeroNav = ({ slides, activeSlide, handleChangeSlide }) => (
  <div class="hidden sm:flex-1 sm:flex sm:items-center absolute">
    <div>
      <nav
        class="relative z-0 inline-flex rounded-fullshadow-sm -space-x-px"
        aria-label="Pagination"
      >
        <a
          // href="#"
          onClick={() => handleChangeSlide(activeSlide - 1)}
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
        <a
          // href={slides.url}
          onClick={() => handleChangeSlide(1)}
          class="relative m-1 inline-flex items-center px-4 py-2 border rounded-full border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          1
        </a>
        <a
          onClick={() => handleChangeSlide(2)}
          // href={slides.url}
          class="relative m-1 inline-flex items-center px-4 py-2 border rounded-full border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          2
        </a>
        <a
          onClick={() => handleChangeSlide(3)}
          // href={slides.url}
          class="hidden m-1 md:inline-flex relative items-center px-4 py-2 border rounded-full border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          3
        </a>
        <a
          onClick={() => handleChangeSlide(4)}
          class="relative m-1 inline-flex items-center px-4 py-2 border rounded-full border-gray-300 bg-white text-sm font-medium text-gray-700"
        >
          4
        </a>
        <a
          onClick={() => handleChangeSlide(5)}
          // href={slides.url}
          class="relative m-1 inline-flex items-center px-4 py-2 border rounded-full border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          5
        </a>
        <a
          onClick={() => handleChangeSlide(6)}
          // href={slides.url}
          class="relative m-1 inline-flex items-center px-4 py-2 border rounded-full border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          6
        </a>
        <a
          onClick={() => handleChangeSlide(7)}
          // href={slides.url}
          class="relative m-1 inline-flex items-center px-4 py-2 border rounded-full border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          7
        </a>
        <a
          onClick={() => handleChangeSlide(8)}
          // href={slides.url}
          class="hidden m-1 md:inline-flex relative items-center px-4 py-2 border rounded-full border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          8
        </a>
        <a
          onClick={() => handleChangeSlide(9)}
          // href={slides.url}
          class="relative m-1 inline-flex items-center px-4 py-2 border rounded-full border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          9
        </a>
        <a
          onClick={() => handleChangeSlide(10)}
          // href={slides.url}
          class="relative m-1 inline-flex items-center px-4 py-2 border rounded-full border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          10
        </a>
        <a
          onClick={() => handleChangeSlide(activeSlide + 1)}
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
