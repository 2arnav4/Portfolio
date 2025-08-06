import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.75, 0.95], [0, 1]);
  const y = useTransform(scrollYProgress, [0.75, 0.95], [50, 0]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('singlaarnav2405@gmail.com').then(() => {
      alert('Email copied to clipboard!');
    });
  };

  const contactLinks = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-8 h-8 text-blue-500"
        >
          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 24h4V8h-4v16zm7.5 0h4v-8.4c0-2 .4-4 3-4s2.6 2.2 2.6 4.1V24h4v-8.6C22.6 9.6 20 8 17.8 8c-2.4 0-3.7 1.3-4.3 2.2V8h-4v16z" />
        </svg>
      ),
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/arnav-singla-5683432a3",
      hoverColor: "hover:border-blue-400",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-8 h-8 text-white"
        >
          <path d="M12 0C5.37 0 0 5.38 0 12a12 12 0 0 0 8.21 11.44c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.32-1.74-1.32-1.74-1.08-.74.08-.72.08-.72 1.2.09 1.83 1.23 1.83 1.23 1.06 1.82 2.8 1.3 3.48.99.11-.77.41-1.3.75-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.47 5.92.42.36.8 1.1.8 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12c0-6.62-5.38-12-12-12z" />
        </svg>
      ),
      title: "GitHub",
      link: "https://github.com/2arnav4",
      hoverColor: "hover:border-gray-400",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-8 h-8 text-sky-400"
        >
          <path d="M23.95 4.57a10 10 0 0 1-2.83.78 4.92 4.92 0 0 0 2.16-2.7 10.14 10.14 0 0 1-3.13 1.2 4.92 4.92 0 0 0-8.38 4.49 13.97 13.97 0 0 1-10.15-5.15 4.92 4.92 0 0 0 1.52 6.57A4.9 4.9 0 0 1 .96 9v.06a4.93 4.93 0 0 0 3.95 4.82 4.93 4.93 0 0 1-2.21.08 4.93 4.93 0 0 0 4.6 3.41A9.86 9.86 0 0 1 0 19.54 13.94 13.94 0 0 0 7.55 21.5c9.14 0 14.14-7.72 13.82-14.64a9.88 9.88 0 0 0 2.42-2.53z" />
        </svg>
      ),
      title: "Twitter",
      link: "https://twitter.com/arnav_singla24",
      hoverColor: "hover:border-sky-400",
    },
  ];

  return (
    <motion.section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-black px-6 text-white py-4"
      style={{ opacity, y }}
    >
      <div className="max-w-7xl mx-auto w-full text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
            Let's Connect
          </span>
        </h2>

        {/* Email shown as a clickable link */}
        <p
          onClick={handleCopyEmail}
          title="Click to copy email"
          className="text-lg text-blue-400 mb-8 cursor-pointer hover:underline"
        >
          singlaarnav2405@gmail.com
        </p>

        <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
          Ready to collaborate? Find me on other platforms.
        </p>

        <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto">
          {contactLinks.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 ${contact.hoverColor} w-full transition-all duration-300 transform hover:scale-105 hover:bg-gray-700/70`}
            >
              <div className="flex items-center gap-5">
                <div className="group-hover:text-white transition-colors duration-300">
                  {contact.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-white">{contact.title}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Made with love footer */}
        <p className="mt-32 text-sm text-gray-500">
          Made with <span className="text-red-500">❤️</span> by Arnav
        </p>
      </div>
    </motion.section>
  );
};

export default Contact;
