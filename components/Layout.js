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
  return (
    <>
      <Head>
        <title>{title ? `${title} | TribeBytes` : `TribeBytes`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </>
  );
};

export default Layout;
