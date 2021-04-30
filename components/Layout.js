import { useTheme } from "next-themes";
import Head from "next/head";
import Header from "./Header";

/**
 * The Layout component is a wrapper that add the boilerplate components necessary for each page.
 *
 * @param {string} title - The title of the current page
 * @param {React.Children} children - Additional components that will be wrapped by Layout component
 *
 */
const Layout = ({ title, children }) => {
  const { theme, setTheme } = useTheme("light");

  const handleDarkToggle = () =>
    theme == "light" ? setTheme("dark") : setTheme("light");

  return (
    <>
      <Head>
        <title>{title ? `${title} | TribeBytes` : `TribeBytes`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="relative">
        <div className="fixed bottom-0 right-0 inline-block w-10 mr-10 align-middle select-none transition duration-200 ease-in">
          {/* <p>Toggle Dark Mode</p>
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            onChange={handleDarkToggle}
            className={`${
              theme === "dark" &&
              "right-0 bg-red-900 border border-4 border-gray-300"
            } mb-10 bottom-0 absolute block w-6 h-6 rounded-full bg-gray-300 border-4 border-red-900 appearance-none cursor-pointer`}
          />
          <label
            htmlFor="toggle"
            className={`${
              theme === "dark" && "right-0 bg-red-900"
            } toggle-label block mb-10 overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer`}
          ></label> */}
        </div>
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
