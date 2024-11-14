import React, { useState } from "react";
import { Call, Mail } from "@mui/icons-material";
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
            style={{ width: "160px" }}
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

          {/* Contacts Menu */}
          {showContacts && (
            <div
              className="pl-3"
              onMouseEnter={handleMouseEnterContacts}
              onMouseLeave={handleMouseLeaveContacts}
            >
              <div className="p-4 h-full backdrop-blur-lg bg-white/20 border border-white/30 shadow-lg rounded-xl text-hjalmarBlue transition-opacity duration-200">
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
                      alt="LinkedIn"
                    />
                    <a
                      href="https://www.linkedin.com/in/hjalmar-kjeldsen-b4264826a"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hjalmar Kjeldsen
                    </a>
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
