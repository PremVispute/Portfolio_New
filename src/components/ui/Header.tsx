const NAV_LINK_CLASSES =
  "text-xs md:text-sm font-semibold px-3 md:px-5 mx-0.5 md:mx-1 bg-blue-800 hover:bg-blue-700 rounded-full py-1.5 md:py-2 transition-colors duration-200 ease-in-out font-din text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md supports-[backdrop-filter]:bg-black/25">
      <div className="mx-auto max-w-screen-md flex items-center justify-between gap-3 px-4 py-3 md:py-4">
        <h1 className="md:text-3xl text-lg font-bold font-din text-white tracking-tight">
          PREM VISPUTE
        </h1>
        <nav
          aria-label="Primary"
          className="flex flex-row items-center"
        >
          <a href="#about" className={NAV_LINK_CLASSES}>
            ABOUT
          </a>
          <a href="#skills" className={NAV_LINK_CLASSES}>
            SKILLS
          </a>
          <a href="#work" className={NAV_LINK_CLASSES}>
            WORK
          </a>
          <a href="#contact" className={NAV_LINK_CLASSES}>
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  );
}
