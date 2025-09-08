import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'React/Next.js', level: 95 },
    { name: 'Node.js/Express', level: 90 },
    { name: 'JavaScript/ES6+', level: 88 },
    { name: 'Python/Django', level: 85 },
    { name: 'AWS/Cloud', level: 82 },
    { name: 'UI/UX Design', level: 78 },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary-600 to-pink-600 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo and Bio */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="relative">
                {/* Profile photo placeholder */}
                <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-pink-400 p-1">
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-4xl">👩‍💻</span>
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                >
                  ⚡
                </motion.div>
              </div>

              <div className="text-center md:text-left">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  I'm a passionate full-stack developer with a love for creating beautiful, 
                  functional digital experiences. With over 5 years in the industry, I've 
                  helped startups and established companies bring their visions to life 
                  through innovative web solutions.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or enjoying a good cup of coffee 
                  while sketching out my next big idea.
                </p>
              </div>
            </motion.div>

            {/* Skills Heatmap */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Skills & Expertise
              </h3>

              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary-500 to-pink-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Fun Facts */}
              <motion.div
                className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-pink-50 dark:from-primary-900/20 dark:to-pink-900/20 rounded-xl border border-primary-100 dark:border-primary-800"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                  🎯 Fun Facts
                </h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Coffee consumed: ∞ cups ☕</li>
                  <li>• Favorite debugging method: Rubber duck 🦆</li>
                  <li>• Can code in 7+ programming languages</li>
                  <li>• Enjoys pixel art in spare time 🎨</li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;