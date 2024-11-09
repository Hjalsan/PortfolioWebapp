"use client";

import Link from 'next/link';
import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import LottieAnimation from "./components/LottieAnimation";
import Section from "./components/Section";

import { sections } from "./data/sections";
import { worksParagraph } from "./data/works";
import projects from "./data/projects.json";

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
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} className="hidden md:block" />

      {/* Home Section */}
      <Section id="home" className="h-screen flex flex-col">
        <div className="flex-1 p-4 flex flex-col items-center">
          {/* Set a fixed size for the image */}
          <img src="/Home/PortfolioSkrift.svg" width={"30%"} className="antialiased" alt="Portfolio MEDIEGRAFIKER ELEV" />
        </div>
        <div className="flex flex-row justify-between align items-end">
          {/* Fixed width and height for the background image */}
          <img src="/Home/Blomster.svg" width={"62%"} className="hidden xl:block antialiased" alt="Flowers" />
          <img src="/Home/HjalmarComputer.svg" width={"35%"} className="antialiased" alt="Hjalmar Sitting at desk" />
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="works" className="h-screen bg-white flex items-center justify-center">
        <div className="flex flex-row">
          <div className="flex flex-col justify-center m-5 lg:m-20">
            <h1 className="text-hjalmarBlue font-bold text-9xl mb-5">Hej!</h1>
            <p className="text-lg lg:text-2xl" style={{maxWidth: "950px"}}>{worksParagraph}</p>
          </div>
          <div className="hidden 2xl:block">
            <div className="grid grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Link key={index} href={`/projects/${encodeURIComponent(project.title)}`}>
                  <div style={{width: "200px", height: "200px"}} className="flex relative shadow">
                    <img className="" src={project.icon} alt={`${project.title} icon`}/>
                    <div className="flex justify-center items-center absolute inset-0 transition duration-200 bg-hjalmarBlue opacity-0 hover:opacity-80">
                      <h2 className="text-4xl font-bold text-white text-center break-words">{project.title}</h2>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
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
