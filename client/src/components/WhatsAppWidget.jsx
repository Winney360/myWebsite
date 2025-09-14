import React from 'react';
import { motion } from 'framer-motion';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const WhatsAppWidget = () => {
  const phoneNumber = "+254791995578";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-40 p-4 rounded-full bg-green-400 hover:bg-green-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
    >
      <ChatBubbleLeftRightIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
      
      {/* Notification dot */}
      <motion.div
        className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full"
        animate={{ scale: [1, 0.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
    </motion.a>
  );
};

export default WhatsAppWidget;