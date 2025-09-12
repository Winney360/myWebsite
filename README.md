# 🚀 Full-Stack Developer Portfolio

A modern, interactive personal portfolio website built with React and Node.js, featuring stunning animations, particle effects, and comprehensive functionality.

## ✨ Features

### 🎨 Design & UX
- **Modern Design**: Clean, professional aesthetic with purple/pink gradient theme
- **Dark/Light/Easter Modes**: Three beautiful theme options
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Accessibility**: WCAG compliant with voice navigation and high-contrast support
- **Custom Cursor**: Interactive cursor with particle trails
- **Floating Particles**: Dynamic background animations
- **Smooth Animations**: Powered by Framer Motion

### 🛠 Interactive Features
- **Voice Navigation**: Say "go to projects" to navigate sections
- **Time-based Greetings**: Dynamic greeting based on current time
- **Animated Counters**: Stats that count up on scroll
- **Typing Animation**: Rotating taglines in hero section
- **WhatsApp Integration**: Floating chat bubble and direct messaging
- **Mini Chatbot**: AI-powered assistant for quick Q&A
- **Project Lightbox**: Detailed project views with 3D effects
- **Skills Heatmap**: Animated skill progression bars

### 🔧 Technical Stack
- **Frontend**: React 18, TypeScript, Vite, TailwindCSS
- **Animations**: Framer Motion, React Intersection Observer
- **Backend**: Node.js, Express
- **Communication**: Nodemailer for contact forms, REST API
- **Icons**: Heroicons, Lucide React
- **Fonts**: Inter (main), Kalam (handwriting)

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- Gmail account for email functionality (optional)

### Installation

1. **Clone and Setup**
```bash
git clone <repository-url>
cd portfolio-fullstack
npm install
```

2. **Environment Configuration**
```bash
# Copy environment template
cp server/.env.example server/.env

# Edit server/.env with your credentials
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
RECIPIENT_EMAIL=your-email@gmail.com
```

3. **Development Server**
```bash
npm run dev
```

This runs both client (port 3000) and server (port 5000) concurrently.

## 📁 Project Structure

```
portfolio-fullstack/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── sections/   # Page sections
│   │   │   └── ...
│   │   ├── hooks/          # Custom React hooks
│   │   ├── context/        # React contexts
│   │   ├── utils/          # Utility functions
│   │   └── ...
│   └── ...
├── server/                 # Express backend
│   ├── routes/             # API routes
│   │   ├── contact.js      # Contact form handling
│   │   └── chatbot.js      # Chatbot responses
│   ├── middleware/         # Express middleware
│   └── server.js           # Main server file
└── ...
```

## 🎨 Customization

### Personal Information
Update the following files with your information:

1. **Hero Section** (`client/src/components/sections/Hero.tsx`)
   - Change name, title, and taglines
   - Update phone number for WhatsApp integration
   - Add your profile photo

2. **About Section** (`client/src/components/sections/About.tsx`)
   - Update bio and skills
   - Add your professional photo
   - Customize fun facts

3. **Projects Section** (`client/src/components/sections/Projects.tsx`)
   - Add your project data
   - Update GitHub and live demo links
   - Replace project images

4. **Contact Information** (`client/src/components/sections/Contact.tsx`)
   - Update email, social links, and WhatsApp number

### Styling & Themes
- **Colors**: Modify `client/tailwind.config.js`
- **Fonts**: Update Google Fonts imports in `client/index.html`
- **Custom CSS**: Edit `client/src/index.css`

## 🔧 API Endpoints

### Contact Form
```
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hello, I'd like to discuss a project..."
}
```

### Chatbot
```
POST /api/chatbot
Content-Type: application/json

{
  "message": "What are your skills?"
}
```

## 📧 Email Setup

To enable contact form functionality:

1. **Gmail App Password**:
   - Enable 2-factor authentication on your Gmail
   - Generate an app-specific password
   - Use this password in your `.env` file

2. **Alternative Email Services**:
   - Update the nodemailer configuration in `server/routes/contact.js`
   - Supported: Outlook, Yahoo, custom SMTP

## 🚀 Deployment

### Client (Frontend)
The client can be deployed to any static hosting service:

**Vercel** (Recommended):
```bash
cd client
npm run build
# Deploy the 'dist' folder to Vercel
```

**Netlify**:
```bash
cd client
npm run build
# Deploy the 'dist' folder to Netlify
```

### Server (Backend)
Deploy the server to platforms like:

**Heroku**:
```bash
# In the server directory
echo "web: node server.js" > Procfile
git add .
git commit -m "Add Procfile"
heroku create your-portfolio-api
git push heroku main
```

**Railway/Render**: Follow their Node.js deployment guides

### Environment Variables
Set the following on your hosting platform:
- `EMAIL_USER`
- `EMAIL_PASS`
- `RECIPIENT_EMAIL`
- `NODE_ENV=production`

## 🔄 Updates & Maintenance

### Adding New Sections
1. Create component in `client/src/components/sections/`
2. Import and add to `App.tsx`
3. Update navigation and voice commands

### Extending the Chatbot
- Add more responses in `server/routes/chatbot.js`
- Implement external AI service integration
- Add conversation memory/context

### Performance Optimization
- Images: Use WebP format and lazy loading
- Code splitting: Implement React.lazy() for sections
- CDN: Host static assets on a CDN

## 🐛 Troubleshooting

**Common Issues**:

1. **Email not sending**:
   - Verify Gmail app password
   - Check firewall/antivirus blocking SMTP
   - Try alternative email service

2. **Animations not working**:
   - Check `prefers-reduced-motion` setting
   - Verify Framer Motion installation
   - Update browser to latest version

3. **Voice navigation not working**:
   - Ensure HTTPS (required for speech recognition)
   - Check browser permissions
   - Test in Chrome/Edge (best support)

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 💌 Contact

Feel free to reach out if you have questions or need help customizing this portfolio template!

---

**Made with 💜 and lots of ☕**