import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#050505]/85 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight text-white"
        >
          Bharath<span className="text-violet-400">.</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex">

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
            >
              {item.name}
            </a>
          ))}

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-violet-400/40 hover:bg-white/5"
          >
            Resume

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-white/10 p-2 text-zinc-300 transition-colors hover:bg-white/5 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 bg-[#050505]/95 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto max-w-7xl px-6 py-5">

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  className="block border-b border-white/5 py-4 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="mt-5 flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black"
              >
                Download Resume
                <ArrowUpRight size={16} />
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;