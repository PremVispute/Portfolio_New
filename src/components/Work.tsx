import Image from "next/image";
import githubImg from "@/utils/images/githubImg.png";
import leetcodeImg from "@/utils/images/leetcodeImg.png";

export default function Work() {
  return (
    <div id="work" className="my-32">
      <p className="text-center text-3xl font-semibold font-din mb-10">
        Check out my work
      </p>
      <div className="flex justify-evenly">
        <Image
          src={githubImg}
          alt="githubImg"
          unoptimized={true}
          className="w-1/2 h-1/2"
        />
        <Image
          src={leetcodeImg}
          alt="leetcodeImg"
          unoptimized={true}
          className="w-1/3 h-1/2"
        />
      </div>
    </div>
  );
}
