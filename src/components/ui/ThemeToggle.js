'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { getInitialTheme, setTheme } from '@/lib/utils';

/**
 * Theme Toggle Component - Dark/Light Mode Switch
 */
export default function ThemeToggle() {
  const [theme, setThemeState] = useState('dark');
  const [mounted, setMounted] = useState(false);

  // Separate effect for mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Separate effect for theme initialization and changes
  useEffect(() => {
    if (mounted) {
      setTheme(theme);
    } else {
      // Initialize theme only on first mount
      const initialTheme = getInitialTheme();
      setThemeState(initialTheme);
      setTheme(initialTheme);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setThemeState(newTheme);
    setTheme(newTheme);
  };

  // Avoid hydration mismatch
  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg bg-background-secondary border border-border-primary"
        aria-label="Toggle theme"
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-background-secondary hover:bg-background-tertiary border border-border-primary transition-colors duration-200"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-foreground" />
      ) : (
        <Moon className="w-5 h-5 text-foreground" />
      )}
    </button>
  );
}
