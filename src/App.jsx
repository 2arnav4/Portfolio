import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Achievement from "./components/Achievement/Achievement";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    // You can apply your background color to the main container
    <div className="bg-gray-900 text-white">
      <Navbar />
      <main>
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