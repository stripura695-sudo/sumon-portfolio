// Projects portfolio data

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.",
    longDescription: "Built with Next.js, Node.js, and MongoDB. Features include user authentication, product search and filtering, shopping cart management, and secure payment processing.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    image: "/projects/ecommerce.jpg", // Add your image to public/projects/
    github: "https://github.com/yourusername/ecommerce-platform",
    demo: "https://ecommerce-demo.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    longDescription: "Real-time task tracking application built with React and Firebase. Supports team collaboration, deadline tracking, and notification system.",
    technologies: ["React", "Firebase", "Material-UI", "Redux"],
    image: "/projects/taskapp.jpg",
    github: "https://github.com/yourusername/task-manager",
    demo: "https://taskmanager-demo.vercel.app",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with location-based forecasts and interactive charts.",
    longDescription: "Weather application using OpenWeather API with 7-day forecasts, location search, and data visualization using Chart.js.",
    technologies: ["JavaScript", "React", "Chart.js", "API Integration"],
    image: "/projects/weather.jpg",
    github: "https://github.com/yourusername/weather-dashboard",
    demo: "https://weather-demo.vercel.app",
    featured: false,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website with dark mode and smooth animations.",
    longDescription: "Personal portfolio built with Next.js 16 and Tailwind CSS v4, featuring smooth animations, dark/light mode, and optimized performance.",
    technologies: ["Next.js", "Tailwind CSS", "Lucide React", "Vercel"],
    image: "/projects/portfolio.jpg",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.vercel.app",
    featured: false,
  },
];

export const PROJECT_CATEGORIES = [
  "All",
  "Web Development",
  "Mobile",
  "API",
  "Data Science",
];
