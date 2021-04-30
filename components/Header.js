import Image from "next/image";
import Nav from "./Nav";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="dark:bg-black">
        <div className="flex max-w-6xl justify-between m-8 mx-auto sm:items-center ">
          <Link href="/">
            <a className="cursor-pointer">
              <Image
                src="/LogoFlat.svg"
                alt="TribeBytes"
                height="50"
                width="300"
              />
            </a>
          </Link>

          <Nav />
        </div>
      </header>
    </>
  );
};

export default Header;
