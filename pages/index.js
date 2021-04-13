import Header from "../components/Header";
import Hero from "../components/Hero";

const slides = [
  {
    id: 0,
    url: "/Classroom.png",
    description: "ID IS 0",
  },
  {
    id: 1,
    url: "/Logo.png",
    description: "ID IS 1 ",
  },
  {
    id: 2,
    url: "/Classroom.png",
    description: "ID is 2 ",
  },
  {
    id: 3,
    url: "/Logo.png",
    description: "ID IS 3 ",
  },
  {
    class: "text-white",
    id: 4,
    url: "/Classroom.png",
    description: " ID IS 4",
  },
  {
    id: 5,
    url: "/Logo.png",
    description: " ID IS 5",
  },
  {
    id: 6,
    url: "/Classroom.png",
    description: "ID IS 6",
  },
  {
    id: 7,
    url: "/Logo.png",
    description: "ID IS 7",
  },
  {
    id: 8,
    url: "/Classroom.png",
    description: "ID IS  8",
  },
  {
    id: 9,
    url: "/Logo.png",
    description: "ID is 9",
  },
  {
    id: 10,
    url: "/Logo.png",
    description: "ID is 10",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <body class="">
        <main class=" max-w-screen">
          <div class="bg-red-900 p-8 h-screen ">
            <Hero slides={slides} />
          </div>
        </main>
      </body>
    </>
  );
}

