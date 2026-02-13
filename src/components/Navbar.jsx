import { useEffect, useRef, useState } from "react";

const Navbar = ({ dark, setDark }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  /* Scroll-trigger LEFT→RIGHT roll */
  useEffect(() => {
    const nav = navRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            nav.classList.add("show");
          } else {
            nav.classList.remove("show"); // reset so it rolls again
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(nav);

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      ref={navRef}
      className="nav-roller relative z-50 backdrop-blur-md bg-white/40 dark:bg-white/5
      border-b border-black/10 dark:border-white/10"
    >
      {/* Inner wrapper prevents stretching */}
      <div className="nav-inner">
        <div className="flex justify-between items-center px-6 py-5 max-w-6xl mx-auto">
          
          <h1 className="text-xl font-bold">Mohan Krishna</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-purple-500">About</a>
            <a href="#skills" className="hover:text-purple-500">Skills</a>
            <a href="#projects" className="hover:text-purple-500">Projects</a>
            <a href="#contact" className="hover:text-purple-500">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="px-3 py-2 rounded-lg border border-black/20 dark:border-white/20 text-sm"
            >
              {dark ? "Light" : "Dark"}
            </button>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`absolute w-6 h-0.5 bg-current transition ${menuOpen ? "rotate-45" : "-translate-y-2"}`}></span>
              <span className={`absolute w-6 h-0.5 bg-current transition ${menuOpen ? "opacity-0" : ""}`}></span>
              <span className={`absolute w-6 h-0.5 bg-current transition ${menuOpen ? "-rotate-45" : "translate-y-2"}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="px-6 pb-6 pt-2 space-y-4 bg-white/80 dark:bg-black/80 backdrop-blur-lg">
            <a href="#about" onClick={() => setMenuOpen(false)} className="block">About</a>
            <a href="#skills" onClick={() => setMenuOpen(false)} className="block">Skills</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="block">Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="block">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
