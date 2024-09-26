import Image from "next/image";
import githubImg from "@/utils/images/githubImg.png";
import leetcodeImg from "@/utils/images/leetcodeImg.png";

export default function Work() {
  return (
    <div id="work" className="my-32">
      <p className="text-center text-3xl font-semibold font-din mb-10">
        Check out my work
      </p>
      <div className="flex justify-evenly items-center">
        <a
          href="https://github.com/PremVispute"
          target="blank"
          className="block"
        >
          <Image
            src={githubImg}
            alt="githubImg"
            width={600}
            unoptimized={true}
            className="hover:opacity-80 transition-opacity"
          />
        </a>
        <a
          href="https://leetcode.com/u/heisenbergOG/"
          target="blank"
          className="block"
        >
          <Image
            src={leetcodeImg}
            alt="leetcodeImg"
            width={410}
            unoptimized={true}
            className="hover:opacity-80 transition-opacity"
          />
        </a>
      </div>
    </div>
  );
}
