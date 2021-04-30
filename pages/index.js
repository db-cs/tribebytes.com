import Layout from "../components/Layout";
import Hero from "../components/Hero";

import { slides } from "../data/slides.json";

export default function Home() {
  return (
    <Layout>
      <Hero slides={slides} />

      <section className="px-20 pt-20 pb-32 ">
        <div className="container mx-auto prose text-center lg:prose-lg">
          <h1 className="font-bold uppercase">Welcome</h1>
          <p>
            TribeBytes is the nickname for our Coding Program of study at
            Dobyns-Bennett High School. Located in Northeast Tennessee,
            Dobyns-Bennett serves around 2,300 students. The program includes a
            variety of courses and extra-curricular activities that are designed
            to prepare students to work in the Information Technology/Software
            Development industry.
          </p>
        </div>
      </section>

      <section className="bg-gray-200 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="container mx-auto mb-8 prose text-center">
            <h1 className="font-bold uppercase">Thoughts from Our Students</h1>
            <p>Our students are the heart of our program.</p>
          </div>
          <hr className="w-1/2 mx-auto mb-8 border-2 border-red-900" />
          <div className="flex flex-col gap-8 lg:flex-row">
            <Testimonial name="HOLDEN CAULFIELD" title="Class of 2021">
              Edison bulb retro cloud bread echo park, helvetica stumptown
              taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
              ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
              adaptogen squid fanny pack vaporware.
            </Testimonial>
            <Testimonial name="HOLDEN CAULFIELD" title="Class of 2021">
              Edison bulb retro cloud bread echo park, helvetica stumptown
              taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
              ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
              adaptogen squid fanny pack vaporware.
            </Testimonial>
            <Testimonial name="HOLDEN CAULFIELD" title="Class of 2021">
              Edison bulb retro cloud bread echo park, helvetica stumptown
              taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
              ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
              adaptogen squid fanny pack vaporware.
            </Testimonial>
          </div>
        </div>
      </section>

      <section className="container py-32"></section>
    </Layout>
  );
}

const Testimonial = ({ name, title, children }) => {
  return (
    <div className="w-2/3 p-4 mx-auto mb-6 bg-gray-100 border-2 border-gray-400 lg:w-1/3 lg:mb-0 rounded-xl">
      <div className="h-full text-center">
        <p className="leading-relaxed">{children}</p>
        <span className="inline-block w-10 h-1 mt-6 mb-4 bg-red-900 rounded"></span>
        <h2 className="text-sm font-medium tracking-wider text-gray-700 uppercase title-font">
          {name}
        </h2>
        <p className="text-black">{title}</p>
      </div>
    </div>
  );
};
