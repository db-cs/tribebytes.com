import Header from "../components/Header";
import Hero from "../components/Hero";

const slides = [
  {
    id: 0,
    url: "http://placekitten.com/1500/300",
    description: "Guest speaker coming Monday...",
  },
  {
    id: 1,
    url: "/Logo.png",
    description:
      "ID IS 1 ham hamh mah mahma ham hmahma hmah mahm hamh ham.ham hamh mah mahma ham hmahma hmah mahm hamh ham.ham hamh mah mahma ham hmahma hmah mahm hamh ham.ham hamh mah mahma ham hmahma hmah mahm hamh ham.ham hamh mah mahma ham hmahma hmah mahm hamh ham.",
  },
  {
    id: 2,
    url: "/Classroom.png",
    description:
      "ID is 2 tinkering tinkering tinkering rtinkering tinkering tinkering",
  },
  {
    id: 3,
    url: "/Logo.png",
    description: "ID IS 3 yesyesyesyesyesyesyeysyesyeysyesyesyesyeysyesyyesy",
  },
  {
    id: 4,
    url: "/Classroom.png",
    description:
      " ID IS 4 Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <body>
        <main class="">
          <div class="bg-red-900 p-4 h-screen flex justify-center">
            <Hero class="" slides={slides} />
          </div>
        </main>
      </body>
    </>
  );
}
// import Header from "../components/Header";

// export default function About() {
//   return (
//     //class="bg-gradient-to-r from-red-800 via-gray-800 to-black"
//     <body>
//       <Header />
//       <div class="bg-red-900 place-content-center px-20 mx-auto h-screen">
//         <img
//           class="justify-center"
//           src="/Logo.png"
//           height="100"
//           width="100"
//         ></img>
//         <div></div>
//       </div>
//     </body>
//   );
// }
