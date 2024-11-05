"use client";

import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Section from "./components/Section";
import { sections } from "./data/sections";
import LottieAnimation from "./components/LottieAnimation";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: 0.1,
    };
  
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    const observeSections = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.observe(element);
      });
    };
  
    observeSections();
  
    // Update observer on viewport resize
    const handleResize = () => {
      observer.disconnect();
      observeSections(); 
    };
  
    window.addEventListener("resize", handleResize);
  
    // Cleanup on unmount
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-screen overflow-y-auto bg-white scroll-smooth">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Home Section */}
      <Section id="home" className="h-screen flex flex-col">
        <div className="flex-1 p-4 flex flex-col items-center">
          {/* Set a fixed size for the image */}
          <img src="/Home/PortfolioSkrift.svg" width={650} height={650} className="antialiased" />
        </div>
        <div className="flex flex-row justify-between align items-end">
          {/* Fixed width and height for the background image */}
          <img src="/Home/Blomster.svg" width={1400} height={700} className="hidden xl:block antialiased" />
          <img src="/Home/HjalmarComputer.svg" width={1000} height={500} className="antialiased" />
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="h-screen bg-gray-200 flex items-center justify-center">
        <p className="text-2xl">Additional content below the main section...</p>
      </Section>

      {/* Timeline Section */}
      <Section id="timeline" className="bg-gray-400 flex items-center justify-center">
        <p style={{ height: '2000px' }} className="text-2xl">Timeline</p>
      </Section>
    </div>
  );
}
