import Head from "next/head";

export default function Home() {
  return (
    // <body background="https://i.pinimg.com/originals/4a/aa/a3/4aaaa35e178c1cc7c300c53556077d63.jpg">

    <body class="bg-gradient-to-r from-red-800 via-gray-800 to-black">
      <title>TribeBytes</title>
      <header class="bg-white place-content-center max-w-6xl px-20 mx-auto py-1 mt-12 bg-fixed">
        <div class="flex sm:items-center m-8 mx-auto justify-between ">
          <div
            class="justify-center"
            data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'
          >
            <h2
              href="home"
              class="text-2xl font-bold text-gray-900 sm:text-3xl appearance transform opacity-100"
            >
              TribeBytes
            </h2>
          </div>
          <nav class="mt-5 lg:mt-0 lg:ml-4 ">
            <div class="flex ">
              <span class="hidden sm:block ">
                <button
                  href="#"
                  type="button"
                  class="transition duration-300 ease-in transform hover:scale-110 inline-flex items-center px-4 py-2 border border-black rounded-md shadow-lg text-sm font-medium text-black bg-transparent hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800"
                >
                  Home
                </button>
              </span>

              <span class="hidden sm:block ml-3">
                <button
                  href="#"
                  type="button"
                  class="transition duration-300 ease-in transform hover:scale-110 inline-flex items-center px-4 py-2 border border-black rounded-md shadow-lg text-sm font-medium text-black bg-transparent hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800"
                >
                  About
                </button>
              </span>

              <span class="sm:ml-3">
                <button
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
      <div class="bg-red-900 place-content-center max-w-6xl px-20 mx-auto h-screen">
        <h1 class="text-center pt-10 text-6xl text-white">
          Welcome to TribeBytes!
        </h1>
        <div class="flex">
          <p class="text-left pt-10 text-white">
            I'm so excited to be joining Dobyns-Bennett this year, and I have
            really enjoyed getting to know the students this first week. Moving
            into the new Science and Technology building as been very exciting,
            and it is a fantastic environment to work and learn in. I really
            look forward to learning with the students this semester and getting
            to know them better. Please reach out if you have any questions or
            ideas:{" "}
            <a
              class="text-blue-500 underline hover:text-blue-600"
              href="mailto:dbailey@k12k.com"
            >
              dbailey@k12k.com
            </a>
            .
          </p>
        </div>
        {/* ----------------------------------------------------------------------------------------------------------------------- */}
      </div>
    </body>
  );
}
