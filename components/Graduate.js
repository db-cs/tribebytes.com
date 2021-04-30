import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Graduate({ name, year, quote, githubUsername, url }) {
  const router = useRouter();
  return (
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
      <div className="flex justify-center">
        <a href={`https://github.com/${githubUsername}`}>
          <div className="inline-flex items-center justify-center px-6 py-2 my-4 border-2 rounded-md hover:bg-gray-400 hover:border-transparent">
            <img className="pr-2" src="/GitHub-Mark-32px.png" />
            <p>{githubUsername}</p>
          </div>
        </a>
        <Link href={`/graduates/${url}`}>
          <div className="inline-flex items-center justify-center px-6 py-2 my-4 ml-1 border-2 rounded-md select-none hover:bg-gray-400 hover:border-transparent">
            <p>Full Profile</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
