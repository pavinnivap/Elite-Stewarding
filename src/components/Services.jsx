import React from 'react';
import { motion } from 'framer-motion';
import {
  FaUtensils, FaWater, FaFire, FaBroom, FaHandshake,
  FaUsers, FaBuilding, FaIndustry, FaHome, FaLayerGroup, FaClipboardList
} from 'react-icons/fa';

import kitchenStewarding from '../assets/kitchen_stewarding.png';
import dishwashingImg from '../assets/dishwashing.png';
import deepCleaningImg from '../assets/deep_cleaning.png';
import floorScrubImg from '../assets/floor_scrubbing.png';
import hospitalityImg from '../assets/hospitality_staff.png';
import eventStewarding from '../assets/event_stewarding.png';
import commercialImg from '../assets/commercial_cleaning.png';

const services = [
  {
    icon: <FaUtensils />,
    title: "Kitchen Stewarding Services",
    description: "Comprehensive stewarding services for commercial kitchens across Singapore. Our trained stewards manage dishwashing, kitchen organization, and equipment maintenance to keep your kitchen running at peak hygiene.",
    items: ["Dish & utensil management", "Kitchen organization", "Equipment upkeep", "Compliance readiness"],
    image: kitchenStewarding,
  },
  {
    icon: <FaWater />,
    title: "Dishwashing & Pot Washing",
    description: "High-volume dishwashing and pot washing solutions using commercial-grade machines and food-safe detergents. We handle everything from fine cutlery to heavy industrial cookware.",
    items: ["Commercial dishwashers", "Manual pot scrubbing", "Food-safe detergents", "High-volume capacity"],
    image: dishwashingImg,
  },
  {
    icon: <FaFire />,
    title: "Deep Kitchen Cleaning",
    description: "Thorough top-to-bottom deep cleaning of entire kitchen spaces including hoods, grease traps, oven interiors, tile walls, and drainage systems to meet NEA standards.",
    items: ["Exhaust hood degreasing", "Grease trap cleaning", "Oven & grill scrubbing", "Wall & floor sanitizing"],
    image: deepCleaningImg,
  },
  {
    icon: <FaBroom />,
    title: "Floor Scrubbing & Polishing",
    description: "Mechanical and manual floor scrubbing and polishing for commercial, industrial, and hospitality environments. We restore floors to a brilliant shine using professional-grade equipment.",
    items: ["Mechanical scrubbing", "High-speed polishing", "Anti-slip treatment", "Stain removal"],
    image: floorScrubImg,
  },
  {
    icon: <FaHandshake />,
    title: "Hospitality Support Staff",
    description: "Experienced and well-groomed hospitality support staff for hotels, restaurants, and banquet halls. Our team ensures seamless back-of-house operations during service hours.",
    items: ["Trained & uniformed staff", "Flexible deployment", "Back-of-house support", "Service coordination"],
    image: hospitalityImg,
  },
  {
    icon: <FaUsers />,
    title: "Event Stewarding Manpower",
    description: "Reliable stewarding manpower for large-scale events, exhibitions, and corporate functions. We provide pre-event setup, during-event support, and post-event deep cleaning.",
    items: ["Pre-event setup", "During-event coverage", "Post-event cleaning", "Express turnaround"],
    image: eventStewarding,
  },
  {
    icon: <FaBuilding />,
    title: "Commercial Cleaning",
    description: "Professional cleaning services for offices, retail spaces, and commercial buildings. We maintain pristine environments that leave a lasting impression on clients and staff.",
    items: ["Office cleaning", "Retail spaces", "Glass & surface cleaning", "Scheduled contracts"],
    image: commercialImg,
  },
  {
    icon: <FaIndustry />,
    title: "Industrial Cleaning",
    description: "Heavy-duty industrial cleaning for factories, warehouses, and manufacturing plants. Our team is equipped with industrial cleaning machinery and trained in safety protocols.",
    items: ["Factory & warehouse floors", "Machinery degreasing", "Safety-compliant methods", "Large-scale operations"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: <FaHome />,
    title: "Condominium Cleaning Services",
    description: "Specialized cleaning services for residential condominiums in Singapore. We maintain gyms, pools, corridors, lobbies, and all common areas to the highest standard.",
    items: ["Gym & pool areas", "Lobby & lift areas", "Corridor maintenance", "Management contracts"],
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: <FaLayerGroup />,
    title: "Common Area Cleaning",
    description: "Routine and deep cleaning of shared common areas in commercial and residential buildings. We ensure hallways, staircases, and shared facilities are always spotless.",
    items: ["Hallways & staircases", "Shared washrooms", "Lift interiors", "Bin chute maintenance"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: <FaClipboardList />,
    title: "Ad-Hoc & Contract Staffing",
    description: "Flexible manpower solutions for one-time requirements or long-term contracts. We provide trained cleaning and stewarding staff on short notice to meet your operational demands.",
    items: ["Same-day deployment", "Long-term contracts", "Trained manpower", "Scalable team size"],
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800",
  },
];

const ServiceCard = ({ icon, title, description, items, image, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20 py-16 border-b border-gray-100 last:border-0`}
    >
      {/* Text Side */}
      <div className="w-full lg:w-1/2 space-y-5">
        <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary text-2xl shadow-sm">
          {icon}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-primary">{title}</h3>
        <p className="text-base text-gray-600 leading-relaxed">{description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-secondary rounded-full shadow-[0_0_8px_rgba(20,184,166,0.5)] shrink-0"></div>
              <span className="font-medium text-gray-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Image Side */}
      <div className="w-full lg:w-1/2">
        <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
          <img
            src={image}
            alt={title}
            className="w-full h-[360px] object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-500"></div>
          <div className="absolute -inset-1 border-2 border-secondary/20 rounded-3xl -z-10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
              OUR SPECIALIZED SERVICES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Complete Cleaning & Stewarding Solutions
            </h2>
            <p className="text-lg text-gray-600">
              From kitchen stewarding to industrial cleaning, we deliver premium hygiene and manpower services across Singapore.
            </p>
          </motion.div>
        </div>

        {/* Services List */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              index={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;