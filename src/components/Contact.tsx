import { IoCall } from "react-icons/io5";
import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <div className="flex justify-around">
        <div className="grid grid-cols-2 w-64" id="contact">
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
