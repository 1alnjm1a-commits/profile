import { navItems } from "../const/sections";
import Container from "../components/Container";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-(--border) shadow-sm">
      <Container>
        <div className="flex w-full max-w-7xl items-center justify-between py-4">
          <a
            href="#home"
            className="text-lg font-bold tracking-tight text-white sm:text-xl"
          >
            Ahmed<span className="text-sky-400">Dev</span>
          </a>

          {/* 💻 Desktop Menu */}
          <nav className="relative hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative link-hov font-ar text-sm font-medium text-gray-200 transition hover:text-sky-400"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* 📱 Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            {/* Burger Icon */}
            <span
              className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* 📱 Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden overflow-hidden">
            <div
              className={`bg-black/95 backdrop-blur-sm border-t border-gray-700 transition-all duration-300 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="block px-4 py-3 text-base font-medium text-gray-200 hover:text-sky-400 hover:bg-white/5 rounded-lg transition-all duration-200 border border-transparent hover:border-sky-400/30"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
