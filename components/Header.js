import Nav from "./Nav";

const Header = () => {
  return (
    <header className="px-10 ">
      <title>TribeBytes</title>
      <nav className="px-10 py-1 mx-auto bg-fixed bg-white place-content-center">
        <div className="flex justify-between m-8 mx-auto sm:items-center ">
          <div
            className="justify-center"
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
