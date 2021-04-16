import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Class({ name, year, info, slug }) {
  const router = useRouter();
  return (
    <div>
      <div
        // onClick={() => router.push(`/course/${slug}`)}
        className=" p-5 text-center bg-white border-2 rounded-md"
      >
        <Image
          className="m-5 rounded-xl"
          src="/Classroom.png"
          alt={`${name}`}
          width={400}
          height={225}
          layout="intrinsic"
        />
        <h1 className="mb-5 text-4xl font-semibold uppercase">{name}</h1>
        <h2 className="mb-5 font-bold">{year}</h2>
        <hr className="w-2/3 mx-auto border-2 border-red-700" />
        <p className="mt-3">{info}</p>
        <div className="transition duration-300 ease-in transform hover:bg-gray-200 hover:border-transparent w-40 p-4 flex-shrink mx-auto mt-5 bg-white border-2 rounded-md">
          <Link href={`/classes/${slug}`}>
            <p>Learn more...</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
