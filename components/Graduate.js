import Image from "next/image";
import Link from "next/link";

const Graduate = ({ name, year, quote, githubUsername, url }) => (
  <div className="p-5 text-center bg-white border-2 rounded-md">
    <Image
      className="m-5 rounded-full"
      src={`https://github.com/${githubUsername}.png`}
      alt={`Profile picture for ${name}.`}
      width={150}
      height={150}
      layout="intrinsic"
    />
    <h1 className="mb-1 text-4xl font-semibold uppercase">{name}</h1>
    <h2 className="mb-3 font-bold">Graduated {year}</h2>
    <hr className="w-2/3 mx-auto border-2 border-red-700" />
    <p className="mt-3">"{quote}"</p>
    <div>
      <a href={`https://github.com/${githubUsername}`}>
        <div className=" transition cursor-pointer duration-300 ease-in transform inline-flex items-center justify-center px-6 py-2 mt-8 mb-2 border-2 rounded-md hover:bg-gray-300 hover:border-transparent">
          <img className="pr-2" alt="github" src="/GitHub-Mark-32px.png" />
          <p>{githubUsername}</p>
        </div>
      </a>
      <div className="transition cursor-pointer duration-300 ease-in transform hover:bg-gray-200 hover:border-transparent w-40 flex-shrink mx-auto bg-white border-2 rounded-md">
        <Link href={`/graduates/${url}`}>
          <p className="p-4">Full Profile...</p>
        </Link>
      </div>
    </div>
  </div>
);

export default Graduate;
