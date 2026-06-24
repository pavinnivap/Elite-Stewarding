import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = ({ setView }) => {
  const handleNavClick = (viewName) => {
    if (setView) {
      setView(viewName);
    }
  };

  return (
    <footer className="bg-white text-primary border-t border-gray-100 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Elite Stewarding Logo" className="h-14 w-auto object-contain" />
              <div className="text-xl font-extrabold tracking-wider text-primary">
                ELITE <span className="text-secondary">STEWARDING</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Premium kitchen cleaning and stewarding services in Singapore. We ensure your kitchen is inspection-ready, every day.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-primary mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); handleNavClick('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="hover:text-secondary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={() => handleNavClick('home')} 
                  className="hover:text-secondary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={() => handleNavClick('home')} 
                  className="hover:text-secondary transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={() => handleNavClick('home')} 
                  className="hover:text-secondary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-primary mb-6">Services</h4>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li><a href="#services" onClick={() => handleNavClick('home')} className="hover:text-secondary transition-colors">Deep Kitchen Cleaning</a></li>
              <li><a href="#services" onClick={() => handleNavClick('home')} className="hover:text-secondary transition-colors">Equipment Sanitization</a></li>
              <li><a href="#services" onClick={() => handleNavClick('home')} className="hover:text-secondary transition-colors">Dishwashing Support</a></li>
              <li><a href="#services" onClick={() => handleNavClick('home')} className="hover:text-secondary transition-colors">Grease Removal</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Elite Stewarding Private Limited. All rights reserved.</p>
          <div className="flex gap-8">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNavClick('privacy'); }} 
              className="hover:text-secondary cursor-pointer"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNavClick('terms'); }} 
              className="hover:text-secondary cursor-pointer"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
