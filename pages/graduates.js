import Layout from "../components/Layout";
import Graduate from "../components/Graduate";

import { graduates } from "../data/graduatedata.json";

export default function Graduates() {
  return (
    <Layout title="Graduates">
      <div className="flex items-center justify-center h-56 text-white bg-red-900">
        <h1 className="text-4xl font-bold uppercase">Graduates</h1>
      </div>
      <div className="grid justify-center h-full grid-cols-1 gap-8 p-20 lg:grid-cols-2 xl:grid-cols-3">
        {graduates.map((graduate) => (
          <Graduate key={graduate.id} {...graduate} />
        ))}
      </div>
    </Layout>
  );
}
