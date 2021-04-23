import { useRouter } from "next/router";
import classdata from "../../data/classdata.json";
import Layout from "../../components/Layout";

const Course = () => {
  const router = useRouter();
  const { pid } = router.query;

  const currentCourse = classdata.classes.find((course) => course.slug === pid);

  if (currentCourse) {
    return (
      <Layout title={`${currentCourse.name}`}>
        <div className="h-screen px-20 mx-auto bg-red-900 place-content-center max-w-screen">
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

            <h6 className="mt-5">
              Recommended: <i>{currentCourse.year}</i>
            </h6>
            <br></br>
            {currentCourse.info}
            <h1 className="m-5 text-2xl">{currentCourse.header1}</h1>
            <p>{currentCourse.body1}</p>
            <h1 className="m-5 text-2xl">{currentCourse.header2}</h1>
            <p>{currentCourse.body2}</p>
            <h1 className="m-5 text-2xl">{currentCourse.listHeader}</h1>
            <div className="m-5">
              <ul className="list-disc visible">
                <li>{currentCourse.list1.l1}</li>
                <li>{currentCourse.list1.l2}</li>
                <li>{currentCourse.list1.l3}</li>
                <li>{currentCourse.list1.l4}</li>
              </ul>
            </div>
          </h1>
        </div>
      </Layout>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default Course;
