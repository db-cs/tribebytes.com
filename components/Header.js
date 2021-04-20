import Image from "next/image";
import Nav from "./Nav";

const Header = () => {
  return (
    <nav className="px-20 py-1 mx-auto bg-fixed bg-white place-content-center">
      <div className="flex justify-between m-8 mx-auto sm:items-center ">
        <div href="/">
          <Image src="/LogoFlat.svg" alt="TribeBytes" height="50" width="300" />
          <a
            href={
              "/FGHJUYTGHJKIUYTGHJUYTGHJUYTFGHJUIYTREDFGHJKOIU7Y65REDFGHJI87654EWSDFGHJKIOI876TRESXCVBNJKIUYTREDSXCVBNJKIUYTRESXCVBNJKIUYTREDSXCVBNMKIUYTREDSXCVBNMKIUYTREDSXCVBNMJKUYTRESXZCVBNMJKUYTREDXC"
            }
            className="opacity-0"
          >
            .
          </a>
        </div>

        <Nav />
      </div>
    </nav>
  );
};

export default Header;
