import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 z-10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Elite Stewarding Services <span className="text-secondary">Private Limited</span> – Excellence in Kitchen Cleaning
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              We deliver professional kitchen deep cleaning, sanitization, and stewarding services that ensure safety, hygiene, and compliance with global food standards.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center gap-2">
                Get a Free Quote
              </button>
              <button className="btn-outline flex items-center justify-center gap-2 !border-white !text-white hover:!bg-white hover:!text-primary">
                Book Cleaning Service
              </button>
            </div> */}
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute bottom-0 right-0 p-10 hidden md:block"
      >
        <span className="text-[200px] font-bold text-white select-none">ELITE</span>
      </motion.div>
    </section>
  );
};

export default Hero;
