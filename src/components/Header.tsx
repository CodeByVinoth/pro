import { useState } from "react";
import logo from "../assets/logo.jpg";

interface HeaderProps {
  onNavClick: (section: string) => void;
  currentSection: string;
}

export function Header({ onNavClick, currentSection }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const showTopButton = ['services', 'projects'].includes(currentSection);
  const circularGlowStyle = "p-2 border border-green-400 rounded-xl text-white transition-all shadow-lg hover:scale-110 bg-black ring-2 ring-green-400";
  const singleLineButtonStyle = "px-4 py-1 border border-green-400 rounded-xl text-white transition hover:scale-105 bg-black hover:border-green-500";

  return (
    <header className="bg-black text-white py-4 px-6 fixed w-full top-0 z-50 shadow-lg">
      <nav className="flex justify-between items-center">
        <div className="flex items-center space-x-2 text-2xl font-bold cursor-pointer" onClick={() => onNavClick('home')}>
          <img src={logo} alt="Logo" className="h-10 w-10 animate-spin-slow" />
          <span className="hover:text-green-400 transition-colors duration-300">Wattstrons Automations</span>
        </div>
        <button className={`lg:hidden ${singleLineButtonStyle}`} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✖' : '☰ Menu'}
        </button>
        <ul className={`lg:flex items-center space-x-6 ${menuOpen ? 'flex flex-col items-center space-y-4 mt-4' : 'hidden'}`}>
          {navItems.map(item => (
            <li key={item.id} className="w-full text-center">
              <button
                onClick={() => onNavClick(item.id)}
                className={`px-4 py-2 border rounded-lg transition-all duration-300 transform hover:scale-105 ${currentSection === item.id ? 'text-green-400 border-green-400' : 'hover:text-green-300 border-black'}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {showTopButton && (
        <div className="fixed bottom-4 right-4 hidden lg:block animate-pulse">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={circularGlowStyle}>
            ↑ Top
          </button>
        </div>
      )}
    </header>
  );
}
