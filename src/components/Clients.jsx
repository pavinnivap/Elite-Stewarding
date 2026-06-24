import React from 'react';
import { motion } from 'framer-motion';

const Clients = () => {
  const clients = [
    "Labyrinth Food Pte Ltd",
    "London Fat Duck",
    "Naema Moroccan & Mediterranean",
  ];

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-gray-400 font-semibold mb-10 tracking-widest uppercase text-sm">
          TRUSTED BY INDUSTRY LEADERS
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-xl md:text-2xl font-bold text-gray-800 grayscale hover:grayscale-0 transition-all cursor-default"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
