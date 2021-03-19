import Header from "../components/Header";

export default function About() {
  return (
    //class="bg-gradient-to-r from-red-800 via-gray-800 to-black"
    <body>
      <Header />
      <div class="bg-red-900 place-content-center px-20 mx-auto h-screen">
        <img
          class="justify-center"
          src="/Logo.png"
          height="100"
          width="100"
        ></img>
        <div></div>
      </div>
    </body>
  );
}
