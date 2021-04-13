import Image from "next/image";
import Nav from "./Nav";

const Header = () => {
  return (
    <nav className="px-20 py-1 mx-auto bg-fixed bg-white place-content-center">
      <div className="flex justify-between m-8 mx-auto sm:items-center ">
        <a href="/">
          <Image src="/LogoFlat.svg" height="50" width="300" />
        </a>
        <Nav />
      </div>
    </nav>
  );
};

export default Header;
