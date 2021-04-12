import Image from "next/image";

const Graduate = ({ id, name, year, quote, picture }) => (
  <div className="p-5 text-white bg-red-900 border-2 m-5">
    <h1 className="font-semibold text-4xl mb-1">{name}</h1>
    <p className="mb-1">Graduated {year}</p>
    <p className="mb-1 w-48 content-center flex flex-wrap">"{quote}"</p>
    <Image className="m-5" src={picture} width={200} height={160} />
  </div>
);

export default Graduate;
