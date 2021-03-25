import { makePublicRouterInstance } from "next/router";
import Header from "../components/Header";
export default function About() {
  return (
    <>
      <body class="bg-gradient-to-r from-red-800 via-gray-800 to-black">
        {/* <a href="/ee" class="opacity-0">
          .
        </a> */}
        <Header />
        <div class="bg-red-900 place-content-center max-w-6xl px-20 mx-auto h-screen bg-opacity-50">
          <img
            class="justify-center"
            src="/Logo.png"
            height="150"
            width="150"
          ></img>
          <div></div>
        </div>
      </body>
    </>
  );
}
