import Header from "../components/Header";
import Hero from "../components/Hero";

const slides = [
  {
    id: 0,
    url: "/Classroom.png",
    description:
      "ID IS 0 MYA HEEE EE MYA HAW AHWHJWAOJSHWJRJOKPIHUGYFTDRXFCYGHUIOJ",
  },
  {
    id: 1,
    url: "/Logo.png",
    description: "ID IS 1 ham hamh mah mahma ham hmahma hmah mahm hamh ham.",
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
  {
    id: 5,
    url: "/Logo.png",
    description:
      " ID IS 5 Aheeeeeejeiheehiuegheegijoeihueeijehueiheheiehihehieheiet fugiat veniam occaecat fugiat aliqua.",
  },
  {
    id: 6,
    url: "/Classroom.png",
    description:
      "ID IS SIX ID IS SEVEN ID IS SEVEN ID IS SEVENAnim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
  },
  {
    id: 7,
    url: "/Logo.png",
    description:
      "SEVEN SEVEN SEVEN SEVENM SEBVEN  nt amet fugiat veniam occaecat fugiat aliqua.",
  },
  {
    id: 8,
    url: "/Classroom.png",
    description: "ID IS  8 AWAHOoOOOOOOOOOOoOooOoOooOOoOoO.",
  },
  {
    id: 9,
    url: "/Logo.png",
    description: "ID is 9 text.png",
  },
  {
    id: 10,
    url: "/Logo.png",
    description: "this shouldnt show up ",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <body class="bg-gradient-to-r from-red-800 via-gray-800 to-black">
        <main class=" max-w-7xl px-10">
          <div class="bg-red-900 p-8">
            <Hero slides={slides} />
          </div>
        </main>
      </body>
    </>
  );
}
