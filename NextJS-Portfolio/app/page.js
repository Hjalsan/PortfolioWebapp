"use client";

import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Section from "./components/Section";
import { sections } from "./data/sections";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-screen overflow-y-auto font-montserrat bg-white scroll-smooth">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Home Section */}
      <Section id="home" className="h-screen flex flex-col">
        <div className="flex-1 p-4 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl">PORTFOLIO</h1>
          <h1 className="text-2xl md:text-4xl lg:text-6xl">Portfolio</h1>
        </div>
        <div className="flex flex-row justify-between">
          <div
            style={{ width: "300px", height: "300px" }}
            className="bg-red-500 hidden xl:block"
          ></div>
          <div
            style={{ width: "800px", height: "300px" }}
            className="bg-gray-700 ml-auto"
          ></div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="h-screen bg-gray-200 flex items-center justify-center">
        <p className="text-2xl">Additional content below the main section...</p>
      </Section>

      {/* Timeline Section */}
      <Section id="timeline" className="bg-gray-400 flex items-center justify-center">
        <p style={{height: '2000px'}} className="text-2xl">Timeline</p>
      </Section>
    </div>
  );
}
