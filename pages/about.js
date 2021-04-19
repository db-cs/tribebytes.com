import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout title="About">
      <div className="h-screen px-20 mx-auto bg-red-900 max-w-screen ">
        <h1 className="float-right pt-20 text-white">
          <img
            className="float-left mr-8 rounded-lg"
            src="/profilepicture.jpeg"
            height="350"
            width="350"
          ></img>
          <h1 className="text-xl">Nathan Bailey</h1>
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
