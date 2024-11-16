"use client";

import { useState, useEffect, useRef } from 'react';
import { Element } from 'react-scroll';
import Navigation from "./components/Navigation";
import ProjectsList from './components/ProjectsList';
import LottieAnimation from "./components/LottieAnimation";
import { worksParagraph } from "./data/works";

export default function Home() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [eyesOffset, setEyesOffset] = useState({ x: 0, y: 0 });
  const eyesContainerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (eyesContainerRef.current) {
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
  }, [cursorPos]);

  return (
    <div className="scroll-smooth">
      <Navigation className="hidden md:block" />

      {/* Home Section */}
      <Element name="home" className="element min-h-screen flex flex-col">
        <div className="flex-1 pt-16 flex flex-col items-center">
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
        className="element min-h-screen bg-white flex items-center justify-center"
      >
        <div className="flex flex-row">
          <div className="flex flex-col justify-center m-5 lg:m-20">
            <h1 className="text-hjalmarBlue font-bold text-9xl mb-5">Hej!</h1>
            <p
              className="text-lg lg:text-2xl"
              style={{ maxWidth: "950px" }}
            >
              {worksParagraph}
            </p>
          </div>
          <ProjectsList className="hidden 2xl:block" />
        </div>
      </Element>

      {/* Timeline Section */}
      <Element
        name="about"
        className="element bg-gray-400 flex items-center justify-center"
      >
        <div style={{ height: "2000px" }}>
          <LottieAnimation path="/Loader/LoaderPortfolio.json" />
        </div>
      </Element>
    </div>
  );
}
