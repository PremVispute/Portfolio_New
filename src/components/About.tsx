import Image from "next/image";
import profileImg from "@/utils/images/79bd2eba-2ca0-4c9e-84c6-d4d02227937d.webp";

export default function About() {
  return (
    <div className="base-2 flex justify-center mt-12">
      <div className="rounded-full bg-black h-24 w-24">
        <Image
          src={profileImg}
          alt="mainBG"
          className="p-2"
          unoptimized={true}
        />
      </div>
      <p className="md:text-4xl text-2xl font-medium p-6">PREM VISPUTE</p>
    </div>
  );
}
