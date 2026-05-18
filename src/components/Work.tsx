import Image from "next/image";
import githubImg from "@/utils/images/githubImg.png";
import leetcodeImg from "@/utils/images/leetcodeImg.png";

export default function Work() {
  const linkClasses =
    "block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2";

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="my-32"
    >
      <h2
        id="work-heading"
        className="text-center text-3xl font-semibold font-din mb-10"
      >
        Check out my work
      </h2>
      <div className="flex md:flex-row flex-col justify-evenly items-center gap-5 px-4">
        <a
          href="https://github.com/PremVispute"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClasses}
          aria-label="Open GitHub profile in new tab"
        >
          <Image
            src={githubImg}
            alt="GitHub profile preview"
            width={600}
            unoptimized
            className="hover:opacity-80 transition-opacity duration-200 w-full max-w-[600px] h-auto"
          />
        </a>
        <a
          href="https://leetcode.com/u/heisenbergOG/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClasses}
          aria-label="Open LeetCode profile in new tab"
        >
          <Image
            src={leetcodeImg}
            alt="LeetCode profile preview"
            width={410}
            unoptimized
            className="hover:opacity-80 transition-opacity duration-200 w-full max-w-[410px] h-auto"
          />
        </a>
      </div>
    </section>
  );
}
