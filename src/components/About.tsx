import Image from "next/image";
import profileImg from "@/utils/images/79bd2eba-2ca0-4c9e-84c6-d4d02227937d.webp";
import { IoCall } from "react-icons/io5";
import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <>
      <div className="flex flex-row my-12 justify-evenly">
        <div
          className="flex flex-col bg-gray-900 w-1/3 rounded-2xl p-4 shadow-xl shadow-gray-800 border-black"
          id="about"
        >
          <div className="flex flex-row justify-center">
            <div className="rounded-full bg-gray-950 h-24 w-24">
              <Image
                src={profileImg}
                alt="mainBG"
                className="p-2"
                unoptimized={true}
              />
            </div>
            <p className="md:text-4xl text-2xl font-medium p-6">Prem Vispute</p>
          </div>
          <p className="text-center mt-4">FRONT-END | FULL-STACK | AI / ML</p>
          <p className="text-center mt-4 text-gray-400">
            A professional merging creativity and technology. Primarily worked
            with MERN stack with a knack for travelling and watching youtube for
            latest technological developments.
          </p>
        </div>
        <div className="grid grid-cols-2 w-64">
          <div className="bg-gray-900 rounded-2xl m-2 flex justify-center items-center transform transition-transform duration-300 hover:scale-110 hover:bg-gray-800">
            <IoCall className="text-5xl text-gray-400 transition-colors duration-300 hover:text-slate-200" />
          </div>
          <div className="bg-gray-900 rounded-2xl m-2 flex justify-center items-center transform transition-transform duration-300 hover:scale-110 hover:bg-gray-800">
            <FaEnvelope className="text-5xl text-gray-400 transition-colors duration-300 hover:text-slate-200" />
          </div>
          <div className="bg-gray-900 rounded-2xl m-2 flex justify-center items-center transform transition-transform duration-300 hover:scale-110 hover:bg-gray-800">
            <FaInstagram className="text-5xl text-gray-400 transition-colors duration-300 hover:text-slate-200" />
          </div>
          <div className="bg-gray-900 rounded-2xl m-2 flex justify-center items-center transform transition-transform duration-300 hover:scale-110 hover:bg-gray-800">
            <FaLinkedin className="text-5xl text-gray-400 transition-colors duration-300 hover:text-slate-200" />
          </div>
        </div>
        <div className="bg-gray-900 rounded-2xl overflow-hidden h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.03900799053!2d72.88118615!3d19.082250749999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1724655652187!5m2!1sen!2sin"
            height="600"
            style={{
              border: 0,
              marginTop: "-200px",
              filter: "invert(90%) hue-rotate(180deg)",
            }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}
