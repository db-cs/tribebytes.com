import { useRouter } from "next/router";

function ActiveLink({ children, href }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
    return ()
    //take button & link component from page and apply in here
  };
}
export default ActiveLink;
