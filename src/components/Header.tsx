import { useState } from "react";
import { motion } from "framer-motion";
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
        {/* Logo */}
        <div
          className="flex items-center space-x-2 text-2xl font-bold cursor-pointer"
          onClick={() => onNavClick("home")}
        >
          <img src={logo} alt="Logo" className="h-12 w-12 animate-spin-slow" />
          <span className="hover:text-green-400 transition-colors duration-300">
            Wattstrons Automations
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden px-4 py-2 border border-green-400 rounded-xl text-white transition hover:scale-105 bg-black hover:border-green-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰ Menu"}
        </button>

        {/* Mobile Menu */}
        <motion.ul
  initial={{ x: "-100%" }}
  animate={{ x: menuOpen ? "0%" : "-100%" }}
  transition={{ duration: 0.3 }}
  className={`fixed top-0 left-0 w-1/3 max-h-[300px] 
    bg-black-500 bg-opacity-20 backdrop-blur-lg shadow-lg 
    flex flex-col items-center space-y-4 py-4 rounded-br-lg lg:hidden 
    border border-green-400`}
>

          {navItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="w-full text-center"
            >
              <button
                onClick={() => {
                  onNavClick(item.id);
                  setMenuOpen(false); // Close menu on click
                }}
                className={`px-4 py-2 border rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  currentSection === item.id
                    ? "text-green-400 border-green-400"
                    : "hover:text-green-300 border-black"
                }`}
              >
                {item.label}
              </button>
            </motion.li>
          ))}
        </motion.ul>

        {/* Desktop Navigation */}
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
    </header>
  );
}
