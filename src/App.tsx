//import { useState } from "react";
import "./App.css";
import Skills from "./sections/Skills";
import AboutMe from "./sections/AboutMe";
import Info from "./sections/Info";
import Project from "./sections/Project";
import Career from "./sections/Career";
import Right from "./sections/Right";
import Archiving from "./sections/Archiving";
import Header from "./sections/Header";

function App() {
  return (
    <div className="flex flex-col overflow-y-auto h-screen scroll-smooth">
      <Header />
      <main className="flex flex-col pt-20">
        <Info />
        <AboutMe />
        <Skills />
        <Archiving />
        <Project />
        <hr className="flex border-gray-300" />
        <Career />
        <Right />
      </main>
    </div>
  );
}

export default App;
