import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon, DocumentArrowDownIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter.jsx';

const Hero = () => {
  const [greeting, setGreeting] = useState('');
  const [currentText, setCurrentText] = useState('');
  const experienceCounter = useAnimatedCounter(1);
  const projectsCounter = useAnimatedCounter(3);
  const clientsCounter = useAnimatedCounter(1);

  const taglines = [
    "Crafting digital experiences that inspire",
    "Building the future, one line of code at a time",
    "Where creativity meets functionality"
  ];

  useEffect(() => {
    // Set greeting based on time
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 17) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");

    // Typing animation
    let currentTagline = 0;
    let currentChar = 0;
    let isDeleting = false;

    const typeEffect = () => {
      const current = taglines[currentTagline];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentChar - 1));
        currentChar--;
        
        if (currentChar === 0) {
          isDeleting = false;
          currentTagline = (currentTagline + 1) % taglines.length;
        }
      } else {
        setCurrentText(current.substring(0, currentChar + 1));
        currentChar++;
        
        if (currentChar === current.length) {
          setTimeout(() => { isDeleting = true; }, 2000);
        }
      }
    };

    const interval = setInterval(typeEffect, 100);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // Create a dummy PDF download link
    const link = document.createElement('a');
    link.href = '../../../myResume.pdf'; 
    link.download = 'Winfred_Resume.pdf';
    link.click();
  };

  const whatsappUrl = "https://wa.me/+254791995578";

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      {/* Background with photo overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }} > 
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via--500 to-primary-900 opacity-80 dark:from-primary-900 dark:via-gray-900 dark:to-primary-900" />
        {/* Profile photo placeholder - replace with actual photo */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
          <div className="w-full h-full bg-white/10 backdrop-blur-sm" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-white/80 text-lg mb-4">
              {greeting}, I'm
            </p>
            
            <h1 className="text-white font-handwriting text-6xl md:text-8xl mb-6 leading-tight">
              Winfred Nkatha ..
            </h1>
            
            <h2 className="text-white/90 text-2xl md:text-3xl font-light mb-8">
              .. a Frontend Developer
            </h2>
            
            <div className="h-16 mb-8">
              <p className="text-white/70 text-lg">
                {currentText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            {/* Stats */}
            <div ref={experienceCounter.ref} className="grid grid-cols-3 gap-8 mb-12 max-w-md">
              <div className="text-center">
                <div className="text-white text-3xl font-bold">
                  {experienceCounter.count}+
                </div>
                <div className="text-white/60 text-sm">Years Experience</div>
              </div>
              <div ref={projectsCounter.ref} className="text-center">
                <div className="text-white text-3xl font-bold">
                  {projectsCounter.count}+
                </div>
                <div className="text-white/60 text-sm">Projects</div>
              </div>
              <div ref={clientsCounter.ref} className="text-center">
                <div className="text-white text-3xl font-bold">
                  {clientsCounter.count}+
                </div>
                <div className="text-white/60 text-sm">Happy Clients</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-primary-500 text-white rounded-full font-semibold hover:bg-purple-900 transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Hire Me</span>
                <ArrowDownIcon className="w-4 h-4" />
              </motion.button>

              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-primary-500 text-white rounded-full font-semibold hover:bg-purple-900 transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChatBubbleLeftRightIcon className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </motion.a>

              <motion.button
                onClick={downloadResume}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-primary-500 text-white rounded-full font-semibold hover:bg-purple-900 transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <DocumentArrowDownIcon className="w-4 h-4" />
                <span>Download Resume</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDownIcon className="w-6 h-6 text-white/60" />
      </motion.div>
    </section>
  );
};

export default Hero;