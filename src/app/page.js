'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Experience from '@/components/sections/Experience';
import Research from '@/components/sections/Research';
import Contact from '@/components/sections/Contact';

/**
 * Home Page - Premium Developer Portfolio
 * Integrates all portfolio sections
 */
export default function Home() {
  return (
    <>
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Research />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}
