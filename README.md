# 🚀 Professional Portfolio Website

**MODALLA PRANITH REDDY** - Full Stack Developer

A modern, responsive, and professional portfolio website showcasing my projects, skills, and experience as a Full-Stack Developer.

## ✨ Features

- **Modern Design**: Clean, professional UI with glassmorphism effects
- **Responsive**: Works seamlessly on mobile, tablet, and desktop
- **Dark/Light Mode**: Toggle between themes with preference storage
- **Blog Section**: Share your thoughts and insights
- **Contact Form**: Get in touch with integrated backend
- **Smooth Animations**: Scroll reveals, transitions, and interactive elements
- **Terminal Effect**: Eye-catching hero section with typewriter animation
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic structure
- **CSS3** - Modern styling with glassmorphism
- **JavaScript** - Vanilla JS for interactivity
- **Font Awesome** - Icon library

### Backend (Optional)
- **Node.js** - Runtime
- **Express** - Web framework
- **Nodemailer** - Email functionality

### Deployment
- **Vercel** - Hosting and deployment

## 📁 Project Structure

```
portfolio/
├── index.html           # Main HTML file
├── styles.css          # Styling and animations
├── script.js           # JavaScript functionality
├── server.js           # Node.js backend (optional)
├── package.json        # NPM dependencies
├── .env.example        # Environment variables template
├── vercel.json         # Vercel configuration
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Git** (for version control)
- **Vercel CLI** (for deployment)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Pranith-creater/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000 (Frontend)
   http://localhost:5000 (Backend API)
   ```

## 📝 Customization

### Update Your Information

Edit `index.html` to personalize:

```html
<!-- Update your name -->
<h1 class="hero-title">Your Name</h1>

<!-- Update your bio -->
<p class="hero-subtitle">Your description here...</p>

<!-- Update email in contact section -->
<a href="mailto:your-email@gmail.com">

<!-- Update social links in footer -->
<a href="https://github.com/your-username">
```

### Add Your Projects

Update the projects section with your work:

```html
<article class="project-card glass-card">
  <div class="project-info">
    <h3 class="project-title">Your Project</h3>
    <p class="project-desc">Description...</p>
    <div class="project-links">
      <a href="project-link">Live Demo</a>
      <a href="github-link">Source Code</a>
    </div>
  </div>
</article>
```

### Write Blog Posts

Add articles to the blog section with your insights and tutorials.

## 🔧 Backend Setup (Contact Form)

### Email Configuration

To enable the contact form, set up Nodemailer:

1. **Create Gmail App Password**
   - Go to Google Account settings
   - Enable 2-Factor Authentication
   - Generate App Password
   - Copy password to `.env`

2. **Update `.env`**
   ```
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   CONTACT_EMAIL=where-to-receive-messages@gmail.com
   ```

3. **Update `server.js`** with email logic:
   ```javascript
   const nodemailer = require('nodemailer');
   const transporter = nodemailer.createTransport({
       host: process.env.SMTP_HOST,
       port: process.env.SMTP_PORT,
       auth: {
           user: process.env.SMTP_USER,
           pass: process.env.SMTP_PASS
       }
   });
   ```

### Alternative: Use Formspree (No Backend)

If you don't want to manage a backend, use **Formspree**:

1. Go to https://formspree.io/
2. Create a new form
3. Replace form action in HTML:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Configure Environment Variables**
   - Go to Vercel Dashboard
   - Project Settings → Environment Variables
   - Add your `.env` variables

4. **Done!** Your portfolio is live!

### Deploy to Netlify

1. Connect GitHub to Netlify
2. Specify build command: `npm run build`
3. Publish directory: `.` (root)
4. Set environment variables
5. Deploy

### Deploy to GitHub Pages (Static Only)

1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. Select main branch as source
4. Your portfolio is live at `username.github.io/portfolio`

## 📊 Performance Optimization

- ✅ Optimized images and icons
- ✅ Minified CSS and JavaScript
- ✅ Lazy loading for blog section
- ✅ Smooth animations with RequestAnimationFrame
- ✅ Efficient scroll detection

## 🔒 Best Practices

- ✅ Semantic HTML
- ✅ Responsive design
- ✅ Accessibility features
- ✅ SEO optimization
- ✅ Security headers
- ✅ Environment variable security

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🎨 Customizing Themes

The portfolio uses CSS variables for easy customization:

```css
:root {
    /* Colors */
    --bg-primary: #0a0a0f;
    --accent-1: #6366f1; /* Indigo */
    --accent-2: #ec4899; /* Pink */
    --accent-3: #14b8a6; /* Teal */
    
    /* Fonts */
    --font-sans: 'Inter', system-ui, sans-serif;
    --font-display: 'Space Grotesk', system-ui, sans-serif;
}
```

## 📈 Next Steps

- [ ] Implement blog functionality with real posts
- [ ] Add project case studies
- [ ] Implement email notifications
- [ ] Add analytics
- [ ] Set up CI/CD pipeline
- [ ] Add testing (Jest)
- [ ] Implement dark/light mode persistence ✅
- [ ] Add social media integrations ✅
- [ ] Create resume/CV download ✓

## 🤝 Contributing

Feel free to fork and improve this portfolio template!

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 👤 About Me

I'm MODALLA PRANITH REDDY, a passionate B.Tech student and Full Stack Web Developer interested in:
- Building innovative web applications
- Cloud infrastructure and DevOps
- UI/UX design principles
- Modern JavaScript frameworks

## 📧 Contact

- **Email**: pranithmodalla@gmail.com
- **GitHub**: https://github.com/Pranith-creater
- **LinkedIn**: https://www.linkedin.com/in/pranith-modalla-771951325
- **Portfolio**: https://your-portfolio-url.com

---

**Last Updated**: May 13, 2026

**Status**: 🟢 Active & Maintained

Made with ❤️ by MODALLA PRANITH REDDY
