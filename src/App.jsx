import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Teknologi from "./component/Teknologi";
import Experience from "./component/Experience";
import Project from "./component/Project";
import Contact from "./component/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300">
      <div className="fixed top-0 left-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <Navbar />
        <Hero />
        <About />
        <Teknologi />
        <Experience />
        <Project />
        <Contact />
      </div>
    </div>
  );
};

export default App;
