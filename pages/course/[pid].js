import { useRouter } from "next/router";
import classdata from "../../data/classdata.json";

const Course = () => {
  const router = useRouter();
  const { pid } = router.query;

  const currentCourse = classdata.classes.find((course) => course.slug === pid);

  if (currentCourse) {
    return <p>The Current Id {currentCourse.name}</p>;
  } else {
    return <p>Loading...</p>;
  }
};

export default Course;
