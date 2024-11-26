"use client";

import { useState, useEffect, useRef } from 'react';
import { Call, Mail } from "@mui/icons-material";
import { Element } from 'react-scroll';
import Navigation from "./components/Navigation";
import ProjectsList from './components/ProjectsList';
import LottieAnimation from "./components/LottieAnimation";
import { worksParagraph } from "./data/works";
import { contactsParagraph } from './data/contacts';

import AboutSection from "./components/About.svg";

export default function Home() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [scrollPos, setScrollPos] = useState(0);
  const [eyesOffset, setEyesOffset] = useState({ x: 0, y: 0 });
  const eyesContainerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPos({ x: event.clientX, y: event.clientY });
    };

    const handleScroll = () => {
      setScrollPos(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (eyesContainerRef.current) {
      if (window.innerWidth >= 768)
      {
        const rect = eyesContainerRef.current.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width * 0.72;
        const eyeCenterY = rect.top + rect.height * 0.26;
  
        const dx = cursorPos.x - eyeCenterX;
        const dy = cursorPos.y - eyeCenterY;
  
        // Limit the maximum offset
        const maxOffset = 4; // Adjust this value as needed
        const angle = Math.atan2(dy, dx);
        const offsetX = Math.cos(angle) * maxOffset;
        const offsetY = Math.sin(angle) * maxOffset;
  
        setEyesOffset({ x: offsetX, y: offsetY });
      }
      else
      {
        setEyesOffset({ x: 0, y: 0});
      }
    }
  }, [cursorPos, scrollPos]);

  return (
    <div className="scroll-smooth">
      <Navigation className="hidden md:block" />

      {/* Home Section */}
      <Element name="home" className="element min-h-screen flex flex-col">
        <div className="flex-1 p-16 flex flex-col items-center">
          <img
            src="/Home/PortfolioSkrift.svg"
            className="antialiased"
            alt="Portfolio MEDIEGRAFIKER ELEV"
          />
        </div>
        <div className="flex flex-row justify-between items-end">
          <img
            src="/Home/Blomster.svg"
            className="hidden xl:block antialiased"
            alt="Flowers"
          />

          <div
            style={{ width: "789px", height: "430px" }}
            className="relative flex justify-end items-end overflow-hidden"
            ref={eyesContainerRef}
          >
            <LottieAnimation
              className="flex justify-end items-end absolute inset-0 z-10 pointer-events-none"
              path="/Home/HjalmarAnimation.json"
              alt="Hjalmar Sitting at Computer"
            />
            <img
              className="inset-0 z-20 pointer-events-none"
              src="/Home/HjalmarEyes.svg"
              alt="Hjalmar Eyes"
              style={{
                transform: `translate(${eyesOffset.x}px, ${eyesOffset.y}px)`
              }}
            />
            <LottieAnimation
              className="flex justify-end items-end absolute inset-0 z-30 pointer-events-none"
              path="/Home/HjalmarEyeAnimation.json"
              alt="Hjalmar Eyes Animation"
            />
          </div>
        </div>
      </Element>

      {/* Projects Section */}
      <Element
        name="works"
        className="element min-h-screen bg-white flex items-center justify-center bg-transparent xl:bg-[url('/Works/WorksBackground.svg')] bg-cover bg-center bg-no-repeat"
      >
        <div className="flex flex-row">
          <div className="flex flex-col justify-center m-5 lg:m-20">
            <h1 className="text-hjalmarBlue font-bold text-9xl mb-5">Hej!</h1>
            <p
              className="text-lg lg:text-2xl"
              style={{ maxWidth: "750px" }}
            >
              {worksParagraph}
            </p>
          </div>
          <ProjectsList className="flex-shrink-0 hidden lg:block mr-20" />
        </div>
      </Element>

      {/* Timeline Section */}
      <Element
        name="about"
        className="element flex items-center justify-center"
      >
        <AboutSection style={{width: "1280px"}} />
      </Element>
      
      {/* Contacts Section*/}
      <Element name="contacts" className="flex justify-center items-center h-screen pl-44 bg-white text-gray-900">
        <div className="flex flex-row text-hjalmarBlue">
          <div className="flex flex-col justify-end">
            <h1 className="text-hjalmarBlue text-5xl font-bold mb-8">Lad os tage en kop kaffe!</h1>
            <p style={{width: "875px"}} className="text-black text-2xl mb-8">{contactsParagraph}</p>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col justify-evenly text-2xl">
                <div className="flex items-center">
                  <Call fontSize="inherit" style={{ fontSize: '56px' }} className="mr-3" />
                  <a href="tel:+4542583158">+45 42 58 31 58</a>
                </div>
                <div className="flex items-center">
                  <Mail fontSize="inherit" style={{ fontSize: '56px' }} className="mr-3" />
                  <a href="mailto:hjalmargraphics@gmail.com">hjalmargraphics@gmail.com</a>
                </div>
                <div className="flex items-center">
                  <img
                    src="/linkedin.svg"
                    style={{ width: "56px" }}
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
              <img src="Contact/HjalmarPFP.png"/>
            </div>
          </div>
          <LottieAnimation className="w-[720px]" path="/Contact/KaffeAnimation.json" />
        </div>
      </Element>
    </div>
  );
}
