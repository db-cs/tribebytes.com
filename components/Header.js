import Nav from "./Nav";

const Header = () => {
  return (
    <header class="">
      <title>TribeBytes</title>
      <nav class="bg-white place-content-center px-10  mx-auto py-1 bg-fixed">
        <div class="flex sm:items-center m-8 mx-auto justify-between ">
          <div
            class="justify-center"
            data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'
          >
            <img src="/Logo.png" height="150" width="150"></img>
          </div>
          <Nav />
        </div>
      </nav>
    </header>
  );
};
export default Header;
