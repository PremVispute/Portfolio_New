import Image from "next/image";
import profileImg from "@/utils/images/79bd2eba-2ca0-4c9e-84c6-d4d02227937d.webp";

export default function About() {
  return (
    <>
      <div className="flex flex-row my-12 justify-center" id="about">
        <div className="rounded-full bg-gray-950 h-32 w-32 self-center">
          <Image
            src={profileImg}
            alt="mainBG"
            className="p-2"
            unoptimized={true}
          />
        </div>
        <div className="flex flex-col w-1/2 ms-10">
          <p className="md:text-4xl text-2xl font-medium ps-6 py-2 font-din">
            Prem Vispute
          </p>
          <p className="ps-6 py-2 font-din">FRONT-END | FULL-STACK | AI / ML</p>
          <p className="text-gray-400 ps-6 py-2 font-din">
            A professional merging creativity and technology. Primarily worked
            with MERN stack with a knack for travelling and watching youtube for
            latest technological developments.
          </p>
        </div>
      </div>
    </>
  );
}
