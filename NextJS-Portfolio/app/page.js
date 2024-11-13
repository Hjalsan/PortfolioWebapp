"use client";

import Link from 'next/link';
import { useEffect, useState } from "react";

import Navigation from "./components/Navigation";
import ProjectsList from './components/ProjectsList';
import LottieAnimation from "./components/LottieAnimation";
import Section from "./components/Section";

import { sections } from "./data/sections";
import { worksParagraph } from "./data/works";

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
    <div className="min-h-screen overflow-y-auto scroll-smooth">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} className="hidden md:block" />

      {/* Home Section */}
      <Section id="home" className="min-h-screen flex flex-col">
        <div className="flex-1 p-6 flex flex-col items-center">
          {/* Set a fixed size for the image */}
          <img src="/Home/PortfolioSkrift.svg" className="antialiased" alt="Portfolio MEDIEGRAFIKER ELEV" />
        </div>
        <div className="flex flex-row justify-between align items-end">
          {/* Fixed width and height for the background image */}
          <img src="/Home/Blomster.svg" className="hidden xl:block antialiased" alt="Flowers" />
          <LottieAnimation path="/Home/HjalmarComputerAnimation.json" alt="Hjalmar Sitting at desk" />
          {/*<img src="/Home/HjalmarComputer.svg" className="antialiased" alt="Hjalmar Sitting at desk" />*/}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="works" className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex flex-row">
          <div className="flex flex-col justify-center m-5 lg:m-20">
            <h1 className="text-hjalmarBlue font-bold text-9xl mb-5">Hej!</h1>
            <p className="text-lg lg:text-2xl" style={{maxWidth: "950px"}}>{worksParagraph}</p>
          </div>

          <ProjectsList className="hidden 2xl:block" />
        </div>
      </Section>

      {/* Timeline Section */}
      <Section id="about" className="bg-gray-400 flex items-center justify-center">
        <div style={{height: "2000px"}}>
          <LottieAnimation path="/Loader/LoaderPortfolio.json" />
        </div>
      </Section>
    </div>
  );
}
