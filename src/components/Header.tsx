import { CircuitBoard } from 'lucide-react';

interface HeaderProps {
  onNavClick: (section: string) => void;
  currentSection: string;
}

export function Header({ onNavClick, currentSection }: HeaderProps) {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="bg-black text-white py-6 fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <div 
          className="flex items-center space-x-2 text-2xl font-bold cursor-pointer"
          onClick={() => onNavClick('hero')}
        >
          <CircuitBoard className="w-8 h-8" />
          <span>Wattstrons Automations</span>
        </div>
        <ul className="flex space-x-6">
          {navItems.map(item => (
            <li key={item.id}>
              <button 
                onClick={() => onNavClick(item.id)}
                className={`transition-colors cursor-pointer ${
                  currentSection === item.id 
                    ? 'text-green-400' 
                    : 'hover:text-green-400'
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