import { useRouter } from "next/router";
import graduatedata from "../../data/graduatedata.json";
import Header from "../../components/Header";
import Image from "next/image";

const Course = () => {
  const router = useRouter();
  const { pid } = router.query;

  const currentProfile = graduatedata.graduates.find(
    (graduate) => graduate.url === pid
  );

  if (currentProfile) {
    return (
      <body class="">
        <Header />
        <section class="text-white bg-red-900 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-col">
            <div class="lg:w-4/6 mx-auto">
              <div class="flex flex-col sm:flex-row mt-10">
                <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <p class="text-base mb-3">
                    Graduated:{" "}
                    <i>
                      <b>{currentProfile.year}</b>
                    </i>
                  </p>
                  <div class="rounded-full inline-flex items-center justify-center text-gray-400">
                    <Image
                      className="m-5 rounded-full"
                      src={`https://github.com/${currentProfile.githubUsername}.png`}
                      alt={`Profile picture for ${currentProfile.name}.`}
                      width={300}
                      height={300}
                      layout="intrinsic"
                    />
                  </div>
                  <div class="flex flex-col items-center text-center justify-center">
                    <h2 class="font-medium title-font mt-4 text-white text-lg">
                      {currentProfile.name}
                    </h2>
                    <div class="w-12 h-1 bg-red-700 rounded mt-2 mb-4"></div>
                    <p class="text-base">"{currentProfile.quote}"</p>
                  </div>
                </div>
                <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">

                  <h1 className="text-3xl underline italic mb-5">
                    {currentProfile.header1}
                  </h1>
                  <p class="leading-relaxed text-lg mb-4">
                    {currentProfile.body1}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default Course;
