import "../styles/index.css";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="viewport-fit=cover" />
      <meta
        name="description"
        content="TribeBytes is the nickname for our Coding Program of study at Dobyns-Bennett High School. Located in Northeast Tennessee, Dobyns-Bennett serves around 2,300 students. The program includes a variety of courses and extra-curricular activities that are designed to prepare students to work in the Information Technology/Software Development industry."
      ></meta>
    </Head>
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
