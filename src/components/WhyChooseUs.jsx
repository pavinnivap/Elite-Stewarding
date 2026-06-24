import React from 'react';
import { motion } from 'framer-motion';
import { FaUserCheck, FaMicrochip, FaLeaf, FaTag, FaClock, FaHeadset } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    { icon: <FaUserCheck />, title: "Certified Cleaning Experts", desc: "Our team is rigorously trained and certified in kitchen hygiene." },
    { icon: <FaMicrochip />, title: "Advanced Technology", desc: "We use the latest high-pressure systems and sanitization tools." },
    { icon: <FaLeaf />, title: "Food Safety Compliance", desc: "All chemicals used are eco-friendly and food-safe certified." },
    { icon: <FaTag />, title: "Affordable Pricing", desc: "Get premium quality services at competitive market rates." },
    { icon: <FaClock />, title: "On-Time Delivery", desc: "We value your time and ensure projects are finished as scheduled." },
    { icon: <FaHeadset />, title: "24/7 Customer Support", desc: "Our support team is always available to handle your emergency needs." },
  ];

  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Us</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Elite Stewarding stands for reliability, quality, and commitment to hygiene. Here is why we are the preferred choice for commercial kitchens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-secondary text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
