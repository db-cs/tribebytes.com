import { useRouter } from "next/router";
import graduatedata from "../../data/graduatedata.json";

const Profile = () => {
  const router = useRouter();
  const { pid } = router.query;

  const currentPerson = graduatedata.graduates.find(
    (graduate) => graduate.url === pid
  );

  if (currentPerson) {
    return <p>The Current Id {currentPerson.quote}</p>;
  } else {
    return <p>Loading...</p>;
  }
};

export default Profile;
