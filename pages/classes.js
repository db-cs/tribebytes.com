import { classes } from "../data/classdata.json";
import Header from "../components/Header";
import Class from "../components/Class";
import Layout from "../components/Layout";

const Classes = () => (
  <Layout title="Classes">
    <div className="flex items-center justify-center h-56 text-white bg-red-900">
      <h1 className="text-4xl font-bold uppercase">Classes</h1>
    </div>
    <div className="grid justify-center h-full flex-shrink flex-wrap grid-cols-2 gap-8 p-20">
      {classes.map((classN) => (
        <Class key={classN.id} {...classN} />
      ))}
    </div>
  </Layout>
);
export default Classes;
