import ActiveLink from "./activeLink";

const navList = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  // { url: "/more", title: "More" },
  { url: "/graduates", title: "Graduates" },
  { url: "/classes", title: "Classes" },
];

const NavButton = ({ link }) => (
  <div className="cursor-pointer transition duration-300 ease-in transform active:underline hover:scale-110 inline-flex items-center px-4 m-1 py-2 border border-black rounded-md text-sm font-medium text-black bg-transparent hover:bg-red-800 focus:outline focus:ring-4 focus:ring-offset-2 focus:ring-red-800 hover:underline">
    <li>
      <ActiveLink href={link.url}>{link.title}</ActiveLink>
    </li>
  </div>
);

/**
 * Site wide navgation component for the header
 **/
const Nav = () => {
  return (
    <nav>
      <ul className="flex self-center select-none justify-self-end">
        {navList.map((link) => (
          <NavButton key={link.url} link={link} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
