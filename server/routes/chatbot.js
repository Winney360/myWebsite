import express from 'express';

const router = express.Router();

// Simple chatbot responses
const responses = {
  greeting: [
    "Hello! I'm Winfred's AI assistant. How can I help you today?",
    "Hi there! I'm here to help you learn more about Winfred.",
    "Hey! What would you like to know about Winfred's work?"
  ],
  skills: [
    "Winfred is skilled in JavaScript (ES6+),React.js (Frontend),Node.js & Express (Backend)MongoDB (Database) Python Java UI/UX Design. She loves creating beautiful, functional web applications!",
    "Her tech stack includes modern frontend frameworks, backend development, database management, and DevOps practices."
  ],
  experience: [
  "Currently building skills in full-stack development with a strong focus on frontend (React, TailwindCSS) and MERN stack.",
  "Worked on personal and academic projects, including AssignmentHub (a system to help teachers share assignments with students online) and an AI-Driven Job-Matching & Skills Development Platform.",
  "Actively learning through coursework in Mathematics and Computer Science at JKUAT and training with PLP (MERN & AI for Software Engineering)."
  ],
  contact: [
    "You can reach Winfred through the contact form, WhatsApp, or connect on LinkedIn and GitHub!",
    "The best way to contact her is through the form above or via WhatsApp for quick questions."
  ],
  projects: [
  "Worked on personal and academic projects, including AssignmentHub — a system that helps teachers assign work to students online using passcodes.",
  "Contributed to an AI-Driven Job-Matching & Skills Development Platform during training, gaining experience with frontend development, MERN stack, and UI/UX concepts."
  ],
  default: [
    "That's an interesting question! Feel free to use the contact form for specific inquiries.",
    "I'm not sure about that, but Winfred would love to discuss it with you personally!",
    "For detailed questions, I'd recommend reaching out through the contact form or WhatsApp."
  ]
};

function getRandomResponse(category) {
  const categoryResponses = responses[category] || responses.default;
  return categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
}

function categorizeMessage(message) {
  const lowerMsg = message.toLowerCase();
  
  if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
    return 'greeting';
  }
  if (lowerMsg.includes('skill') || lowerMsg.includes('technology') || lowerMsg.includes('tech stack')) {
    return 'skills';
  }
  if (lowerMsg.includes('experience') || lowerMsg.includes('work') || lowerMsg.includes('background')) {
    return 'experience';
  }
  if (lowerMsg.includes('contact') || lowerMsg.includes('reach') || lowerMsg.includes('email')) {
    return 'contact';
  }
  if (lowerMsg.includes('project') || lowerMsg.includes('portfolio') || lowerMsg.includes('work')) {
    return 'projects';
  }
  
  return 'default';
}

router.post('/', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || message.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Message is required'
      });
    }

    // Simulate thinking time
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));

    const category = categorizeMessage(message);
    const response = getRandomResponse(category);

    res.json({
      success: true,
      response,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Chatbot error:', error);
    res.status(500).json({
      success: false,
      message: 'Sorry, I encountered an error. Please try again.'
    });
  }
});

export default router;