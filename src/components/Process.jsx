import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    {
      title: "Inspection",
      description: "We analyze your kitchen space and identify cleaning requirements.",
      num: "01"
    },
    {
      title: "Planning",
      description: "We create a customized cleaning schedule and method plan.",
      num: "02"
    },
    {
      title: "Execution",
      description: "Our trained professionals perform deep cleaning using modern tools.",
      num: "03"
    },
    {
      title: "Quality Check",
      description: "Final inspection ensures 100% hygiene compliance.",
      num: "04"
    },
    {
      title: "Maintenance",
      description: "Optional recurring cleaning plans for long-term hygiene.",
      num: "05"
    }
  ];

  return (
    <section id="process" className="py-24 rgba(255, 255, 255, 0.7) text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-6">How We Work</h2>
          <p className="text-[#0F172A] max-w-2xl mx-auto opacity-85">
            Our systematic approach ensures every corner of your kitchen meets the highest standards of cleanliness.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-secondary/30 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-xl mb-6 shadow-[0_0_20px_rgba(20,184,166,0.5)] group-hover:scale-110 transition-transform duration-300">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary">{step.title}</h3>
                <p className="text-400 text-sm leading-relaxed px-2 text-[#0F172A]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
