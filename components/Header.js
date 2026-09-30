"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Practice Areas', path: '/practice-areas' },
    { name: 'Office', path: '/office' }
  ];

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          
          {/* Logo */}
          <Link href="/" className="logo">
            <Image src="/logo_transparent.png" alt="SS Law Firm Logo" width={100} height={70} priority style={{ objectFit: 'contain' }} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path}
                className={`nav-link ${pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="header-actions">
            <a href="https://wa.me/916381528329?text=Hello%20Mr.%20Saravanan%2C%20I%20would%20like%20to%20schedule%20a%20legal%20consultation.%20I%20would%20like%20to%20discuss%20my%20legal%20matter%20with%20you." target="_blank" rel="noopener noreferrer" className="btn-primary desktop-cta">
              Consultation
            </a>
            
            <button 
              className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Slide Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          <nav className="mobile-nav">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path}
                className={`mobile-nav-link ${pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <a href="https://wa.me/916381528329?text=Hello%20Mr.%20Saravanan%2C%20I%20would%20like%20to%20schedule%20a%20legal%20consultation.%20I%20would%20like%20to%20discuss%20my%20legal%20matter%20with%20you." target="_blank" rel="noopener noreferrer" className="mobile-nav-link" style={{ color: 'var(--gold-primary)' }}>
              Consultation
            </a>
          </nav>
        </div>
      </div>

    </>
  );
}
