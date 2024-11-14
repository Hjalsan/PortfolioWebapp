"use client";

import { Element } from 'react-scroll';
import Navigation from "./components/Navigation";
import ProjectsList from './components/ProjectsList';
import LottieAnimation from "./components/LottieAnimation";
import Section from "./components/Section";
import { worksParagraph } from "./data/works";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Navigation className="hidden md:block" />

      {/* Home Section */}
      <Element name="home" className="element min-h-screen flex flex-col">
        <div className="flex-1 p-16 flex flex-col items-center">
          <img src="/Home/PortfolioSkrift.svg" className="antialiased" alt="Portfolio MEDIEGRAFIKER ELEV" />
        </div>
        <div className="flex flex-row justify-between items-end">
          <img src="/Home/Blomster.svg" className="hidden xl:block antialiased" alt="Flowers" />
          <LottieAnimation path="/Home/HjalmarComputerAnimation.json" alt="Hjalmar Sitting at desk" />
        </div>
      </Element>

      {/* Projects Section */}
      <Element name="works" className="element min-h-screen bg-white flex items-center justify-center">
        <div className="flex flex-row">
          <div className="flex flex-col justify-center m-5 lg:m-20">
            <h1 className="text-hjalmarBlue font-bold text-9xl mb-5">Hej!</h1>
            <p className="text-lg lg:text-2xl" style={{ maxWidth: "950px" }}>{worksParagraph}</p>
          </div>
          <ProjectsList className="hidden 2xl:block" />
        </div>
      </Element>

      {/* Timeline Section */}
      <Element name="about" className="element bg-gray-400 flex items-center justify-center">
        <div style={{ height: "2000px" }}>
          <LottieAnimation path="/Loader/LoaderPortfolio.json" />
        </div>
      </Element>
    </div>
  );
}
