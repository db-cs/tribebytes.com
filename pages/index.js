import Layout from "../components/Layout";
import Hero from "../components/Hero";

import { slides } from "../data/slides.json";

export default function Home() {
  return (
    <Layout>
      <div className="h-screen p-8 bg-red-900">
        <Hero slides={slides} />
      </div>
    </Layout>
  );
}
