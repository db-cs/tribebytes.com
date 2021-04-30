import { useRouter } from "next/router";
import classdata from "../../data/classdata.json";
import Layout from "../../components/Layout";

const Course = () => {
  const currentCourse = classdata.classes.find((course) => course.id === 3);
  console.log(currentCourse);

  if (currentCourse) {
    return (
      <Layout title={`${currentCourse.name}`}>
        <div className="h-screen px-20 mx-auto bg-red-900 place-content-center max-w-screen">
          <div className="pt-20 text-white">
            <h1 className="mb-10 text-5xl text-center underline">
              {currentCourse.name}
            </h1>
            <img
              className="float-left mr-8 rounded-lg"
              src="/Classroom.png"
              height="350"
              width="350"
            ></img>
          </div>
        </div>
      </Layout>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default Course;
