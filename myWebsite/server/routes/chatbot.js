import express from 'express';

const router = express.Router();

// Simple chatbot responses
const responses = {
  greeting: [
    "Hello! I'm Winnie's AI assistant. How can I help you today?",
    "Hi there! I'm here to help you learn more about Winnie.",
    "Hey! What would you like to know about Winnie's work?"
  ],
  skills: [
    "Winnie is skilled in React, Node.js, TypeScript, Python, and cloud technologies. She loves creating beautiful, functional web applications!",
    "Her tech stack includes modern frontend frameworks, backend development, database management, and DevOps practices."
  ],
  experience: [
    "Winnie has several years of experience in full-stack development, working on projects ranging from e-commerce platforms to data visualization tools.",
    "She's worked with startups and established companies, bringing creative solutions to complex problems."
  ],
  contact: [
    "You can reach Winnie through the contact form, WhatsApp, or connect on LinkedIn and GitHub!",
    "The best way to contact her is through the form below or via WhatsApp for quick questions."
  ],
  projects: [
    "Winnie has worked on various exciting projects including web applications, mobile apps, and data analysis tools. Check out her portfolio section!",
    "Her recent projects showcase full-stack development, UI/UX design, and innovative problem-solving approaches."
  ],
  default: [
    "That's an interesting question! Feel free to use the contact form for specific inquiries.",
    "I'm not sure about that, but Winnie would love to discuss it with you personally!",
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