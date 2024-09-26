import Image from "next/image";
import profileImg from "@/utils/images/79bd2eba-2ca0-4c9e-84c6-d4d02227937d.webp";

export default function About() {
  return (
    <>
      <div
        className="flex md:flex-row flex-col py-12 justify-center"
        id="about"
      >
        <div className="rounded-full bg-gray-950 h-32 w-32 self-center">
          <Image
            src={profileImg}
            alt="mainBG"
            className="p-2"
            unoptimized={true}
          />
        </div>
        <div className="flex flex-col md:w-3/5 md:ms-10">
          <p className="md:text-4xl text-2xl font-medium md:ps-6 py-2 font-din md:text-left text-center">
            Prem Vispute
          </p>
          <p className="md:ps-6 py-2 font-din md:text-left text-center">
            FRONT-END | FULL-STACK | AI / ML
          </p>
          <p className="text-gray-400 md:ps-6 py-2 md:px-0 px-2 font-din md:text-left text-center">
            A professional merging creativity and technology. Primarily worked
            with MERN stack with a knack for travelling and watching youtube for
            latest technological developments.
          </p>
        </div>
      </div>
    </>
  );
}
