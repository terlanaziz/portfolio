import { useState, useEffect } from "react";

const Navbar = ({ activeLink }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
  }, [menuOpen]);

  return (
    <>
      {/* Blur Overlay outside header */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-md z-40 transition-opacity duration-300 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <header className={`navbar ${scrolled ? "scrolled" : ""} fixed top-0 w-full z-50`}>
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-white">
            TerlanDev
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-white text-base font-medium">
            {["#home", "#projects", "#about", "#contact"].map((link) => (
              <li key={link}>
                <a
                  href={link}
                  className={`pb-1 border-b-2 transition duration-300 ${
                    activeLink === link ? "border-blue-500" : "border-transparent"
                  }`}
                >
                  {link.replace("#", "").toUpperCase()}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-16 left-0 right-0 bg-slate-900 text-white z-50 flex flex-col items-center text-center space-y-4 py-6 transition-transform duration-300 ease-in-out 
            ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
          }`}
        >
          {["#home", "#projects", "#about", "#contact"].map((link) => (
            <a
              key={link}
              href={link}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium hover:text-blue-400 transition"
            >
              {link.replace("#", "").toUpperCase()}
            </a>
          ))}
        </div>
      </header>
    </>
  );
};

export default Navbar;
