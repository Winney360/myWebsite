import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { 
  EnvelopeIcon, 
  ClipboardDocumentIcon,
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon 
} from '@heroicons/react/24/outline';
import { 
  Github, 
  Linkedin, 
  Instagram,
  Send
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const result = await emailjs.send(
      'service_yspoh4q',      // 🔹 replace with your EmailJS service ID
      'template_x4b2hgp',     // 🔹 replace with your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString(),
      },
      '5myqG4PIvumn0Mor6'       // 🔹 replace with your EmailJS public key
    );

    if (result.status === 200) {
      toast.success(`Thanks ${formData.name}! Your message has been sent.`);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  } catch (error) {
    console.error(error);
    toast.error('Failed to send message. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};


  const copyEmail = () => {
    const email = 'nkathawinnie94@gmail.com';
    navigator.clipboard.writeText(email);
    toast.success('Email copied to clipboard!');
  };
  
  const API_BASE = import.meta.env.VITE_API_URL;
  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const userMessage = chatMessage;
    setChatMessage('');
    setChatHistory(prev => [...prev, { type: 'user', message: userMessage }]);

    try {
      const response = await fetch(`${API_BASE}/api/chatbot`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const result = await response.json();
      
      if (result.success) {
        setChatHistory(prev => [...prev, { type: 'bot', message: result.response }]);
      } else {
        setChatHistory(prev => [...prev, { type: 'bot', message: 'Sorry, I encountered an error. Please try again.' }]);
      }
    } catch (error) {
      setChatHistory(prev => [...prev, { type: 'bot', message: 'Sorry, I\'m having trouble connecting. Please try again later.' }]);
    }
  };

  const whatsappUrl = "https://wa.me/+1234567890";

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/Winney360', color: 'hover:text-gray-600' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/winfred-nkatha-858023261', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/weeh_ni.e?igsh=cW02eHU5MGJzcWw5', color: 'hover:text-purple-600' },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-blue-200 dark:from-gray-800 dark:to-gray-900">
      <Toaster position="top-right" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Have a project in mind? I'd love to hear about it!
          </p>
        </motion.div>

        <div ref={ref} className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 ">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="bg-violet-300 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-violet-100 dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-violet-100 dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-violet-100 dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-violet-100 dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or what you'd like to discuss..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                ) : (
                  <>
                    <PaperAirplaneIcon className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Chatbot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="bg-violet-300 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h3>

              <div className="space-y-4 ">
                <div className="flex items-center space-x-4 rounded-lg bg-red-50 dark:bg-gray-700">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <EnvelopeIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-white">Email</p>
                    <p className="text-gray-600 dark:text-gray-400">nkathawinnie94@gmail.com</p>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                    title="Copy email"
                  >
                    <ClipboardDocumentIcon className="w-4 h-5" />
                  </button>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-1 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-all duration-300"
                >
                  <div className="p-1 bg-green-400 rounded-lg">
                    <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-white">WhatsApp</p>
                    <p className="text-gray-600 dark:text-gray-400">Quick response guaranteed</p>
                  </div>
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-violet-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Mini Chatbot */}
            <div className="bg-violet-300 dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                <span>💬</span>
                <span>Quick Chat</span>
              </h4>

              <div className="space-y-4">
                {chatHistory.length > 0 && (
                  <div className="max-h-40 overflow-y-auto space-y-2 p-3 bg-violet-100 dark:bg-gray-700 rounded-lg">
                    {chatHistory.map((chat, index) => (
                      <div
                        key={index}
                        className={`text-sm ${
                          chat.type === 'user'
                            ? 'text-right text-primary-600 dark:text-primary-400'
                            : 'text-left text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        <span className="font-medium">
                          {chat.type === 'user' ? 'You: ' : '🤖 '}
                        </span>
                        {chat.message}
                      </div>
                    ))}
                  </div>
                )}

                <form onSubmit={handleChatSubmit} className="flex space-x-2">
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder="Ask me anything..."
                    className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-violet-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                  <button
                    type="submit"
                    className="p-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>

                {chatHistory.length === 0 && (
                  <div className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
                    Ask me about my skills, experience, or projects! 🚀
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;