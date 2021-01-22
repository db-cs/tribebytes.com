import Link from "next/link";
import ActiveLink from "./activeLink";
const Header = () => {
  // <body background="https://i.pinimg.com/originals/4a/aa/a3/4aaaa35e178c1cc7c300c53556077d63.jpg">
  return (
    <>
      <title>TribeBytes</title>
      <header class="bg-white place-content-center max-w-6xl px-20 mx-auto py-1 mt-12 bg-fixed">
        <div class="flex sm:items-center m-8 mx-auto justify-between ">
          <div
            class="justify-center"
            data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'
          >
            <img src="/Logo.png" height="150" width="150"></img>
          </div>
          <nav class="mt-5 lg:mt-0 lg:ml-4 ">
            <div class="flex ">
              <span class="hidden sm:block ">
                <Link href="/">
                  <button
                    onPress={handleClick}
                    href="#"
                    type="button"
                    className={
                      router.pathname === href
                        ? "underline transition duration-300 ease-in customPlugin transform active:underline hover:scale-110 inline-flex items-center px-4 py-2 border border-black rounded-md shadow-lg text-sm font-medium text-black bg-transparent hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 hover:underline"
                        : "no-underline transition duration-300 ease-in customPlugin transform active:underline hover:scale-110 inline-flex items-center px-4 py-2 border border-black rounded-md shadow-lg text-sm font-medium text-black bg-transparent hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 hover:underline"
                    }
                    // class="transition duration-300 ease-in customPlugin transform active:underline hover:scale-110 inline-flex items-center px-4 py-2 border border-black rounded-md shadow-lg text-sm font-medium text-black bg-transparent hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 hover:underline"
                  >
                    Home
                  </button>
                </Link>
              </span>

              <span class="hidden sm:block ml-3">
                <Link href="/about">
                  <button
                    onPress={handleClick}
                    type="button"
                    class="transition duration-300 ease-in transform active:underline hover:scale-110 inline-flex items-center px-4 py-2 border border-black rounded-md shadow-lg text-sm font-medium text-black bg-transparent hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 hover:underline"
                  >
                    About
                  </button>
                </Link>
              </span>

              <span class="sm:ml-3">
                <button
                  onPress={handleClick}
                  type="button"
                  class="transition duration-300 ease-in transform hover:scale-110 inline-flex items-center px-4 py-2 border border-black rounded-md shadow-lg text-sm font-medium text-black bg-transparent hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800"
                >
                  More
                </button>
              </span>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
export default { Header, ActiveLink };
