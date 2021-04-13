import ActiveLink from "./activeLink";
function Nav() {
  return (
    <ul class="flex self-center justify-self-end select-none">
      <li className="p-1">
        <ActiveLink href="/">
          <a>Home</a>
        </ActiveLink>
      </li>
      <li class="p-1">
        <ActiveLink href="/about">
          <a>About</a>
        </ActiveLink>
      </li>
      <li class="p-1">
        <ActiveLink href="/more">
          <a>More</a>
        </ActiveLink>
      </li>
      <li class="p-1">
        <ActiveLink href="/graduates">
          <a>Graduates</a>
        </ActiveLink>
      </li>
    </ul>
  );
}

export default Nav;
