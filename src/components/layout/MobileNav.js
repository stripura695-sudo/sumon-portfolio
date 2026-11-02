'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/data/constants';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-menu">
      <button
        type="button"
        className="mobile-menu-toggle"
        aria-expanded={isOpen}
        aria-controls="mobile-menu-panel"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav
        id="mobile-menu-panel"
        className="mobile-menu-panel"
        aria-label="Mobile navigation"
        hidden={!isOpen}
      >
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#contact" onClick={() => setIsOpen(false)}>
          Contact
        </a>
      </nav>
    </div>
  );
}
