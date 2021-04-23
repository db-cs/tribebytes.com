import Image from "next/image";
import Nav from "./Nav";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <a
        href={
          "/FGHJUYTGHJKIUYTGHJUYTGHJUYTFGHJUIYTREDFGHJKOIU7Y65REDFGHJI87654EWSDFGHJKIOI876TRESXCVBNJKIUYTREDSXCVBNJKIUYTRESXCVBNJKIUYTREDSXCVBNMKIUYTREDSXCVBNMKIUYTREDSXCVBNMJKUYTRESXZCVBNMJKUYTREDXC"
        }
        className="opacity-0 absolute cursor-default"
      >
        .
      </a>
      <nav className="px-20 py-1 mx-auto bg-fixed bg-white place-content-center">
        <div className="flex justify-between m-8 mx-auto sm:items-center ">
          <Link href="/">
            <Image
              className="cursor-pointer"
              src="/LogoFlat.svg"
              alt="TribeBytes"
              height="50"
              width="300"
            />
          </Link>

          <Nav />
        </div>
      </nav>
    </>
  );
};

export default Header;
