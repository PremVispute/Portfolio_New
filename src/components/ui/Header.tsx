export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 mx-auto flex flex-col justify-between items-center z-50 max-w-screen-md">
      <div className="flex px-6 mt-12 mb-7">
        <p className="md:text-5xl text-2xl font-bold p-1 font-din dark:text-slate-200">
          PREM VISPUTE
        </p>
      </div>
      <div className="flex md:flex-row flex-col items-center px-1">
        <a
          href="#about"
          className="text-md font-semibold px-5 mx-1 bg-blue-800 rounded-full py-1 transition duration-500 ease-in-out font-din md:my-0 my-2 dark:text-slate-200"
        >
          ABOUT
        </a>
        <a
          href="#skills"
          className="text-md font-semibold px-5 mx-1 bg-blue-800 rounded-full py-1 transition duration-500 ease-in-out font-din md:my-0 my-2 dark:text-slate-200"
        >
          SKILLS
        </a>
        <a
          href="#work"
          className="text-md font-semibold px-5 mx-1 bg-blue-800 rounded-full py-1 transition duration-500 ease-in-out font-din md:my-0 my-2 dark:text-slate-200"
        >
          WORK
        </a>
        <a
          href="#contact"
          className="text-md font-semibold px-5 mx-1 bg-blue-800 rounded-full py-1 transition duration-500 ease-in-out font-din md:my-0 my-2 dark:text-slate-200"
        >
          CONTACT
        </a>
      </div>
    </header>
  );
}
