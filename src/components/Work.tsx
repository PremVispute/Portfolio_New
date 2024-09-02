import Image from "next/image";
import githubImg from "@/utils/images/githubImg.png";

export default function Work() {
  return (
    <div id="work" className="my-32">
      <p className="text-center text-3xl font-semibold font-din mb-10">
        Check out my work
      </p>
      <div className="flex flex-col w-1/4">
        <Image src={githubImg} alt="githubImg" />
      </div>
    </div>
  );
}
