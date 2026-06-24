import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = ({ setView, currentView = 'home' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isSolidNavbar = scrolled || currentView !== 'home';

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLogoClick = () => {
    if (setView) setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (href) => {
    setIsOpen(false);
    if (setView) {
      setView('home');
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isSolidNavbar ? 'bg-white py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={handleLogoClick}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img src={logo} alt="Elite Stewarding Logo" className="h-12 w-auto object-contain" />
          <span className={`text-sm sm:text-xl font-extrabold tracking-wider ${isSolidNavbar ? 'text-primary' : 'text-white'}`}>
            ELITE <span className="text-secondary">STEWARDING</span>
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`transition-colors font-medium ${isSolidNavbar ? 'text-primary hover:text-secondary' : 'text-white hover:text-secondary'}`}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className={`text-2xl transition-colors ${isSolidNavbar ? 'text-primary' : 'text-white'}`}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className={`md:hidden border-t ${isSolidNavbar ? 'bg-white border-gray-200' : 'bg-primary border-gray-800'}`}
        >
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`transition-colors py-2 ${isSolidNavbar ? 'text-primary hover:text-secondary' : 'text-white hover:text-secondary'}`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
