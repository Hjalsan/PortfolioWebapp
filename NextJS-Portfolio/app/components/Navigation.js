import React, { useState } from "react";
import { Call, Dataset, Inbox, Mail } from "@mui/icons-material"

import { sections } from "../data/sections";

export default function Navigation({ activeSection, scrollToSection, className }) {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <div className={`${className} relative`}>
      {/* Main Navigation */}
      <div className="fixed top-6 left-6 z-10 text-2xl text-hjalmarBlue">
        <div className="flex">
          <nav className="space-y-1 backdrop-blur-lg p-3 rounded-xl">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex items-center px-3 py-1 bg-transparent rounded ${
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
              className={`flex items-center px-3 py-1 bg-transparent rounded ${showContacts ? "font-bold" : ""}`}
              onClick={() => setShowContacts(!showContacts)}
            >
              <span className="w-2 h-2 rounded-full mr-2" />
              Contacts
            </button>
          </nav>
          {/* Contacts Menu - Positioned next to the main navigation */}
          {showContacts && (
            <div className="ml-3 backdrop-blur-lg bg-white/20 border border-white/30 shadow-lg p-4 rounded-xl text-hjalmarBlue transition-opacity duration-200">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <Call fontSize="large" className="mr-3"/>
                  +45 42 58 31 58
                </div>
                <div className="flex items-center">
                  <img src="/linkedin.svg" style={{width: "36px"}} className="mr-3"/>
                  LinkedIn
                </div>
                <div>
                  <Mail fontSize="large" className="mr-3"/>
                  Mail
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
