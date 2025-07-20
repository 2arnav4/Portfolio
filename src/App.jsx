
//RE-WRITE THIS CODE 

import React from 'react';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Temporary content to test scrolling */}
      <div className="pt-16"> {/* Add top padding to account for fixed navbar */}
        <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-4">Welcome</h1>
            <p className="text-xl text-gray-300">Your Portfolio</p>
          </div>
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center bg-gray-800">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">About</h2>
            <p className="text-gray-300">About section content will go here</p>
          </div>
        </section>

        <section id="resume" className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Resume</h2>
            <p className="text-gray-300">Resume section content will go here</p>
          </div>
        </section>

        <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-800">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
            <p className="text-gray-300">Projects section content will go here</p>
          </div>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Contact</h2>
            <p className="text-gray-300">Contact section content will go here</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
