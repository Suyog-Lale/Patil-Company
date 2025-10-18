import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Policies from './components/Policies';

// Define the type for the lucide object on the window
declare global {
  interface Window {
    lucide: {
      createIcons: () => void;
    };
  }
}

const App: React.FC = () => {
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }

    // Smooth scroll for anchor links
    const handleNavClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');

      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href.length < 2) return; // Ignore empty or single '#' links

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        event.preventDefault(); // Prevent the default anchor link behavior
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    document.addEventListener("click", handleNavClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleNavClick);
    };
  }, []);

  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Clients />
        <Projects />
        <Contact />
        <Policies />
      </main>
      <Footer />
    </div>
  );
};

export default App;