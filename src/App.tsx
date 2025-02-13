import { useState } from 'react';
import { Mail, Phone, Instagram, FileText } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState<string>('hero');

  const renderSection = () => {
    switch (currentSection) {
      case 'hero':
        return <Hero onContactClick={() => setCurrentSection('contact')} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onContactClick={() => setCurrentSection('contact')} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header onNavClick={setCurrentSection} currentSection={currentSection} />
      {renderSection()}
      <Footer />
    </div>
  );
}

export default App;