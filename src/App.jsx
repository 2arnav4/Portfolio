import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/about";
import Skills from "./components/Skills/Skills";
import Achievement from "./components/Achievement/Achievement";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    // You can apply your background color to the main container
    <div className="bg-black text-white">
      <Navbar />
      <main className="space-y-0">
        {/* Render each section component just once */}
        <About />
        <Skills />
        <Achievement />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;