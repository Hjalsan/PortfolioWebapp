import React from "react";
import { sections } from "../data/sections";

export default function Navigation({ activeSection, scrollToSection, className }) {
  return (
    <div className={`${className}`}>
      <div className="fixed top-6 left-6 z-10 text-2xl text-hjalmarBlue">
        <nav className="space-y-1">
          {sections.map((section) => (
            <button key={section.id} onClick={() => scrollToSection(section.id)} className={`flex items-center px-3 py-1 bg-transparent rounded ${activeSection === section.id ? "font-bold" : ""}`}>
              <span className={`w-2 h-2 rounded-full mr-2 transition-opacity duration-200 ${activeSection === section.id ? "bg-hjalmarBlue opacity-100" : "opacity-0"}`} />
              {section.title}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
