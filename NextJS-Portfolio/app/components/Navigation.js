import React, { useState } from "react";
import { Call, Mail } from "@mui/icons-material";
import { sections } from "../data/sections";

export default function Navigation({ activeSection, scrollToSection, className }) {
  const [showContacts, setShowContacts] = useState(false);

  const handleMouseEnterContacts = () => setShowContacts(true);
  const handleMouseLeaveContacts = () => setShowContacts(false);

  return (
    <div className={`${className} relative`}>
      {/* Main Navigation */}
      <div className="fixed top-16 left-16 z-10 text-2xl text-hjalmarBlue">
        <div className="flex">
          <nav style={{width: "167px"}} className="space-y-1 p-2 relative backdrop-blur-lg bg-white/20 border border-white/30 rounded-xl">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                onMouseEnter={() => setShowContacts(false)} // Close contacts menu when hovering other buttons
                className={`flex items-center px-3 py-1 bg-transparent rounded hover:font-bold ${
                  activeSection === section.id ? "font-bold" : ""
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full mr-2 transition-opacity duration-200 ${
                    activeSection === section.id
                      ? "bg-hjalmarBlue opacity-100"
                      : "opacity-0"
                  }`}
                />
                {section.title}
              </button>
            ))}
            {/* Contacts Button */}
            <button
              onMouseEnter={handleMouseEnterContacts}
              onMouseLeave={handleMouseLeaveContacts}
              className={`flex items-center px-3 py-1 bg-transparent rounded ${
                showContacts ? "font-bold" : ""
              }`}
            >
              <span className="w-2 h-2 rounded-full mr-2" />
              Contacts
            </button>
          </nav>

          {/* Contacts Menu - Positioned next to the main navigation */}
          {showContacts && (
            <div className="pl-3"
              onMouseEnter={handleMouseEnterContacts}
              onMouseLeave={handleMouseLeaveContacts}>
              <div
                className="p-4 h-full backdrop-blur-lg bg-white/20 border border-white/30 shadow-lg rounded-xl text-hjalmarBlue transition-opacity duration-200">
                <div className="flex flex-col justify-between h-full text-xl">
                  <div className="flex items-center">
                    <Call fontSize="large" className="mr-3" />
                    <a href="tel:+4542583158">+45 42 58 31 58</a>
                  </div>
                  <div className="flex items-center">
                    <Mail fontSize="large" className="mr-3" />
                    <a href="mailto:hjalmargraphics@gmail.com">hjalmargraphics@gmail.com</a>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="/linkedin.svg"
                      style={{ width: "36px" }}
                      className="mr-3"
                    />
                    <a href="https://www.linkedin.com/in/hjalmar-kjeldsen-b4264826a" target="_blank" rel="noopener">Hjalmar Kjeldsen</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
