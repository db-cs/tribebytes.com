import { useRouter } from "next/router";

const ActiveLink = ({ children, href }) => {
  const router = useRouter();
  const className =
    router.pathname === href
      ? "underline cursor-pointer transition duration-300 ease-in transform active:underline hover:scale-110 inline-flex items-center px-4 py-2 border border-black rounded-md text-sm font-medium text-black bg-transparent hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 hover:underline hover:bold"
      : "no-underline cursor-pointer transition duration-300 ease-in transform active:underline hover:scale-110 inline-flex items-center px-4 py-2 border border-black rounded-md text-sm font-medium text-black bg-transparent hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 hover:underline";

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default ActiveLink;
