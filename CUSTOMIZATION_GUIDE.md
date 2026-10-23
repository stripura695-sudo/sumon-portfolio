# 🎨 Portfolio Customization Guide

A step-by-step guide to personalizing your portfolio website.

## 📋 Quick Checklist

- [ ] Update personal information in `src/data/constants.js`
- [ ] Add your profile image (`public/profile.jpg`)
- [ ] Upload your resume (`public/resume.pdf`)
- [ ] Customize skills in `src/data/skills.js`
- [ ] Add your projects in `src/data/projects.js`
- [ ] Update education details in `src/components/sections/Education.js`
- [ ] Modify experience in `src/components/sections/Experience.js`
- [ ] Update/remove research section in `src/components/sections/Research.js`
- [ ] Customize navbar logo in `src/components/layout/Navbar.js`
- [ ] Test contact form and configure email service
- [ ] Update metadata in `src/app/layout.js`

## 🔧 Detailed Instructions

### 1. Personal Information

**File:** `src/data/constants.js`

```javascript
export const SITE_CONFIG = {
  name: "Your Full Name",              // Used in Hero, Footer, metadata
  title: "Your Professional Title",    // E.g., "Full Stack Developer"
  description: "Your bio/tagline",     // Keep it concise (1-2 lines)
  url: "https://yourportfolio.com",   // Your deployed URL
  email: "your.email@example.com",    // Your contact email
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
};
```

### 2. Profile Image

1. **Prepare your image:**
   - Recommended size: 400x400px or larger
   - Format: JPG or PNG
   - Square aspect ratio works best
   - Professional headshot or professional photo

2. **Add to project:**
   - Save as `public/profile.jpg`
   - Or use `public/profile.png`

3. **If using PNG**, update `src/components/sections/Hero.js`:
   ```javascript
   <Image
     src="/profile.png"  // Change from .jpg to .png
     alt={SITE_CONFIG.name}
     ...
   />
   ```

### 3. Resume/CV

1. Export your resume as PDF
2. Save it as `public/resume.pdf`
3. **Important:** Keep filename as `resume.pdf` or update `RESUME_URL` in `src/data/constants.js`

### 4. Skills

**File:** `src/data/skills.js`

```javascript
export const SKILLS_DATA = {
  "Your Category 1": [
    { name: "Skill Name", level: 90 },  // level: 0-100
    { name: "Another Skill", level: 85 },
  ],
  "Your Category 2": [
    { name: "Skill Name", level: 80 },
  ],
  // Add as many categories as you need
};
```

**Tips:**
- Use 4-6 categories
- Each category should have 3-5 skills
- Be honest with skill levels
- Common categories: Languages, Frontend, Backend, Tools, Databases

### 5. Projects

**File:** `src/data/projects.js`

```javascript
export const PROJECTS_DATA = [
  {
    id: 1,                                    // Unique number
    title: "Project Name",
    description: "Brief description (1-2 sentences)",
    longDescription: "Optional detailed description",
    technologies: ["Tech1", "Tech2", "Tech3"],
    image: "/projects/project-name.jpg",     // Add image to public/projects/
    github: "https://github.com/you/repo",   // Or null if private
    demo: "https://project-demo.com",        // Or null if not deployed
    featured: true,                          // Show in "Featured" filter
  },
  // Add more projects...
];
```

**Adding Project Images:**
1. Create folder: `public/projects/`
2. Add images: `project1.jpg`, `project2.jpg`, etc.
3. Recommended size: 800x450px (16:9 ratio)
4. Update `image` property in projects data

### 6. Education

**File:** `src/components/sections/Education.js`

Find the `education` array and update:

```javascript
const education = [
  {
    degree: "Your Degree Name",
    school: "University/School Name",
    location: "City, State/Country",
    period: "Start Year - End Year",
    gpa: "Your GPA/Grade",
    achievements: [
      "Achievement 1",
      "Achievement 2",
      "Achievement 3",
    ],
  },
  // Add more education entries
];
```

**Certifications:**

```javascript
const certifications = [
  "Certification Name 1",
  "Certification Name 2",
  // Add your certifications
];
```

### 7. Experience

**File:** `src/components/sections/Experience.js`

Find the `experiences` array:

```javascript
const experiences = [
  {
    title: "Job Title",
    company: "Company Name",
    location: "City, State/Remote",
    period: "Month Year - Month Year",
    type: "Internship", // or "Full-time", "Part-time", "Volunteer"
    responsibilities: [
      "Responsibility 1",
      "Responsibility 2",
      "Responsibility 3",
    ],
    technologies: ["Tech1", "Tech2", "Tech3"],
  },
  // Add more experiences
];
```

