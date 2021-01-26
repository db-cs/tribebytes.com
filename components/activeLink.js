import { useRouter } from "next/router";

const ActiveLink = () => {
  const handleClick = (e) => {
    const router = useRouter();
    e.preventDefault();
    router.push(href);
  };
  return (
    <>
      <span>
        <Link href="/">
          <button
            onPress={handleClick}
            className={
              router.pathname === href
                ? "underline transition duration-300 ease-in customPlugin transform active:underline hover:scale-110 inline-flex items-center px-4 py-2 border border-black rounded-md shadow-lg text-sm font-medium text-black bg-transparent hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 hover:underline"
                : "no-underline transition duration-300 ease-in customPlugin transform active:underline hover:scale-110 inline-flex items-center px-4 py-2 border border-black rounded-md shadow-lg text-sm font-medium text-black bg-transparent hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 hover:underline"
            }
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
    </>
  );
};

export default ActiveLink;
