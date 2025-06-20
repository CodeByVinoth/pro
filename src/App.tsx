import { useEffect, useRef, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Careers } from './components/Careers';

function App() {
  const [currentSection, setCurrentSection] = useState<string>('hero');

  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const careersRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    hero: heroRef,
    about: aboutRef,
    services: servicesRef,
    projects: projectsRef,
    careers: careersRef,
    contact: contactRef,
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>, section: string) => {
    setCurrentSection(section);
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;

      Object.entries(sectionRefs).forEach(([section, ref]) => {
        const el = ref.current;
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setCurrentSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header
        onNavClick={(section) => {
          const ref = sectionRefs[section as keyof typeof sectionRefs];
          if (ref) scrollToSection(ref, section);
        }}
        currentSection={currentSection}
      />

      <div ref={heroRef}>
        <Hero
          onContactClick={() => scrollToSection(contactRef, 'contact')}
          onExploreClick={() => scrollToSection(servicesRef, 'services')}
          onAboutClick={() => scrollToSection(aboutRef, 'about')}
        />
      </div>

      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={servicesRef}>
        <Services />
      </div>

      <div ref={projectsRef}>
        <Projects />
      </div>

      <div ref={careersRef}>
        <Careers />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
