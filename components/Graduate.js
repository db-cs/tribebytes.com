import Image from "next/image";
import ee from "../pages/ee";

<<<<<<< HEAD
const Graduate = ({ id, name, year, quote, picture, ee }) => (
  <div className="p-5 text-white bg-red-900 border-2 m-5">
    <h1 className="font-semibold text-4xl mb-1">{name}</h1>
    <p className="mb-1">Graduated {year}</p>
    <p className="mb-1 w-48 content-center flex flex-wrap">"{quote}"</p>
    <a href={ee}>
      <Image className="m-5" src={picture} width={200} height={160} />
=======
const Graduate = ({ id, name, year, quote, githubUsername }) => (
  <div className="p-5 text-center bg-white border-2 rounded-md">
    <Image className="m-5 rounded-full" src={`https://github.com/${githubUsername}.png`} alt={`Profile picture for ${name}.`} width={150} height={150} layout="intrinsic" />
    <h1 className="mb-1 text-4xl font-semibold uppercase">{name}</h1>
    <h2 className="mb-3 font-bold">Graduated {year}</h2>
    <hr className="w-2/3 mx-auto border-2 border-red-700" />
    <p className="mt-3">"{quote}"</p>
    <a href={`https://github.com/${githubUsername}`}>
      <div className="inline-flex items-center justify-center px-6 py-2 my-8 border-2 rounded-md hover:bg-gray-400 hover:border-transparent">
        <img className="pr-2" src="/GitHub-Mark-32px.png" />
        <p>{githubUsername}</p>
      </div>
>>>>>>> 0f3f425145b88c81bdb4324079693141d6c692bd
    </a>
  </div>
);

export default Graduate;
