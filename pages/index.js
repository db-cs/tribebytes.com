import Header from "../components/Page";

export default function About() {
  return (
    <body class="bg-gradient-to-r from-red-800 via-gray-800 to-black">
      <Header />
      <div class="bg-red-900 place-content-center max-w-6xl px-20 mx-auto h-screen">
        <h1 class="text-center pt-10 text-6xl text-white">
          Welcome to TribeBytes!
        </h1>
        <div class="flex">
          <p class="text-left pt-10 text-white">
            I'm so excited to be joining Dobyns-Bennett this year, and I have
            really enjoyed getting to know the students this first week. Moving
            into the new Science and Technology building as been very exciting,
            and it is a fantastic environment to work and learn in. I really
            look forward to learning with the students this semester and getting
            to know them better. Please reach out if you have any questions or
            ideas:{" "}
            <a
              class="text-blue-500 underline hover:text-blue-600"
              href="mailto:dbailey@k12k.com"
            >
              dbailey@k12k.com
            </a>
            .
          </p>
          <img src="/Classroom.png"></img>
        </div>
      </div>
    </body>
  );
}
