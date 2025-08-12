import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.jpg";

interface HeaderProps {
  onNavClick: (section: string) => void;
  currentSection: string;
}

export function Header({ onNavClick, currentSection }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "careers", label: "Careers" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="bg-black text-white py-4 px-6 fixed w-full top-0 z-50 shadow-lg">
      <nav className="flex justify-between items-center">
        <div
          className="flex items-center space-x-2 text-2xl font-bold cursor-pointer"
          onClick={() => onNavClick("home")}
        >
          <img src={logo} alt="Logo" className="h-12 w-12 animate-spin-slow" />
          <span className="hover:text-green-400 transition-colors duration-300">
            Wattstrons 
          </span>
        </div>

        <button
          className="lg:hidden px-4 py-2 border border-green-400 rounded-xl text-white transition hover:scale-105 bg-black hover:border-green-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰ Menu"}
        </button>

        <ul className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavClick(item.id)}
                className={`px-4 py-2 border rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  currentSection === item.id
                    ? "text-green-400 border-green-400"
                    : "hover:text-green-300 border-black"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0, rotateY: 90 }}
            animate={{ x: 0, opacity: 1, rotateY: 0 }}
            exit={{ x: "100%", opacity: 0, rotateY: 90 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-[85%] max-w-xs h-full bg-black/70 backdrop-blur-md z-50 shadow-xl border-l border-green-400 rounded-l-2xl flex flex-col p-6"
            style={{
              boxShadow: "0 0 25px rgba(0, 255, 150, 0.4)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="flex justify-end">
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMenuOpen(false)}
                className="text-white text-3xl font-bold hover:text-green-400 transition animate-pulse"
              >
                ✕
              </motion.button>
            </div>

            <ul className="flex flex-col space-y-6 mt-8">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 0px 15px rgba(0, 255, 150, 0.6)",
                    }}
                    onClick={() => {
                      onNavClick(item.id);
                      setMenuOpen(false);
                    }}
                    className={`w-full text-left text-lg font-semibold px-5 py-3 rounded-lg transition-all duration-300 bg-black/80 ${
                      currentSection === item.id
                        ? "text-green-400 border border-green-400"
                        : "text-white border border-transparent hover:text-green-300 hover:border-green-300"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
