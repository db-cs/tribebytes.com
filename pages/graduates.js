import Head from "next/head";
import content from "../data/graduatedata.json";
import Header from "../components/Header";

export default function Index() {
  return (
    <>
      <Head>
        <title>{content.title}</title>
      </Head>
      <h1>{content.index.title}</h1>
      <h1>{content.title}</h1>
    </>
  );
}
