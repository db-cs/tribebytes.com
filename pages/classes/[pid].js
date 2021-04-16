import { useRouter } from "next/router";
import classdata from "../../data/classdata.json";
import Header from "../../components/Header";

const Course = () => {
  const router = useRouter();
  const { pid } = router.query;

  const currentCourse = classdata.classes.find((course) => course.slug === pid);
  console.log(currentCourse);

  if (currentCourse) {
    return (
      <body class="">
        <Header />
        <div className="bg-red-900 max-w-screen px-20 mx-auto h-screen ">
          <h1 className="pt-20 text-white float-right">
            <h1 className="text-5xl underline text-center mb-10">
              {currentCourse.name}
            </h1>
            <img
              className="mr-8 float-left rounded-lg"
              src="/Classroom.png"
              height="350"
              width="350"
            ></img>

            <h6 className="mt-5 italic">{currentCourse.year}</h6>
            <br></br>
            {currentCourse.info}
            <h1 className="m-5 text-2xl">{currentCourse.header1}</h1>
            <p>{currentCourse.body1}</p>
            <h1 className="m-5 text-2xl">{currentCourse.header2}</h1>
            <p>{currentCourse.body2}</p>
            <h1 className="m-5 text-2xl">{currentCourse.listHeader}</h1>
            <li>{currentCourse.list1}</li>
          </h1>
        </div>
      </body>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default Course;
