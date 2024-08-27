export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 mx-auto flex flex-col justify-between items-center z-50 max-w-screen-md">
      <div className="flex px-6 mt-12 mb-7">
        <p className="md:text-5xl text-2xl font-bold p-1 font-din">PREM VISPUTE</p>
      </div>
      <div className="md:flex items-center hidden px-1">
        <a
          href="#about"
          className="text-md font-semibold px-5 mx-1 bg-blue-800 rounded-full py-1 transition duration-500 ease-in-out font-din"
        >
          ABOUT
        </a>
        <a
          href="#skills"
          className="text-md font-semibold px-5 mx-1 bg-blue-800 rounded-full py-1 transition duration-500 ease-in-out font-din"
        >
          SKILLS
        </a>
        <a
          href="#work"
          className="text-md font-semibold px-5 mx-1 bg-blue-800 rounded-full py-1 transition duration-500 ease-in-out font-din"
        >
          WORK
        </a>
        <a
          href="#contact"
          className="text-md font-semibold px-5 mx-1 bg-blue-800 rounded-full py-1 transition duration-500 ease-in-out font-din"
        >
          CONTACT
        </a>
      </div>
    </header>
  );
}
