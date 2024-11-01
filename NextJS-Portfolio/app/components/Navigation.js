import React from "react";
import { sections } from "../data/sections";

export default function Navigation({ activeSection, scrollToSection }) {
  return (
    <div className="fixed top-4 left-4 z-10">
      <nav className="space-y-2">
        {sections.map((section) => (
          <button key={section.id} onClick={() => scrollToSection(section.id)} className="flex items-center px-3 py-1 bg-transparent text-gray-600 rounded">
            <span className={`w-2 h-2 rounded-full mr-2 transition-opacity duration-200 ${activeSection === section.id ? "bg-gray-600 opacity-100" : "opacity-0"}`}></span>
            {section.title}
          </button>
        ))}
      </nav>
    </div>
  );
}
