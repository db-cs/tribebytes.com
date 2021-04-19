import ActiveLink from "./activeLink";

const navList = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/more", title: "More" },
  { url: "/graduates", title: "Graduates" },
  { url: "/classes", title: "Classses" },
];

const NavButton = ({ link }) => (
  <li className="p-1">
    <ActiveLink href={link.url}>{link.title}</ActiveLink>
  </li>
);

/**
 * Site wide navgation component for the header
 **/
const Nav = () => {
  return (
    <ul className="flex self-center select-none justify-self-end">
      {navList.map((link) => (
        <NavButton key={link.url} link={link} />
      ))}
    </ul>
  );
};

export default Nav;
