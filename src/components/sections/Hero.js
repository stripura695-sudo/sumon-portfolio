'use client';

import Image from 'next/image';
import { Download, Mail, ArrowDown } from 'lucide-react';
import Button from '@/components/ui/Button';
import { SITE_CONFIG, RESUME_URL } from '@/data/constants';
import { scrollToSection } from '@/lib/utils';

/**
 * Hero Section - Landing section with introduction and CTA
 */
export default function Hero() {
  const handleDownloadResume = () => {
    window.open(RESUME_URL, '_blank');
  };

  const handleContactClick = () => {
    scrollToSection('contact');
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-accent-primary text-lg font-medium">
                Hello, I&apos;m
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                {SITE_CONFIG.name}
              </h1>
              <h2 className="text-3xl md:text-4xl text-foreground-secondary font-semibold">
                {SITE_CONFIG.title}
              </h2>
            </div>

            <p className="text-lg text-foreground-secondary max-w-xl leading-relaxed">
              {SITE_CONFIG.description} I build responsive, accessible, and
              user-friendly applications that solve real-world problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                onClick={handleDownloadResume}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleContactClick}
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background-secondary hover:bg-accent-primary rounded-lg transition-all duration-200 hover:scale-110 border border-border-primary"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background-secondary hover:bg-accent-primary rounded-lg transition-all duration-200 hover:scale-110 border border-border-primary"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-accent-primary rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-accent-primary shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt={SITE_CONFIG.name}
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    // Fallback to placeholder if image not found
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%238b5cf6" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="120" fill="white"%3EYN%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-foreground-secondary hover:text-accent-primary transition-colors duration-200"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
