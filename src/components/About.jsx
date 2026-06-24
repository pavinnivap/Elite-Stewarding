import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaCheckCircle, FaTools, FaSmile } from 'react-icons/fa';

const About = () => {
  const benefits = [
    { icon: <FaShieldAlt />, text: "Food safety compliance" },
    { icon: <FaCheckCircle />, text: "Germ-free kitchen environment" },
    { icon: <FaTools />, text: "Extended life of kitchen equipment" },
    { icon: <FaSmile />, text: "Improved customer and guest satisfaction" },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
              ABOUT US
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Specialized Kitchen Cleaning for Excellence
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Elite Stewarding Private Limited, we specialize in high-standard kitchen cleaning services designed for hotels, restaurants, catering units, and commercial kitchens.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our goal is to maintain hygiene, safety, and operational excellence through trained professionals and advanced cleaning techniques.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="text-secondary text-xl">
                    {benefit.icon}
                  </div>
                  <span className="font-medium text-primary">{benefit.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000" 
                alt="Professional Kitchen"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative boxes */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-2xl -z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-2xl -z-0"></div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold italic">
                E
              </div>
              <div>
                <div className="text-primary font-bold text-lg">Elite Quality</div>
                <div className="text-gray-500 text-sm">Certified Standards</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
