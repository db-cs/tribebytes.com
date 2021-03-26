import { makePublicRouterInstance } from "next/router";
import Header from "../components/Header";
export default function More() {
  return (
    <>
      <body class="">
        <Header />

        <div class="bg-red-900 place-content-center max-w-screen px-20 mx-auto h-screen">
          <img
            class="justify-center"
            src="/Logo.png"
            height="150"
            width="150"
          ></img>
          <a href="/ee" class="opacity-1">
            .
          </a>
          <div></div>
        </div>
      </body>
    </>
  );
}
