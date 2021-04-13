import Layout from "../components/Layout";

export default function More() {
  return (
    <Layout>
      <div className="h-screen px-20 mx-auto bg-red-900 place-content-center max-w-screen">
        <img
          className="justify-center"
          src="/Logo.png"
          height="150"
          width="150"
        ></img>
        <a href="/ee" className="opacity-1">
          .
        </a>
        <div></div>
      </div>
    </Layout>
  );
}
