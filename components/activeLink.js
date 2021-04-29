import { useRouter } from "next/router";

const ActiveLink = ({ children, href }) => {
  const router = useRouter();
  const className = router.pathname === href ? "underline" : "no-underline";

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a tabIndex={0} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default ActiveLink;
