import Head from "next/head";
import { graduates } from "../data/graduatedata.json";
import Header from "../components/Header";
import Graduate from "../components/Graduate";

const Graduates = () => (
  <body>
    <Header />
    <div className="bg-red-900 px-20 flex flex-wrap h-full justify-center">
      {graduates.map((graduate) => (
        <Graduate key={graduate.id} {...graduate} />
      ))}
    </div>
  </body>
);

export default Graduates;
