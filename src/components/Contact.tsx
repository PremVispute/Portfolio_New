import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  const socialClasses =
    "bg-gray-900 rounded-2xl m-2 flex justify-center items-center transform transition-transform duration-300 hover:scale-110 hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="flex md:flex-row flex-col justify-around items-center"
    >
      <h2
        id="contact-heading"
        className="font-din font-semibold text-3xl"
      >
        Get in touch!
      </h2>
      <div className="grid grid-cols-2 w-44 h-44 md:mt-0 my-8">
        <a
          href="https://wa.me/919702714557/?text=I%20am%20interested%20in%20your%20work"
          target="_blank"
          rel="noopener noreferrer"
          className={socialClasses}
          aria-label="Contact via WhatsApp"
        >
          <FaWhatsapp className="text-4xl text-gray-300 transition-colors duration-200 hover:text-slate-100" />
        </a>
        <a
          href="mailto:premvispute@gmail.com"
          rel="noopener noreferrer"
          className={socialClasses}
          aria-label="Send an email"
        >
          <FaEnvelope className="text-4xl text-gray-300 transition-colors duration-200 hover:text-slate-100" />
        </a>
        <a
          href="https://www.instagram.com/premvispute/"
          target="_blank"
          rel="noopener noreferrer"
          className={socialClasses}
          aria-label="Open Instagram profile in new tab"
        >
          <FaInstagram className="text-4xl text-gray-300 transition-colors duration-200 hover:text-slate-100" />
        </a>
        <a
          href="https://www.linkedin.com/in/premvispute/"
          target="_blank"
          rel="noopener noreferrer"
          className={socialClasses}
          aria-label="Open LinkedIn profile in new tab"
        >
          <FaLinkedin className="text-4xl text-gray-300 transition-colors duration-200 hover:text-slate-100" />
        </a>
      </div>
      <div className="bg-gray-900 rounded-2xl overflow-hidden h-44">
        <iframe
          title="Map showing Mumbai, Maharashtra"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.03900799053!2d72.88118615!3d19.082250749999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1724655652187!5m2!1sen!2sin"
          height="600"
          width="180"
          style={{
            border: 0,
            marginTop: "-200px",
            filter: "invert(90%) hue-rotate(180deg)",
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
