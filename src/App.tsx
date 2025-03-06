//import { useState } from "react";
import "./App.css";
import Skills from "./sections/Skills";
import AboutMe from "./sections/AboutMe";
import Info from "./sections/Info";
import Project from "./sections/Project";
import Career from "./sections/Career";
import Right from "./sections/Right";
import Archiving from "./sections/Archiving";

function App() {
  return (
    <div className="flex flex-col overflow-y-auto h-screen">
      <header className="flex flex-row justify-between items-center p-4 h-1/5">
        <div className="flex w-1/3 text-xl font-bold cursor-pointer">
          HDB&apos;s Portfolio
        </div>
        <div className="flex w-1/3.5">
          <button className="px-4 py-2 cursor-pointer hover:text-white transition-colors duration-300">
            About me
          </button>
          <button className="px-4 py-2 cursor-pointer hover:text-white transition-colors duration-300">
            Skills
          </button>
          <button className="px-4 py-2 cursor-pointer hover:text-white transition-colors duration-300">
            Archiving
          </button>
          <button className="px-4 py-2 cursor-pointer hover:text-white transition-colors duration-300">
            Prjects
          </button>
          <button className="px-4 py-2 cursor-pointer hover:text-white transition-colors duration-300">
            Career
          </button>
        </div>
      </header>
      <Info />
      <AboutMe />
      <Skills />
      <Archiving />
      <Project />
      <hr className="flex border-gray-300" />
      <Career />
      <footer>
        <Right />
      </footer>
    </div>
  );
}

export default App;
