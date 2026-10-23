# Premium Developer Portfolio

A modern, responsive portfolio website built with Next.js 16, Tailwind CSS v4, and Lucide React icons.

![Portfolio Preview](https://via.placeholder.com/1200x600/8b5cf6/ffffff?text=Portfolio+Preview)

## ✨ Features

- 🎨 Premium dark theme with purple accents (#8B5CF6)
- 🌓 Dark/Light mode toggle with persistent preference
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Optimized with Next.js 16 App Router and Turbopack
- 🎭 Smooth animations and hover effects
- ♿ Accessible (keyboard navigation, ARIA labels)
- 🚀 Fast performance and SEO optimized
- 📧 Contact form with validation

## 🛠️ Tech Stack

- **Framework:** Next.js 16.4.2
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Fonts:** Geist Sans & Geist Mono (Google Fonts)
- **Language:** JavaScript (JSX)
- **Deployment:** Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sumon-portfolio.git
cd sumon-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization Guide

### 1. Personal Information

Update your details in `src/data/constants.js`:

```javascript
export const SITE_CONFIG = {
  name: "Your Name",
  title: "Full Stack Developer",
  description: "Your professional description...",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
};
```

### 2. Skills

Edit `src/data/skills.js` to add/modify your skills:

```javascript
export const SKILLS_DATA = {
  "Languages": [
    { name: "JavaScript", level: 90 },
    // Add more skills
  ],
  // Add more categories
};
```

### 3. Projects

Update `src/data/projects.js` with your projects:

```javascript
export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description...",
    technologies: ["React", "Node.js"],
    github: "https://github.com/yourusername/project",
    demo: "https://project-demo.com",
    featured: true,
  },
  // Add more projects
];
```

### 4. Education & Experience

- **Education:** Edit `src/components/sections/Education.js`
- **Experience:** Edit `src/components/sections/Experience.js`
- **Research:** Edit `src/components/sections/Research.js` (or remove if not needed)

### 5. Profile Image

Add your profile image:
1. Save your image as `public/profile.jpg` (or .png)
2. Recommended size: 400x400px or larger (square)

### 6. Resume/CV

Replace `public/resume.pdf` with your actual resume.

### 7. Project Images

Add project images to `public/projects/`:
- `public/projects/ecommerce.jpg`
- `public/projects/taskapp.jpg`
- etc.

### 8. Navbar Logo

Update the logo text in `src/components/layout/Navbar.js`:

```javascript
<a href="#hero">
  {"<YourName />"}
</a>
```

### 9. Contact Form

The contact form currently simulates submission. To make it functional:

**Option 1: Email Service (Recommended)**
- Use [Formspree](https://formspree.io/)
- Use [Web3Forms](https://web3forms.com/)
- Use [EmailJS](https://www.emailjs.com/)

**Option 2: API Route**
Create `src/app/api/contact/route.js` and integrate with your email service.

### 10. Colors (Optional)

To change the accent color, edit `src/app/globals.css`:

```css
:root {
  --accent-primary: #8b5cf6; /* Change to your color */
  --accent-primary-hover: #7c3aed;
  --accent-primary-light: #a78bfa;
}
```

## 📂 Project Structure

```
sumon-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout with metadata
│   │   ├── page.js            # Homepage (all sections)
│   │   └── globals.css        # Design system & styles
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.js      # Navigation bar
│   │   │   └── Footer.js      # Footer
│   │   ├── sections/
│   │   │   ├── Hero.js        # Hero section
│   │   │   ├── About.js       # About section
│   │   │   ├── Skills.js      # Skills section
│   │   │   ├── Projects.js    # Projects section
│   │   │   ├── Education.js   # Education section
│   │   │   ├── Experience.js  # Experience section
│   │   │   ├── Research.js    # Research section
│   │   │   └── Contact.js     # Contact section
│   │   └── ui/
│   │       ├── Button.js      # Reusable button
│   │       ├── Card.js        # Reusable card
│   │       ├── SectionHeading.js
│   │       └── ThemeToggle.js # Dark/Light toggle
│   ├── data/
│   │   ├── constants.js       # Site configuration
│   │   ├── projects.js        # Projects data
│   │   └── skills.js          # Skills data
│   └── lib/
│       └── utils.js           # Utility functions
├── public/
│   ├── profile.jpg            # Your profile image
│   ├── resume.pdf             # Your CV/Resume
│   └── projects/              # Project images
└── [config files]
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. Go to [Vercel](https://vercel.com/new)
3. Import your GitHub repository
4. Configure project:
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Click "Deploy"

Your portfolio will be live at `https://your-project.vercel.app`

### Custom Domain

1. Go to your project in Vercel
2. Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎯 Performance

- ⚡ Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- 📦 Optimized bundle size with Turbopack
- 🖼️ Next.js Image optimization
- 🎨 CSS-in-JS with Tailwind CSS v4

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

---

**Built with ❤️ using Next.js 16 and Tailwind CSS v4**
