import React from 'react';
import { motion } from 'framer-motion';
import { MicrophoneIcon, StopIcon } from '@heroicons/react/24/outline';
import { useVoiceNavigation } from '../hooks/useVoiceNavigation.jsx';

const VoiceControl = () => {
  const { isListening, isSupported, startListening, stopListening } = useVoiceNavigation();

  if (!isSupported) return null;

  return (
    <motion.button
      onClick={isListening ? stopListening : startListening}
      className={`fixed bottom-24 right-8 z-40 p-4 rounded-full shadow-lg transition-all duration-300 ${
        isListening 
          ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
          : 'bg-gradient-to-r from-primary-500 to-pink-500 hover:shadow-xl'
      } text-white`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      title={isListening ? 'Stop listening' : 'Voice navigation (say "go to projects", etc.)'}
    >
      {isListening ? (
        <StopIcon className="w-5 h-5" />
      ) : (
        <MicrophoneIcon className="w-5 h-5" />
      )}
    </motion.button>
  );
};

export default VoiceControl;