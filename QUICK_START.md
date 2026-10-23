# ⚡ Quick Start Guide

Get your portfolio up and running in 5 steps!

## Step 1: Install & Run (2 minutes)

```bash
# Already done - dependencies installed
npm run dev
```

Open http://localhost:3000 in your browser.

---

## Step 2: Update Your Info (10 minutes)

### File: `src/data/constants.js`

```javascript
export const SITE_CONFIG = {
  name: "John Doe",                      // ← Change this
  title: "Full Stack Developer",         // ← Change this
  description: "Your bio...",            // ← Change this
  email: "john@example.com",             // ← Change this
  github: "https://github.com/johndoe",  // ← Change this
  linkedin: "https://linkedin.com/in/johndoe", // ← Change this
  twitter: "https://twitter.com/johndoe",      // ← Change this
};
```

---

## Step 3: Add Your Skills (5 minutes)

### File: `src/data/skills.js`

Replace the example skills with your actual skills:

```javascript
export const SKILLS_DATA = {
  "Languages": [
    { name: "JavaScript", level: 90 },  // Your skill level 0-100
    { name: "Python", level: 85 },
    // Add your languages
  ],
  "Frontend": [
    { name: "React", level: 90 },
    // Add your frontend skills
  ],
  // Add more categories as needed
};
```

---

## Step 4: Add Your Projects (15 minutes)

### File: `src/data/projects.js`

Replace example projects with your actual projects:

```javascript
export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Brief description of your project",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/projects/project1.jpg",    // Add image to public/projects/
    github: "https://github.com/you/project",
    demo: "https://yourproject.com",
    featured: true,  // Show in featured filter
  },
  // Add more projects
];
```

**Add project images:**
1. Create folder: `public/projects/`
2. Add images: `project1.jpg`, `project2.jpg`, etc.

---

## Step 5: Add Profile Image & Resume (5 minutes)

1. **Profile Image:**
   - Save your photo as `public/profile.jpg`
   - Recommended size: 400x400px (square)

2. **Resume:**
   - Replace `public/resume.pdf` with your actual resume

---

## 🎉 Done! Your Portfolio is Ready

Your portfolio now has:
- ✅ Your personal information
- ✅ Your skills
- ✅ Your projects
- ✅ Your profile image
- ✅ Your resume

---

## What's Next?

### Optional Customizations:

1. **Update Education** (`src/components/sections/Education.js`)
   - Replace example degrees with your education

2. **Update Experience** (`src/components/sections/Experience.js`)
   - Replace example jobs with your work history

3. **Remove Research** (if not applicable)
   - Edit `src/app/page.js`
   - Delete the line: `<Research />`
   - Delete import: `import Research from '@/components/sections/Research';`

4. **Setup Contact Form**
   - Sign up at [web3forms.com](https://web3forms.com)
   - Follow instructions in `CUSTOMIZATION_GUIDE.md` section 10

---

## Deploy to Vercel (15 minutes)

### 1. Push to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "My portfolio website"

# Create repository on GitHub.com, then:
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"
5. Wait 2-3 minutes
6. Your site is live! 🎉

Your URL will be: `https://your-project.vercel.app`

### 3. Add Custom Domain (Optional)

1. Buy a domain (e.g., namecheap.com, godaddy.com)
2. In Vercel: Settings → Domains
3. Add your domain
4. Update DNS records as instructed

---

## Testing Checklist

Before deploying, test:

- [ ] All sections display correctly
- [ ] Profile image loads
- [ ] Resume downloads when clicking button
- [ ] Project links work (GitHub & demos)
- [ ] Contact form validates inputs
- [ ] Dark/Light mode toggle works
- [ ] Mobile menu opens/closes
- [ ] Smooth scrolling works
- [ ] All your information is correct
- [ ] No placeholder text remains

---

## Need More Help?

- **Detailed Guide:** See `CUSTOMIZATION_GUIDE.md`
- **Full Documentation:** See `README.md`
- **Implementation Details:** See `IMPLEMENTATION_SUMMARY.md`

---

## Keyboard Shortcuts (While Developing)

- `Ctrl + C` - Stop development server
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Check code quality

---

## Common Issues

### "Image not loading"
- Check file path is correct
- Ensure image is in `public/` folder
- Try refreshing browser

### "Site looks broken"
- Clear browser cache (Ctrl + Shift + R)
- Check browser console for errors (F12)

### "Build fails"
- Run `npm install` again
- Check for syntax errors in your data files
- Read the error message carefully

---

## Tips

1. **Save Often:** Ctrl + S to save files
2. **Hot Reload:** Changes appear automatically in browser
3. **Use Placeholders:** If you don't have project images yet, they'll show gradient placeholders
4. **Mobile First:** Test on your phone while developing

---

## Final Checklist

Before considering it complete:

- [ ] Updated SITE_CONFIG with your info
- [ ] Added your skills
- [ ] Added your projects
- [ ] Added profile image
- [ ] Added resume
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] All links work
- [ ] No typos in your content
- [ ] Pushed to GitHub
- [ ] Deployed on Vercel

---

**Estimated Total Time:** 45-60 minutes
**Result:** Professional portfolio ready for job applications!

🚀 **You're ready to impress recruiters!**
