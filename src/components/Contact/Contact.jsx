import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to opacity and position (like About and Skills)
  const opacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
  const y = useTransform(scrollYProgress, [0.7, 0.9], [100, 0]);
  const scale = useTransform(scrollYProgress, [0.7, 0.9], [0.8, 1]);

  const handleEmailClick = () => {
    window.location.href = 'mailto:singlaarnav2405@gmail.com?subject=Hello from your portfolio!&body=Hi Arnav,%0D%0A%0D%0AI came across your portfolio and would like to connect with you.%0D%0A%0D%0ABest regards,';
  };

  const handleDoubleClickEmail = (e) => {
    e.stopPropagation(); // Prevent triggering the email compose
    navigator.clipboard.writeText('singlaarnav2405@gmail.com').then(() => {
      console.log('Email copied to clipboard on double-click!');
    });
  };

  const contactLinks = [
    {
      icon: "📧",
      title: "Email",
      action: handleEmailClick,
      description: "singlaarnav2405@gmail.com",
      hoverColor: "hover:border-blue-500",
      showDescription: true
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/arnav-singla-5683432a3/",
      description: "linkedin.com/in/arnav-singla-5683432a3",
      hoverColor: "hover:border-blue-400",
      showDescription: false
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      title: "GitHub",
      link: "https://github.com/2arnav4",
      description: "github.com/2arnav4",
      hoverColor: "hover:border-gray-400",
      showDescription: false
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      title: "Twitter",
      link: "https://x.com/arnav_singla24",
      description: "@arnav_singla24",
      hoverColor: "hover:border-sky-400",
      showDescription: false
    }
  ];

  return (
    <motion.section 
      id="contact" 
      className="min-h-screen flex items-center justify-center bg-black px-6 py-4"
      style={{ opacity, y, scale }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Ready to collaborate on exciting projects? Whether it's a new opportunity, 
            a technical discussion, or just to say hello - I'd love to hear from you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactLinks.map((contact, index) => (
            contact.title === "Email" ? (
              <div
                key={index}
                className={`bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700 ${contact.hoverColor} transition-all duration-300 transform hover:scale-105 hover:bg-gray-700/70 group cursor-pointer w-full relative`}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {typeof contact.icon === 'string' ? (
                    <span>{contact.icon}</span>
                  ) : (
                    contact.icon
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {contact.title}
                </h3>
                <p 
                  className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300 select-text cursor-pointer"
                  onDoubleClick={handleDoubleClickEmail}
                  title="Double-click to copy email"
                >
                  {contact.description}
                </p>
                
                {/* Clickable overlay for email compose */}
                <div 
                  className="absolute inset-0 cursor-pointer"
                  onClick={contact.action}
                ></div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                
                {/* Floating particles on hover */}
                <div className="absolute top-2 right-2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300 pointer-events-none"></div>
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300 delay-200 pointer-events-none"></div>
              </div>
            ) : (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700 ${contact.hoverColor} transition-all duration-300 transform hover:scale-105 hover:bg-gray-700/70 group cursor-pointer flex flex-col items-center justify-center min-h-[120px]`}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {typeof contact.icon === 'string' ? (
                    <span>{contact.icon}</span>
                  ) : (
                    contact.icon
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {contact.title}
                </h3>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating particles on hover */}
                <div className="absolute top-2 right-2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300 delay-200"></div>
              </a>
            )
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
