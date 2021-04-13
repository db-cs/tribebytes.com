import Layout from "../components/Header";

export default function About() {
  return (
    <Layout title="About">
      <div class="bg-red-900 max-w-screen px-20 mx-auto h-screen ">
        <h1 class="pt-20 text-white  float-right">
          <img
            class="mr-8 float-left rounded-lg"
            src="/profilepicture.jpeg"
            height="350"
            width="350"
          ></img>
          <h1 class="text-xl">Nathan Bailey</h1>
          <br></br>I have been teaching for over eleven years and have worked
          with both high school and elementary school students. Beginning my
          teaching career as a visual art teacher, I transitioned to teaching
          computer science three years ago. In 2018, I was selected to be a part
          of the 2018-2019 SCORE Tennessee Educator Fellowship. Outside of
          school, I enjoy eating good food and traveling with my wife, Lize.
        </h1>
      </div>
    </Layout>
  );
}
