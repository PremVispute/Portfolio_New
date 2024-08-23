import { IoMenu } from "react-icons/io5";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 mx-auto flex justify-between items-center z-50 max-w-screen-md">
      <div className="flex bg-blue-950 rounded-full px-6 py-2 my-6">
        <p className="md:text-4xl text-2xl font-medium">PREM VISPUTE</p>
      </div>
      <IoMenu className="text-5xl self-center menu md:hidden" />
      <div className="md:flex items-center hidden bg-blue-950 rounded-full py-2 px-1">
        <p className="text-md font-medium px-5 mx-1 hover:bg-blue-800 rounded-full py-1 transition duration-500 ease-in-out">
          ABOUT
        </p>
        <p className="text-md font-medium px-5 mx-1 hover:bg-blue-800 rounded-full py-1 transition duration-500 ease-in-out">
          SKILLS
        </p>
        <p className="text-md font-medium px-5 mx-1 hover:bg-blue-800 rounded-full py-1 transition duration-500 ease-in-out">
          WORK
        </p>
      </div>
    </header>
  );
}
