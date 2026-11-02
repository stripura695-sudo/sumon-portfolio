'use client';

import { useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { getInitialTheme, setTheme } from '@/lib/utils';

export default function ThemeToggle() {
  useEffect(() => {
    setTheme(getInitialTheme());
  }, []);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') ?? 'dark';
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      <Sun className="theme-icon-dark" aria-hidden="true" />
      <Moon className="theme-icon-light" aria-hidden="true" />
    </button>
  );
}
