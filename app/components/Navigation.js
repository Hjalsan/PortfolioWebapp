import React, { useState } from "react";
import { sections } from "../data/sections";
import { Link } from 'react-scroll';

export default function Navigation({ className }) {
  const [activeSection, setActiveSection] = useState("home");
  const [showContacts, setShowContacts] = useState(false);

  const handleMouseEnterContacts = () => setShowContacts(true);
  const handleMouseLeaveContacts = () => setShowContacts(false);

  return (
    <div className={`${className} relative`}>
      {/* Main Navigation */}
      <div className="fixed top-12 left-5 z-10 text-2xl text-hjalmarBlue">
        <div className="flex">
          <nav
            className="space-y-1 p-2 relative backdrop-blur-lg bg-white/20 border border-white/30 rounded-xl"
          >
            {sections.map((section) => (
              <Link
                key={section.id}
                to={section.id}
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={() => setActiveSection(section.id)}
                onMouseEnter={() => setShowContacts(false)}
                className={`flex items-center px-3 py-1 bg-transparent rounded hover:font-bold cursor-pointer ${
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
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
