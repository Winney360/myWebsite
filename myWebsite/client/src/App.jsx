import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import ParticleBackground from './components/ParticleBackground.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import BackToTop from './components/BackToTop.jsx';
import VoiceControl from './components/VoiceControl.jsx';
import WhatsAppWidget from './components/WhatsAppWidget.jsx';
import OfflineIndicator from './components/OfflineIndicator.jsx';

// Sections
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import Timeline from './components/sections/Timeline.jsx';
import Projects from './components/sections/Projects.jsx';
import Contact from './components/sections/Contact.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden">
        <AnimatePresence>
          {isLoading && <LoadingScreen />}
        </AnimatePresence>

        <AnimatePresence>
          {!isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Global Components */}
              <CustomCursor />
              <ParticleBackground />
              <OfflineIndicator />
              <ThemeToggle />
              <BackToTop />
              <VoiceControl />
              <WhatsAppWidget />

              {/* Main Content */}
              <main className="relative">
                <Hero />
                <About />
                <Timeline />
                <Projects />
                <Contact />
              </main>

              {/* Footer */}
              <footer className="bg-gray-900 dark:bg-black text-white py-8">
                <div className="container mx-auto px-6 text-center">
                  <p className="text-gray-400">
                    © 2024 Winnie. Made with 💜 and lots of ☕
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    Built with React, Node.js, and modern web technologies
                  </p>
                </div>
              </footer>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;