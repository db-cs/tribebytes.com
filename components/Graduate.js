import Image from "next/image";
import ee from "../pages/ee";

const Graduate = ({ id, name, year, quote, picture, ee }) => (
  <div className="p-5 text-white bg-red-900 border-2 m-5">
    <h1 className="font-semibold text-4xl mb-1">{name}</h1>
    <p className="mb-1">Graduated {year}</p>
    <p className="mb-1 w-48 content-center flex flex-wrap">"{quote}"</p>
    <a href={ee}>
      <Image className="m-5" src={picture} width={200} height={160} />
    </a>
  </div>
);

export default Graduate;
