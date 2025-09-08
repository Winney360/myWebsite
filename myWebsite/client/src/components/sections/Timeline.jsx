import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Timeline = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineData = [
    {
      year: '2024',
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Inc.',
      description: 'Leading development of cloud-native applications, mentoring junior developers, and architecting scalable solutions.',
      skills: ['React', 'Node.js', 'AWS', 'JavaScript']
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      description: 'Built and maintained web applications serving 100k+ users, implemented CI/CD pipelines, and improved application performance by 40%.',
      skills: ['Vue.js', 'Python', 'PostgreSQL', 'Docker']
    },
    {
      year: '2020',
      title: 'Frontend Developer',
      company: 'Digital Agency',
      description: 'Created responsive, accessible web interfaces for diverse clients, collaborated with UX designers, and implemented modern development workflows.',
      skills: ['JavaScript', 'CSS3', 'React', 'Figma']
    },
    {
      year: '2019',
      title: 'Started Journey',
      company: 'Self-taught',
      description: 'Began learning web development through online courses and building personal projects. Fell in love with the endless possibilities of code.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Git']
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  };

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-pink-600 bg-clip-text text-transparent">
            Career Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            My path through the world of technology
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto relative"
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-primary-500 to-pink-500" />

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-primary-500 to-pink-500 rounded-full border-4 border-white dark:border-gray-900 z-10">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-primary-400 to-pink-400 animate-pulse-glow" />
              </div>

              {/* Content */}
              <div className={`flex-1 ml-16 md:ml-0 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <motion.div
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-block px-3 py-1 text-sm font-semibold bg-gradient-to-r from-primary-500 to-pink-500 text-white rounded-full">
                      {item.year}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">
                    {item.company}
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;