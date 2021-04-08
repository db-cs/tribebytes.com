import Head from "next/head";
import { graduates } from "../data/graduatedata.json";
import Header from "../components/Header";
import Graduate from "../components/Graduate";

const Graduates = () => (
  <body>
    <Header />
    <div className="bg-red-900 max-w-screen px-20 mx-auto flex flex-row h-screen justify-between">
      {graduates.map((graduate) => (
        <Graduate key={graduate.id} {...graduate} />
      ))}
    </div>
  </body>
);

export default Graduates;

// export default List;
// export default function Index() {
//   return (
//     <>
//       <Head>
//         <title>{content.title}</title>
//       </Head>
//       <h1>{content.index.title}</h1>
//       <h1>{content.pages.content}</h1>
//       <h1>{content.title}</h1>
//       <div dangerouslySetInnerHTML={{ __html: content.index.content }}></div>
//     </>
//   );
// }