**Experience Types:**
- `"Internship"` → Purple badge
- `"Volunteer"` → Green badge
- `"Part-time"` → Orange badge
- `"Full-time"` → Default badge

### 8. Research (Optional)

**File:** `src/components/sections/Research.js`

**If you don't have research publications:**

Remove from `src/app/page.js`:
```javascript
// Delete this line:
import Research from '@/components/sections/Research';

// And remove from the page:
<Research />
```

**If you have publications**, update the data in `Research.js`.

### 9. Navbar Logo

**File:** `src/components/layout/Navbar.js`

Find and customize:

```javascript
<a href="#hero">
  {"<YourName />"}  // Change this to your preferred logo text
</a>
```

**Alternative styles:**
- `"YN"` - Initials
- `"Your Name"` - Full name
- `"yourname.dev"` - Domain style
- Leave as is for developer aesthetic

### 10. Contact Form Email Integration

**Current State:** Form validates but doesn't send emails (simulation only).

**Option A: Web3Forms (Recommended - Free)**

1. Sign up at [web3forms.com](https://web3forms.com)
2. Get your access key
3. Update `src/components/sections/Contact.js`:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;
  
  setIsSubmitting(true);
  
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: 'YOUR_ACCESS_KEY_HERE',
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }),
    });
    
    if (response.ok) {
      setFormStatus({
        type: 'success',
        message: 'Thank you! I\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      throw new Error('Failed to send');
    }
  } catch (error) {
    setFormStatus({
      type: 'error',
      message: 'Something went wrong. Please email me directly.',
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

**Option B: Formspree**

1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get endpoint
3. Update form action or use their API

**Option C: EmailJS**

Follow [EmailJS documentation](https://www.emailjs.com/docs/)

### 11. SEO & Metadata

**File:** `src/app/layout.js`

```javascript
export const metadata = {
  title: "Your Name - Your Title",
  description: "Your professional description for search engines",
  keywords: ["Your", "Key", "Skills"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name - Your Title",
    description: "Your description",
    url: "https://yourportfolio.com",
    siteName: "Your Name Portfolio",
    images: [
      {
        url: "https://yourportfolio.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};
```

### 12. Favicon

1. Create your favicon using [favicon.io](https://favicon.io)
2. Replace `src/app/favicon.ico`
3. Recommended: 32x32px or 64x64px

### 13. Social Links

Update contact info in `src/components/sections/Contact.js`:

```javascript
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "your.email@example.com",
    link: `mailto:your.email@example.com`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Your City, State",
    link: null,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
];
```

### 14. Theme Colors (Advanced)

**File:** `src/app/globals.css`

To change from purple to another accent color:

```css
:root {
  --accent-primary: #8b5cf6;      /* Your primary color */
  --accent-primary-hover: #7c3aed; /* Darker shade */
  --accent-primary-light: #a78bfa; /* Lighter shade */
}
```

**Popular alternatives:**
- Blue: `#3b82f6`, `#2563eb`, `#60a5fa`
- Green: `#10b981`, `#059669`, `#34d399`
- Orange: `#f97316`, `#ea580c`, `#fb923c`
- Pink: `#ec4899`, `#db2777`, `#f472b6`

## ✅ Testing Checklist

After customization:

1. **Visual Check:**
   - [ ] All sections display correctly
   - [ ] Profile image loads
   - [ ] No placeholder text remains
   - [ ] All links work

2. **Functionality:**
   - [ ] Theme toggle works
   - [ ] Mobile menu opens/closes
   - [ ] Smooth scrolling works
   - [ ] Contact form validates
   - [ ] Resume downloads

3. **Responsive:**
   - [ ] Test on mobile (< 768px)
   - [ ] Test on tablet (768px - 1024px)
   - [ ] Test on desktop (> 1024px)

4. **Accessibility:**
   - [ ] Tab through navigation
   - [ ] Screen reader friendly
   - [ ] All images have alt text

## 🚀 Deploy

Once customized:

```bash
# Test the build
npm run build

# If successful, commit and push
git add .
git commit -m "Customize portfolio with personal information"
git push origin main

# Deploy to Vercel
vercel --prod
```

## 💡 Tips

1. **Keep it Updated:** Regularly add new projects and skills
2. **Quality over Quantity:** Feature your best 4-6 projects
3. **Be Authentic:** Use real information, don't exaggerate
4. **Test Thoroughly:** Check on multiple devices and browsers
5. **Get Feedback:** Ask friends/mentors to review

## 🆘 Need Help?

- Check README.md for technical details
- Review component files for inline comments
- Search Next.js documentation
- Open an issue on GitHub

---

Good luck with your portfolio! 🎉
