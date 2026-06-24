import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import logo from './assets/logo.png';

function App() {
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('home'); // 'home', 'privacy', 'terms'

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              y: -50,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
            }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white overflow-hidden"
          >
            {/* Background decorative glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#14B8A6]/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative flex flex-col items-center">
              {/* Squeegee reflection/sweep animation container */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative mb-6"
              >
                <img src={logo} alt="Elite Stewarding Logo" className="w-64 h-64 md:w-80 md:h-80 object-contain relative z-10" />
                
                {/* Squeegee shine wipe effect overlay */}
                <motion.div 
                  initial={{ x: "-100%", y: "-100%" }}
                  animate={{ x: "100%", y: "100%" }}
                  transition={{ delay: 0.8, duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#14B8A6]/20 to-transparent z-20 pointer-events-none"
                  style={{ transform: "rotate(30deg)" }}
                />
              </motion.div>

              {/* Progress bar loader */}
              <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                  className="h-full bg-[#14B8A6]"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen bg-background font-sans text-textDark selection:bg-secondary selection:text-white"
      >
        <Navbar setView={setView} currentView={view} />
        
        {view === 'home' && (
          <>
            <Hero />
            <Clients />
            <About />
            <Services />
            <Process />
            <WhyChooseUs />
            <Contact />
          </>
        )}

        {view === 'privacy' && (
          <PrivacyPolicy onBack={() => setView('home')} />
        )}

        {view === 'terms' && (
          <TermsOfService onBack={() => setView('home')} />
        )}

        <Footer setView={setView} />
      </motion.div>
    </>
  );
}

export default App;
