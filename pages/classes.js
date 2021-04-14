import { classes } from "../data/classdata.json";
import Header from "../components/Header";
import Class from "../components/Class";

const Classes = () => (
  <body>
    <Header />
    <div className="flex items-center justify-center h-56 text-white bg-red-900">
      <h1 className="text-4xl font-bold uppercase">Classes</h1>
    </div>
    <div className="grid justify-center h-full grid-cols-2 gap-8 p-20">
      {classes.map((classN) => (
        <Class key={classN.id} {...classN} />
      ))}
    </div>
  </body>
);
export default Classes;
