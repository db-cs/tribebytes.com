import Layout from "../components/Layout";
import Image from "next/image";
import { graduates } from "../data/graduatedata.json";

export default function About() {
  return (
    <Layout title="About">
      <section class="text-white bg-red-900 h-screen body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              class="object-cover object-center rounded"
              alt="bailey buddy"
              src="/profilepicture.jpeg"
              height={350}
              width={350}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Nathan Bailey
            </h1>
            <p class="mb-8 leading-relaxed">
              I have been teaching for over eleven years and have worked with
              both high school and elementary school students. Beginning my
              teaching career as a visual art teacher, I transitioned to
              teaching computer science three years ago. In 2018, I was selected
              to be a part of the 2018-2019 SCORE Tennessee Educator Fellowship.
              Outside of school, I enjoy eating good food and traveling with my
              wife, Lize.
            </p>
            <div class="flex justify-center">
              <a href="https://github.com/dnbailey">
                <div className="inline-flex items-center justify-center px-6 py-2 my-8 border-2 rounded-md hover:bg-gray-400 hover:border-transparent">
                  <img
                    className="pr-3"
                    alt="github"
                    src="/GitHub-Mark-32px.png"
                  />
                  <p>dnbailey</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="h-screen px-20 mx-auto bg-red-900 max-w-screen ">
        <h1 className="pt-20 text-white">
          <Image
            className="mr-8 rounded-lg"
            alt="Bailey Buddy"
            src="/profilepicture.jpeg"
            height="350"
            width="350"
          />
          <h1 className="text-xl">Nathan Bailey</h1>
          <br></br>I have been teaching for over eleven years and have worked
          with both high school and elementary school students. Beginning my
          teaching career as a visual art teacher, I transitioned to teaching
          computer science three years ago. In 2018, I was selected to be a part
          of the 2018-2019 SCORE Tennessee Educator Fellowship. Outside of
          school, I enjoy eating good food and traveling with my wife, Lize.
        </h1>
      </div> */}
    </Layout>
  );
}
