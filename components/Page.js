import Link from "next/link";
import Router from "next/router";
import handleClick from "./activeLink";
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
        </div>
      </header>
    </>
  );
};
export default Header;
