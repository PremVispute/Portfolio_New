import { IoMenu } from "react-icons/io5";

export default function Header() {
  return (
    <div>
      <div className="base bg-gray-900 mx-auto mt-10 flex justify-around">
        <p className="uppercase md:text-5xl text-2xl font-medium md:p-12 p-6">
          prem vispute
        </p>
        <IoMenu className="text-5xl self-center menu md:hidden" />
        <div className="md:flex items-center hidden">
          <p className="text-2xl font-medium px-4 uppercase">About</p>
          <p className="text-2xl font-medium px-4 uppercase">Skills</p>
          <p className="text-2xl font-medium px-4 uppercase">Work</p>
        </div>
      </div>
      <div className="base-2 h-96"></div>
      <div className="base h-96"></div>
      <div className="base h-96"></div>
    </div>
  );
}
