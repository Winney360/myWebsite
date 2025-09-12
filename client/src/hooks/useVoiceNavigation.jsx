import { useEffect, useRef, useState } from 'react';

export function useVoiceNavigation() {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      setIsSupported(true);
      
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        handleVoiceCommand(transcript);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };
    }
  }, []);

  const handleVoiceCommand = (command) => {
    const commands = {
      'go to about': 'about',
      'show about': 'about',
      'about me': 'about',
      'go to projects': 'projects',
      'show projects': 'projects',
      'my projects': 'projects',
      'go to contact': 'contact',
      'contact me': 'contact',
      'contact section': 'contact',
      'go to top': 'hero',
      'scroll to top': 'hero',
      'go home': 'hero',
      'timeline': 'timeline',
      'career': 'timeline',
      'experience': 'timeline'
    };

    const sectionId = commands[command];
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const startListening = () => {
    if (recognitionRef.current && isSupported) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  return { isListening, isSupported, startListening, stopListening };
}