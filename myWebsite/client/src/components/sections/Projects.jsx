import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  EyeIcon, 
  CodeBracketIcon, 
  XMarkIcon,
  ArrowTopRightOnSquareIcon 
} from '@heroicons/react/24/outline';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with real-time inventory, payment processing, and admin dashboard. Features include user authentication, shopping cart, order tracking, and responsive design.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      githubUrl: 'https://github.com/winnie/ecommerce',
      liveUrl: 'https://ecommerce-demo.com',
      category: 'fullstack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, team collaboration features, drag-and-drop interface, and advanced filtering options.',
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg',
      technologies: ['Vue.js', 'Firebase', 'Vuetify', 'WebSocket'],
      githubUrl: 'https://github.com/winnie/task-manager',
      liveUrl: 'https://taskmanager-demo.com',
      category: 'web'
    },
    {
      id: 3,
      title: 'Weather Analytics Dashboard',
      description: 'Data visualization dashboard for weather patterns with interactive charts, historical data analysis, and location-based forecasting using machine learning.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      githubUrl: 'https://github.com/winnie/weather-dashboard',
      liveUrl: 'https://weather-analytics.com',
      category: 'fullstack'
    },
    {
      id: 4,
      title: 'Fitness Tracking Mobile App',
      description: 'Cross-platform mobile application for fitness tracking with workout plans, progress monitoring, social features, and wearable device integration.',
      image: 'https://images.pexels.com/photos/4162481/pexels-photo-4162481.jpeg',
      technologies: ['React Native', 'Firebase', 'Redux', 'HealthKit'],
      githubUrl: 'https://github.com/winnie/fitness-tracker',
      liveUrl: 'https://apps.apple.com/fitness-tracker',
      category: 'mobile'
    },
    {
      id: 5,
      title: 'AI Content Generator',
      description: 'AI-powered content creation platform with natural language processing, template system, SEO optimization, and collaborative editing features.',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
      technologies: ['Next.js', 'OpenAI API', 'Prisma', 'TailwindCSS'],
      githubUrl: 'https://github.com/winnie/ai-content',
      liveUrl: 'https://ai-content-gen.com',
      category: 'web'
    },
    {
      id: 6,
      title: 'Real Estate Platform',
      description: 'Comprehensive real estate platform with property listings, virtual tours, mortgage calculator, and agent management system.',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg',
      technologies: ['Angular', 'Node.js', 'MySQL', 'AWS', 'WebGL'],
      githubUrl: 'https://github.com/winnie/real-estate',
      liveUrl: 'https://realestate-platform.com',
      category: 'fullstack'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Explore my recent work and creative solutions
          </p>

          {/* Filter buttons */}
          <div className="flex justify-center space-x-4 mb-8">
            {['all', 'web', 'mobile', 'fullstack'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-primary-500 to-pink-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                whileHover={{ y: -5 }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex space-x-4">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="p-3 bg-white/90 text-primary-600 rounded-full hover:bg-white transition-all duration-300"
                      >
                        <EyeIcon className="w-5 h-5" />
                      </button>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/90 text-primary-600 rounded-full hover:bg-white transition-all duration-300"
                      >
                        <CodeBracketIcon className="w-5 h-5" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/90 text-primary-600 rounded-full hover:bg-white transition-all duration-300"
                      >
                        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-80">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-all duration-300"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedProject.title}
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300"
                  >
                    <CodeBracketIcon className="w-5 h-5" />
                    <span>View Code</span>
                  </a>
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;