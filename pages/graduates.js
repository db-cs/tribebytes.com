import { graduates } from "../data/graduatedata.json";
import Header from "../components/Header";
import Graduate from "../components/Graduate";

const Graduates = () => (
  <body>
    <Header />
    <div className="flex items-center justify-center h-56 text-white bg-red-900">
      <h1 className="text-4xl font-bold uppercase">Graduates</h1>
    </div>
    <div className="grid justify-center h-full grid-cols-3 gap-8 p-20">
      {graduates.map((graduate) => (
        <Graduate key={graduate.id} {...graduate} />
      ))}
    </div>
  </body>
);

export default Graduates;
