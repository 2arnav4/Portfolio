import React, { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
   
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievement', href: '#Achievement' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-700">
        <ul className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => handleLinkClick(link.name)}
                className={`text-sm font-medium transition-all duration-300 ${
                  activeLink === link.name
                    ? 'text-white bg-purple-600/20 px-4 py-2 rounded-full border border-purple-500/30 shadow-lg shadow-purple-500/20'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50 px-4 py-2 rounded-full'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;