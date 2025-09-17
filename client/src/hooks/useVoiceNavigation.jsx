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
      
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
  let transcript = "";
  
  // collect everything from the resultIndex forward
  for (let i = event.resultIndex; i < event.results.length; i++) {
    transcript += event.results[i][0].transcript;
  }

  transcript = transcript.toLowerCase().trim();

  // only trigger navigation when recognition decides it's "final"
  if (event.results[event.results.length - 1].isFinal) {
    handleVoiceCommand(transcript);
  }
};


      recognitionRef.current.onend = () => {
  if (isListening) {
    recognitionRef.current.start(); // keep it alive
  } else {
    setIsListening(false);
  }
};

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };
    }
  }, []);

  const handleVoiceCommand = (command) => {
  const commands = {
    about: ["go to about", "show about", "about me"],
    projects: ["go to projects", "show projects", "my projects"],
    contact: ["go to contact", "contact me", "contact section"],
    hero: ["go to top", "scroll to top", "go home"],
    timeline: ["timeline", "career", "experience"],
  };

  for (const [sectionId, keywords] of Object.entries(commands)) {
    if (keywords.some((phrase) => command.includes(phrase))) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      break;
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